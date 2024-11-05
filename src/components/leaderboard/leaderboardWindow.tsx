import { useState } from "react";
import Loader from "../loader";


const LeaderboardWindow = () => {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
      setIsLoading(false);
  }, 1000);

  return (isLoading ? 
    <div className='bg-white rounded-lg w-full min-h-[calc(100vh-100px)] flex justify-center items-center border-[1px] space-y-2 border-border p-4'>
        <Loader />
    </div>
    :
    <div className='bg-white rounded-lg w-full min-h-[calc(100vh-100px)] border-[1px] border-border p-4'>Leaderboard Coming Soon</div>)
}

export default LeaderboardWindow