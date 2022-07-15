import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
    const router = useRouter();
    console.log(router);
        if(typeof router.query.ename === "string") {
            let a = router.query.ename;
            console.log(a);
            a = a.replace(/(?:\r\n|\r|\n)/g,'\n');
            console.log(a);
            router.query.ename = a;
        }

    return (
        <>
        {
        router.query.kname ?         
        <div className="">
            <div>{router.query.kname}</div>
            <div className="whitespace-pre-wrap">{router.query.ename}</div>
            <div>{router.query.age}</div>
            <div>{router.query.adr}</div>
            <div>{router.query.cp}</div>
            <div>{router.query.img}</div>
            <div>{router.query.gender}</div>
            <div>rkskekfk<br/>dsfdsf</div>
        </div> : <div>로딩중</div>
        }
        </>
    )
}