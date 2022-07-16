import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import Header from '../components/header';

import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);
import { listInfos } from "../src/graphql/queries";

const Home: NextPage = () => {
  const [select, setSelect] = useState(true);
  const router = useRouter();
  const selectButton = ["bg-blue-500","bg-blue-200"];
  const [info, setInfo] = useState<any[]>([]);
  const fetchInfo = async () => {
    const request = await API.graphql(graphqlOperation(listInfos));
    setInfo(request.data.listInfos.items);
  };
  useEffect(()=> {
      fetchInfo();
  },[])

  return (
    <div className='w-full h-screen bg-yellow-100'>
      <Header title="이력서 선택" />
      <div onClick={()=> setSelect(true)} className={`${select ? selectButton[0] : selectButton[1]} inline-block w-32 rounded-t-xl text-center cursor-pointer shadow-inner`}>이력서 선택</div>
      <div onClick={()=> setSelect(false)} className={`${select ? selectButton[1] : selectButton[0]} inline-block w-32 rounded-t-xl text-center cursor-pointer`}>내 이력서</div>
        <div className='w-full h-1/2 mt-0 bg-blue-500 flex flex-row'>
        { select ?
        <>        
          <Link href={"./firstPage"}>
            <a className='w-1/6 h-2/3 bg-red-200 mx-10 my-14 shadow-2xl flex rounded-3xl'>
              <div className='items-center justify-center flex-1 flex'>1번 스타일</div>
            </a>
          </Link>
        </> : 
          <>
          {info.map((v)=>{
            return (
                <Link key={v.id} href={{
                  pathname: `myresume/${v.id}`,
                  query: {
                    kname: v.kname,
                    ename: v.ename,
                    age: v.age,
                    adr: v.adr,
                    gender: v.gender,
                    cp: v.cp,
                    img: v.img,
                  }
              }} as={`myresume/${v.id}`}>
                  <a className='w-1/6 h-2/3 bg-red-200 mx-10 my-14 shadow-2xl flex rounded-3xl'>
                    <div className='items-center justify-center flex-1 flex'>{v.kname}</div>
                  </a>
                </Link>
            )
          })}
          </>
        }
      </div> 
    </div>
  )
}

export default Home
