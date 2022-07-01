import { useState } from "react";

export default function Header({title}:any, main:boolean) {
    const date = new Date();
    let [year, month, day]: string[] | Number[] = [date.getFullYear(), date.getMonth(), date.getDay()];
    if(`${month}`.length === 1) month = `0${month}`;
    if(`${day}`.length === 1) day = `0${day}`;
    const [fileImage, setFileImage] = useState("");
    async function onImgChange(e:any) {
        if(e.target.files[0]) {
            setFileImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <div className="w-full grid grid-cols-3">
            {main ? <label htmlFor="picture" className="w-32 h-44 cursor-pointer border hover:bg-gray-50 border-gray-300 rounded-md shadow-smfocus:ring-orange-500 text-gray-700">
            <img src={fileImage} alt="" className="w-32 h-44" />
            <input onChange={onImgChange} id="picture" type="file" className="hidden" accept="image/*" />
            </label>: <div>sad</div>}
            <h1 className="mx-auto my-10 text-center text-5xl font-bold">{title}</h1>
            <div className="mt-24 ml-14">작성 날짜 : {`${year}.${month}.${day}`}</div>
        </div>
    )
}