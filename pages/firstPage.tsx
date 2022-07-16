import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/header';

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listInfos } from "../src/graphql/queries";
import { createInfos } from '../src/graphql/mutations';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

export default function FirstPage() {

    const [fileImage, setFileImage] = useState("");
    const [firstInfo, setFirstInfo] = useState({
        kname: "",
        ename: "",
        age: 0,
        adr: "",
        gender: "",
        cp:0,
        img: ""
    });

    const valueOnChange = (content:any, name:string) => {
        setFirstInfo({...firstInfo, [name]:content})
    };
    function onImgChange(e:any) {
        if(e.target.files[0]) {
            setFirstInfo((pv)=> {return {...pv, img:URL.createObjectURL(e.target.files[0])}});
            setFileImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    const dataSubmit = async (e:any) => {
        e.preventDefault();
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
                <div className="flex flex-col w-full pt-8">
                    <div className='flex-1 flex'>
                        <label className='flex-1'>
                            한글 이름
                            <input className='mx-1 pl-1 border' value={firstInfo.kname} onChange={(e)=>{valueOnChange(e.target.value, "kname")}} type={"text"}></input>
                        </label>
                        <label className='flex-1'>
                            영어 이름
                            <input className='ml-1 pl-1 border' value={firstInfo.ename} onChange={(e)=>{valueOnChange(e.target.value, "ename")}} type={"text"}></input>
                        </label>
                    </div>
                    <div className='flex-1'>
                        <label className=''>
                            주소
                            <input className='ml-1 pl-1 border w-11/12' value={firstInfo.adr} onChange={(e)=>{valueOnChange(e.target.value, "adr")}} type={"text"}></input>
                        </label>
                    </div>
                    <div className='flex-1 flex'>
                        <label className='flex-1'>
                            나이
                            <input className='ml-1 pl-1 border w-20' value={firstInfo.age} onChange={(e)=>{valueOnChange(e.target.value, "age")}} type={"text"}></input>
                        </label>
                        <label className='flex-1'>
                            성별
                            <input className='ml-1 pl-1 border w-20' value={firstInfo.gender} onChange={(e)=>{valueOnChange(e.target.value, "gender")}} type={"text"}></input>
                        </label>
                        <label className='flex-1'>
                            핸드폰
                            <input className='ml-1 pl-1 border w-28' value={firstInfo.cp} onChange={(e)=>{valueOnChange(e.target.value, "cp")}} type={"text"}></input>
                        </label>
                    </div>
                </div>
            </header>
            <main>
                
            </main>
            <button onClick={dataSubmit}>저장</button>
        </div>
    )
}