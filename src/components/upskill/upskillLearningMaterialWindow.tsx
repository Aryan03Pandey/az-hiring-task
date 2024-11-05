import ChapterSidebar from "./chapterSidebar"
import chapters, {chapter, resource} from "../../data/chapters"
import { useState, useContext, createContext, Children } from "react"

import { AnimatePresence, motion } from "framer-motion";

import clock from "/assets/icons/clock-dark.svg"
import difficultyIcon from "/assets/icons/contest-light.svg" 
import resourceIcon from "/assets/icons/resource.svg"
import arrowUp from "/assets/icons/arrow-up.svg"
import arrowDown from "/assets/icons/arrow-down.svg"
import videoIcon from "/assets/icons/video.svg"
import questionIcon from "/assets/icons/question.svg"
import codingIcon from "/assets/icons/coding.svg"
import { Link } from "react-router-dom";


const AccordionContext = createContext<any>({});
const useAccordion = () => useContext(AccordionContext);

const Accordion = ({ children, defaultIndex }: any) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  function onChangeIndex(index: any) {
    setActiveIndex(() => {
        return index === activeIndex ? -1 : index;
    });
  }

  return Children.map(children, (child, index) => {
    const isActive = activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

const AccordionHeader = ({ children } : any) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`AccordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  );
}

const AccordionHeaderContent = ({index, title, duration, difficulty, percentageCompleted, numberOfResources}: any) => {
  const {hours, minutes} = duration
  const { isActive } = useAccordion();

  return <div>
    <div className="flex justify-between items-center w-full p-[20px]">
      {/* PART number and title */}
      <div>
        <p className="text-[16px] font-normal text-secondaryText">PART {index}</p>
        <h1 className="text-[18px] font-bold">{title}</h1>
      </div>

      {/* part info */}

      <div className="text-secondaryText flex flex-col items-end gap-2">
        {/* part info 1 */}
        <div className="flex items-center gap-3">
          {/* duration */}
          <div className="flex items-center gap-1">
            <img src={clock} alt="" className="w-[20px] h-[20px]" />
            <p 
            className="font-normal"
          >
            {hours<10 ? `0${hours}` : hours}:{minutes<10 ? `0${minutes}` : minutes}:00
          </p>
          </div>

          {/* difficulty */}
          <div className="flex items-center gap-1">
            <img src={difficultyIcon} alt="" className="w-[20px] h-[20px]" />
            <p 
              className="font-normal"
            >
              {difficulty}
            </p>
          </div>

          {/* Number of resource */}
          <div className="flex items-center gap-1">
            <img src={resourceIcon} alt="" className="w-[20px] h-[20px]" />
            <p 
              className="font-normal"
            >
              {numberOfResources}
            </p>
          </div>

          {isActive ? <img src={arrowUp} alt="" className="w-[20px] h-[20px]" /> : <img src={arrowDown} alt="" className="w-[20px] h-[20px]" />}

        </div>

        {/* part info 2 */}
        <div className="text-xs text-black border-[1px] border-border rounded-[8px] p-[4px]  bg-secondaryActive w-fit">
          {percentageCompleted}% Completed
        </div>
      </div>
    </div>
    <div className="progress-bar">
      <div className="progress" style={{width: `${percentageCompleted}%`}}></div>
    </div>

  </div>
}

const AccordionPanel = ({ children }: any) => {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const AccordionPanelContent = ({resource}: {resource: resource}) => {

    const {type, link, title, duration: {hours, minutes}} = resource

  return <button
      className={`border-spindle text-[20px] capitalize w-full items-center p-4 py-6`}
    >
      <div
        className="flex justify-between w-full "
      >
        <Link 
          to={link}
          className="flex items-center gap-4"
        >
          {
            type === 'video' ? <img src={videoIcon} alt="" className="w-[36px] h-[36px] -ml-1" /> 
            : type === 'article' || type === 'quiz' ? <img src={questionIcon} alt="" className="w-[30px] h-[30px]" />
            : type === 'exercise' ? <img src={codingIcon} alt="" className="w-[32px] h-[32px]" />
            : <img src={resourceIcon} alt="" className="w-[32px] h-[32px]" />
          }
          <p className="text-[20px] font-semibold">{title}</p>
        </Link>

        <div className="flex items-center gap-2 text-[20px]">
          <img src={clock} alt="" className="w-[20px] h-[20px]" />
          <p 
            className="font-normal text-secondaryText"
          >
            {hours<10 ? hours>0 && `0${hours}:` : `${hours}:`}{minutes<10 ? `0${minutes}` : minutes}:00
          </p>
        </div>
      </div>
    </button>
}

const AccordionItem = ({ children }: any) => {
  const {isActive} = useAccordion();
  return <div className={`AccordionItem ${isActive && ' shadow-custom-light '} `}>{children}</div>;
}


const UpskillLearningMaterialWindow = () => {
  const [activeChapter, setActiveChapter] = useState<chapter | undefined>()

  return (
    <div className="flex gap-4">
      <ChapterSidebar chapters={chapters} activeChapter={activeChapter} setActiveChapter={setActiveChapter} />

      <div className="w-full">
        <Accordion>
          {activeChapter && activeChapter.parts.map((part, i) => (
            <AccordionItem key={i}>
              <AccordionHeader>
                <AccordionHeaderContent 
                  index={i+1} 
                  title={part.title}
                  duration={part.duration}
                  difficulty={part.difficulty}
                  percentageCompleted={part.percentageCompleted}
                  numberOfResources={part.numberOfResources}
                /> 
              </AccordionHeader>
              <AccordionPanel>
                {
                  part.resources.map((resource, index) => {
                    return <AccordionPanelContent key={index} resource={resource} />
                  })
                }
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default UpskillLearningMaterialWindow