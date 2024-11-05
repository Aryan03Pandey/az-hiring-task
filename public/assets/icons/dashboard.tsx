import React, { useContext } from 'react'
import { SidebarContext } from '../../../src/App'

const Dashboard: React.FC = () => {
    const {active} = useContext(SidebarContext)

  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H7C7.79565 1 8.55871 1.31607 9.12132 1.87868C9.68393 2.44129 10 3.20435 10 4V7C10 7.79565 9.68393 8.55871 9.12132 9.12132C8.55871 9.68393 7.79565 10 7 10H4C3.20435 10 2.44129 9.68393 1.87868 9.12132C1.31607 8.55871 1 7.79565 1 7V4ZM16 4C16 3.20435 16.3161 2.44129 16.8787 1.87868C17.4413 1.31607 18.2044 1 19 1H22C22.7956 1 23.5587 1.31607 24.1213 1.87868C24.6839 2.44129 25 3.20435 25 4V7C25 7.79565 24.6839 8.55871 24.1213 9.12132C23.5587 9.68393 22.7956 10 22 10H19C18.2044 10 17.4413 9.68393 16.8787 9.12132C16.3161 8.55871 16 7.79565 16 7V4ZM1 19C1 18.2044 1.31607 17.4413 1.87868 16.8787C2.44129 16.3161 3.20435 16 4 16H7C7.79565 16 8.55871 16.3161 9.12132 16.8787C9.68393 17.4413 10 18.2044 10 19V22C10 22.7956 9.68393 23.5587 9.12132 24.1213C8.55871 24.6839 7.79565 25 7 25H4C3.20435 25 2.44129 24.6839 1.87868 24.1213C1.31607 23.5587 1 22.7956 1 22V19ZM16 19C16 18.2044 16.3161 17.4413 16.8787 16.8787C17.4413 16.3161 18.2044 16 19 16H22C22.7956 16 23.5587 16.3161 24.1213 16.8787C24.6839 17.4413 25 18.2044 25 19V22C25 22.7956 24.6839 23.5587 24.1213 24.1213C23.5587 24.6839 22.7956 25 22 25H19C18.2044 25 17.4413 24.6839 16.8787 24.1213C16.3161 23.5587 16 22.7956 16 22V19Z" stroke="#172B4D" stroke-width={active == "dashboard" ? "3" : "2"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Dashboard;