import { useState } from 'react';
import Header from '../components/header';

export default function FirstPage() {

    const [fileImage, setFileImage] = useState("");

    async function onImgChange(e:any) {
        if(e.target.files[0]) {
            setFileImage(URL.createObjectURL(e.target.files[0]));
        }
    }
    
    return (
        <div className="printPage">
            <Header title="이력서" />
            <header className='w-full m-auto grid grid-flow-col bg-red-100'>
                <label htmlFor="picture" className="w-32 h-44 cursor-pointer border hover:bg-gray-50 border-gray-300 rounded-md shadow-smfocus:ring-orange-500 text-gray-700">
                    {fileImage ? <img src={fileImage} alt="" className="w-32 h-44" /> : null}
                    <input onChange={onImgChange} id="picture" type="file" className="hidden" accept="image/*" />
                </label>
                <div>
                    <div>이름</div>
                    <div>주소</div>
                </div>
                <div>
                    <div>나이</div>
                </div>
            </header>
        </div>
    )
}