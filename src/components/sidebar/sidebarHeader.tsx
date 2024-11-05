import { useContext } from "react"
import { SidebarContext } from "../../App"
import {motion} from 'framer-motion';

import hamburger from '../../../public/assets/icons/hamburger.svg'



const SidebarHeader = () => {
    const {open, setOpen} = useContext(SidebarContext)
    
    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className="flex items-center gap-6 p-4 mb-6">
        <motion.div
            layout
            className="grid shrink-0 place-content-center rounded-md cursor-pointer"
            onClick={handleClick}
        >
            <img src={hamburger} alt="" />
        </motion.div>
        {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* <img src={logo} alt="" className="block w-[143.36px] h-[27.7px]" /> */}
              <span className="block text-2xl font-bold text-logo">AlgoZenith</span>
            </motion.div>
          )}
    </div>
  )
}

export default SidebarHeader