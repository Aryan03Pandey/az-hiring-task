
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import calendar from "../../../public/assets/icons/calendar.svg"
import briefcase from "../../../public/assets/icons/briefcase.svg"
import info from "../../../public/assets/icons/info.svg"

import { useNavigate } from 'react-router-dom';




const ButtonGroup = ({tab}: {tab: string}) => {
  const [activeButton, setActiveButton] = useState(tab);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, width: 0 });
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const navigate = useNavigate();

  const buttons = [
    { id: 'mentor', label: 'Mentor Sessions', icon: calendar, link: 'mentor' },
    { id: 'learning', label: 'Learning Material', icon: briefcase, link: 'learning' }
  ];

  useEffect(() => {
    // Update the position and width of the active button
    const activeIndex = buttons.findIndex(button => button.id === activeButton);
    if (buttonsRef.current[activeIndex]) {
      const button = buttonsRef.current[activeIndex];
      setButtonPosition({
        left: button.offsetLeft,
        width: button.offsetWidth,
      });
    }
  }, [activeButton]);

  const handleButtonClick = (button: any) => {
    setActiveButton(button.id)
    navigate(`/upskill/${button.link}`);
  }

  return (
    <div 
      style={{backgroundImage: 'linear-gradient(180deg, rgba(239,245,255,1) 0%, rgba(255,255,255,1) 100%'}}
      className="relative flex p-2 rounded-[11px] w-fit"
    >
      {/* Sliding window with Framer Motion */}
      <motion.div
        className="absolute top-2 h-[75%] border-[1px] border-border/80 bg-white rounded-lg"
        style={{
          left: buttonPosition.left,
          width: buttonPosition.width,
          boxShadow: "0 3px 3px 0px #29539B4D"
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
        layout
      />

      {/* Render each button */}
      {buttons.map((button, index) => (
        <button
          key={button.id}
          ref={el => (buttonsRef.current[index] = el)} 
          onClick={() => handleButtonClick(button)}
          className={`relative z-10 flex gap-2  items-center p-2 px-4 text-sm font-semibold transition-colors text-black`}
        >
          <img src={button.icon} alt="" className='w-[32px] h-[32px]' />
          <p className={`${activeButton === button.id ? 'font-bold' : 'font-normal'}`}>{button.label}</p>
        </button>
      ))}
    </div>
  );
};

const InfoButton = () => {
  return (
    <button className='flex gap-[2px] items-center p-2 border-[1px] rounded-[12px] border-border'>
      <img src={info} alt="" className='w-[32px] h-[32px]' />
      <p className='font-bold text-[16px] text-logo'>How it works</p>
    </button>
  )
}



const UpskillNavbar = ({tab}: {tab: string}) => {
  return (
    <div className='flex justify-between items-center'>
      <ButtonGroup tab={tab}/>
      <InfoButton />
    </div>
  )
}

export default UpskillNavbar