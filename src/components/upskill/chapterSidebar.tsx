
import { useNavigate } from "react-router-dom"
import {chapter} from "../../data/chapters"

import clock from "/assets/icons/clock-light.svg"

const ChapterCard = ({chapter, active, setActiveChapter}: any) => {

  const {id, title, duration : {hours, minutes}} = chapter;
  const navigate = useNavigate();

  const handleChapterCardClick = () => {
    setActiveChapter(chapter)
    navigate(`/upskill/learning/${id}`);
  }


  return (
    <button
      className={`border-spindle text-[20px] capitalize  w-full  transition-colors `}
      onClick={handleChapterCardClick}
    >
      <div className={` ${active?.title === title ? "bg-secondaryActive font-semibold " : "font-normal "} flex p-4 gap-4 items-center rounded-lg`}>
        <div
          className="flex justify-between w-full gap-1"
        >
          <div className="flex items-center justify-between w-full">
            <p>
              {title}
            </p>

            {active?.title === title && <img src={clock} alt="" className="w-[20px] h-[20px]" />}
          </div>

          {active?.title === title 
            && 
          <p 
            className="font-normal text-secondaryActiveText"
          >
            {hours<10 ? `0${hours}` : hours}:{minutes<10 ? `0${minutes}` : minutes}:00
          </p>
          }
        </div>
      </div>
    </button>
  )
}



const ChapterSidebar = (
  {chapters, activeChapter , setActiveChapter}: {chapters: chapter[], activeChapter: chapter | undefined, setActiveChapter: React.Dispatch<React.SetStateAction<chapter | undefined>>}, 
  
  ) => {

  return (
    <div className="w-[350px] ">
      {
        chapters.map((chapter, index) => (
            <ChapterCard 
            key={index} 
            chapter={chapter} 
            active={activeChapter}  
            setActiveChapter={setActiveChapter}
          />
        ))
      }

    </div>
  )
}

export default ChapterSidebar