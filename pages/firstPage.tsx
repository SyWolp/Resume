import { info } from 'console';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/header';

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listInfos } from "../src/graphql/queries";
import { createInfos } from '../src/graphql/mutations';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

export default function FirstPage() {

    interface mainInfo {
        kname: string,
        ename: string,
        age: number,
        adr: string,
        gender: string,
        cp: number,
        img: string,
    }

    const [fileImage, setFileImage] = useState(".");
    const [firstInfoForm, setFirstInfoForm] = useState<mainInfo>({
        kname: "",
        ename: "",
        age: 0,
        adr: "",
        gender: "",
        cp:0,
        img: ""
    });
    const [firstInfo, setFirstInfo] = useState({
        kname: "",
        ename: "",
        age: 0,
        adr: "",
        gender: "",
        cp:0,
        img: ""
    });
    const router = useRouter();


    function onImgChange(e:any) {
        if(e.target.files[0]) {
            setFirstInfo((pv)=> {return {...pv, img:URL.createObjectURL(e.target.files[0])}});
            setFileImage(URL.createObjectURL(e.target.files[0]));
        }
    }
    console.log(firstInfo);
    const valueOnChange = (ch:any, index:number,value:any,set:any) => {
        const newContent = [...value];
        console.log(newContent);
        newContent[index].content = ch;
        set(newContent);
    };
    const dataSubmit = async (e:any) => {
        e.preventDefault();
        console.log(firstInfo);
        await API.graphql(graphqlOperation(createInfos, {input: firstInfo}));
    }

    return (
        <div className="printPage">
            <Header title="이력서" />
            <header className='w-full m-auto grid grid-flow-col bg-red-100'>
                <label htmlFor="picture" className="w-32 h-44 cursor-pointer border hover:bg-gray-50 border-gray-300 rounded-md shadow-smfocus:ring-orange-500 text-gray-700">
                    {fileImage ? <img src={fileImage} alt="" className="w-32 h-44" /> : null}
                    <input onChange={onImgChange} id="picture" type="file" className="hidden" accept="image/*" />
                </label>
                <div className="">
                    <></>
                </div>
            </header>
            <button onClick={dataSubmit}>저장</button>
        </div>
    )
}