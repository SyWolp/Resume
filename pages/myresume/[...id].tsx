import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Header from "../../components/header";
export default function Detail() {
    const router = useRouter();
    console.log(router);
        // if(typeof router.query.ename === "string") {
        //     let a = router.query.ename;
        //     a = a.replace(/(?:\r\n|\r|\n)/g,'\n');
        //     router.query.ename = a;
        // }

    return (
        <div className="printPage">
        <Header title="이력서" />
        <header className='w-full h-40 m-auto flex bg-slate-50'>
            <label htmlFor="picture" className="w-1/5 h-full cursor-pointer border hover:bg-gray-50 border-gray-300 rounded-md shadow-smfocus:ring-orange-500 text-gray-700">
                {typeof router.query.img === "string" ? <Image src={router.query.img} alt="myimg" width={500} height={625}/> : null}
            </label>
            <div className="flex-1 flex flex-col pt-8 ml-1">
                <div className='flex-1 flex'>
                    <label className='flex-1 font-bold'>
                        한글 이름
                        <span className='mx-1 pl-1 w-20 font-normal' >{router.query.kname}</span>
                    </label>
                    <label className='flex-1 font-bold'>
                        영어 이름
                        <span className='mx-1 pl-1 w-32 font-normal' >{router.query.ename}</span>
                    </label>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>
                        주소
                        <span className='mx-1 pl-1 font-normal' >{router.query.adr}</span>
                    </label>
                </div>
                <div className='flex-1 flex'>
                    <label className='flex-1 font-bold'>
                        나이
                        <span className='mx-1 pl-1 w-20 font-normal' >{router.query.age}</span>
                    </label>
                    <label className='flex-1 font-bold'>
                        성별
                        {/* <input className='ml-1 pl-1 border w-20' value={firstInfo.gender} onChange={(e)=>{valueOnChange(e.target.value, "gender")}} type={"text"}></input> */}
                        <span className='mx-1 pl-1 w-20 font-normal' >{router.query.gender}</span>
                    </label>
                    <label className='flex-1 font-bold'>
                        핸드폰
                        <span className='mx-1 pl-1 w-20 font-normal' >{router.query.cp}</span>
                    </label>
                </div>
            </div>
        </header>
        <main className='w-full mt-5'>
            <div className='w-full h-20 bg-slate-50'>
                <h2 className='w-full text-center text-lg'>최종 학력</h2>
                <div className='flex w-full mt-2 justify-center'>
                    <select className='pl-1 border-r'>
                        <option>고졸</option>
                        <option>2/3년제</option>
                        <option>4년제</option>
                    </select>
                    <input className='w-36 pl-1 border-r' type={"text"} placeholder="출신 학교 입력" value="" />
                    <input className='w-36 pl-1 border-r' type={"text"} placeholder="전공 입력" value="" />
                    <input className='w-36 pl-1 border-r' type={"text"} placeholder="재학 기간 입력" value="" />
                    <select className='pl-1'>
                        <option>졸업</option>
                        <option>중퇴</option>
                        <option>휴학</option>
                        <option>재학 중</option>
                    </select>
                </div>
            </div>
        </main>
    </div>
    )
}