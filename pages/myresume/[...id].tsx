import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Detail() {
    const router = useRouter();
    useEffect(() => {
        if(router.isReady){
            const { infoName,infoAge,infoAdr } = router.query;
            console.log(infoName);
         }
    }, [router.isReady]);
    return (
        <div className="">
            {router.query.infoName}
            <br/>
            {router.query.infoAge}
            <br/>
            {router.query.infoAdr}
        </div>
    )
}