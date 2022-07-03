import { info } from 'console';
import { useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/header';

export default function FirstPage() {

    const [fileImage, setFileImage] = useState("");
    const [firstInfo, setFirstInfo] = useState([
        {infoName: "이름", content: ""},
        {infoName: "나이", content: ""},
        {infoName: "주소", content: ""},
    ]);
    const router = useRouter();

    const saveInfo = (id:number, infoName:any, infoAge:any, infoAdr:any) => {
        router.push({
            pathname: `/myresume/${id}`,
            query: {
                infoName: infoName, 
                infoAge: infoAge,
                infoAdr: infoAdr
            }
        }, `/myresume/${id}`);
    }

    async function onImgChange(e:any) {
        if(e.target.files[0]) {
            setFileImage(URL.createObjectURL(e.target.files[0]));
        }
    }
    
    const valueOnChange = (ch:any, index:number,value:any,set:any) => {
        const newContent = [...value];
        console.log(newContent);
        newContent[index].content = ch;
        set(newContent);
    };

    return (
        <div className="printPage">
            <Header title="이력서" />
            <header className='w-full m-auto grid grid-flow-col bg-red-100'>
                <label htmlFor="picture" className="w-32 h-44 cursor-pointer border hover:bg-gray-50 border-gray-300 rounded-md shadow-smfocus:ring-orange-500 text-gray-700">
                    {fileImage ? <img src={fileImage} alt="" className="w-32 h-44" /> : null}
                    <input onChange={onImgChange} id="picture" type="file" className="hidden" accept="image/*" />
                </label>
                <div className="">
                    {firstInfo.map((infos,index)=>{
                        return(
                            <div key={index}>
                                <label>
                                    {infos.infoName}
                                    <input type="text" value={infos.content}  onChange={(e) => valueOnChange(e.target.value,index,firstInfo,setFirstInfo)} />
                                </label>
                            </div>
                        )
                    })}
                </div>
            </header>
            <button onClick={()=>{saveInfo(1,firstInfo[0].content,firstInfo[1].content,firstInfo[2].content)}}>저장</button>
        </div>
    )
}