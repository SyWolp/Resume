import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listInfos } from "../../src/graphql/queries";
import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

export default function Detail() {
    const router = useRouter();
    const [firstInfo, setFirstInfo] = useState([]);
    const fetchInfo = async () => {
        const request = await API.graphql(graphqlOperation(listInfos));
        setFirstInfo(request.data.listInfos.items);
    };
    useEffect(()=> {
        fetchInfo();
    },[])
    console.log(firstInfo);
    return (
        <div className="">
            <div>
                {firstInfo.map((v)=>{
                    return (
                        <div>
                            {v.img ? <img src={v.img} alt="" className="w-32 h-44" /> : <div>이미지 없음</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}