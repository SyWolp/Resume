import { useEffect, useState } from "react";

export default function Header({title}:any) {
    let date = new Date();
    const [days, setDays]: any = useState({year:date.getFullYear(), month:date.getMonth()+1, day:date.getDate()});
        if(`${days.month}`.length === 1) setDays({...days, month:`0${days.month}`});
        if(`${days.day}`.length === 1) setDays({...days, day:`0${days.day}`});

    return (
        <div className="w-full grid grid-cols-3">
            <div></div>
            <h1 className="mx-auto my-10 text-center text-5xl font-bold">{title}</h1>
            <div className="mt-24 ml-14">작성 날짜 : {`${days.year}.${days.month}.${days.day}`}</div>
        </div>
    )
}