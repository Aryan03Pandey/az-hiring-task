import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import UpskillNavbar from "./upskillNavbar"
import UpskillLearningMaterialWindow from "./upskillLearningMaterialWindow"
import UpskillMentorSessionsWindow from "./upskillMentorSessionsWindow"
import Loader from "../loader"

const UpskillWindow = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    const [tab, setTab] = useState<string>('learning');

    useEffect( () => {
        setTab(location.pathname.split('/')[2] || 'learning');
    }, [location.pathname])

    setTimeout(() => {
        setIsLoading(false);
    }, 1000);


  return ( isLoading ? 
    <div className='bg-white rounded-lg w-full min-h-[calc(100vh-100px)] flex justify-center items-center border-[1px] space-y-2 border-border p-4'>
        <Loader />
    </div>
    :
    <div className='bg-white rounded-lg w-full min-h-[calc(100vh-100px)] border-[1px] space-y-4 border-border p-4'>
        <UpskillNavbar tab={tab} />
        <hr className=" h-[1px] border-border/80 w-full" />
        {
            tab === 'learning' ? <UpskillLearningMaterialWindow /> : <UpskillMentorSessionsWindow />
        }
    </div>
  )
}

export default UpskillWindow