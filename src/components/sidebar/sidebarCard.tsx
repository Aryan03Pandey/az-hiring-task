import { useContext } from "react"
import { sidebarLinks } from "../../data/sidebarLinks"
import { SidebarContext } from "../../App"
import { useNavigate } from "react-router-dom"
import {motion} from 'framer-motion'

const SidebarCard = ({data}: {data: sidebarLinks}) => {
  const {icon, text, link} = data

  const {open, active, setActive} = useContext(SidebarContext)
  const navigate = useNavigate();

  const Icon = icon;

  const handleClick = () => {
    setActive(text)
    navigate(link)
  }


  return (
    <motion.button
      layout
      onClick={handleClick}
      className={`relative flex p-4 text-[20px] capitalize gap-4 w-full items-center rounded-md transition-colors  ${active === text ? "bg-primaryActive text-activeText font-bold" : "text-black hover:bg-secondaryActive"}`}
    >
      <motion.div
        layout
        className="grid h-full place-content-center"
      >
        {/* <img src={icon} alt="" className="w-[24px] h-[24px]" /> */}
        {<Icon />}
      </motion.div>
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${text == 'dashboard' ? 'text-activeText' : ''}`}
        >
          {text}
        </motion.div>
      )}
    </motion.button>
  )
}

export default SidebarCard