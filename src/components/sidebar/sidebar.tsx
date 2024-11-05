import { useContext } from "react";
import SidebarHeader from "./sidebarHeader";
import SidebarCard from "./sidebarCard";
import sidebarLinks from "../../data/sidebarLinks";
import {motion} from "framer-motion"
import { SidebarContext } from "../../App";



const Sidebar = () => {
  const {open} = useContext(SidebarContext)
  return (
    
      <motion.nav
      layout
      className="fixed top-0 left-0 h-screen shrink-0 p-4"
      style={{
        width: open ? "267px" : "90px",
      }}
    >
      <SidebarHeader />

      <div className="space-y-2">
        {
          sidebarLinks.map((link, index) => (
            <SidebarCard key={index} data={link} />
          ))
        }
      </div>
    </motion.nav>
  )
}

export default Sidebar