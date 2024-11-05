import React, { useContext } from 'react'
import { SidebarContext } from '../../../src/App'

const Forums: React.FC = () => {
    const {active} = useContext(SidebarContext)

  return (
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6667 22.6667H28.3334V20C28.3333 19.1687 28.0742 18.3581 27.5922 17.6808C27.1102 17.0036 26.4291 16.4933 25.6437 16.221C24.8583 15.9487 24.0075 15.9279 23.2097 16.1614C22.4119 16.3949 21.7066 16.8712 21.192 17.524M21.6667 22.6667H8.33335M21.6667 22.6667V20C21.6667 19.1253 21.4987 18.2893 21.192 17.524M21.192 17.524C20.6969 16.2866 19.8424 15.226 18.7387 14.4788C17.635 13.7317 16.3328 13.3324 15 13.3324C13.6672 13.3324 12.365 13.7317 11.2614 14.4788C10.1577 15.226 9.30316 16.2866 8.80802 17.524M8.33335 22.6667H1.66669V20C1.66675 19.1687 1.9258 18.3581 2.40784 17.6808C2.88987 17.0036 3.57093 16.4933 4.35635 16.221C5.14177 15.9487 5.99252 15.9279 6.79034 16.1614C7.58815 16.3949 8.29339 16.8712 8.80802 17.524M8.33335 22.6667V20C8.33335 19.1253 8.50135 18.2893 8.80802 17.524M19 5.33334C19 6.39421 18.5786 7.41163 17.8284 8.16177C17.0783 8.91192 16.0609 9.33334 15 9.33334C13.9392 9.33334 12.9217 8.91192 12.1716 8.16177C11.4214 7.41163 11 6.39421 11 5.33334C11 4.27248 11.4214 3.25506 12.1716 2.50492C12.9217 1.75477 13.9392 1.33334 15 1.33334C16.0609 1.33334 17.0783 1.75477 17.8284 2.50492C18.5786 3.25506 19 4.27248 19 5.33334ZM27 9.33334C27 10.0406 26.7191 10.7189 26.219 11.219C25.7189 11.7191 25.0406 12 24.3334 12C23.6261 12 22.9478 11.7191 22.4477 11.219C21.9476 10.7189 21.6667 10.0406 21.6667 9.33334C21.6667 8.6261 21.9476 7.94782 22.4477 7.44773C22.9478 6.94763 23.6261 6.66668 24.3334 6.66668C25.0406 6.66668 25.7189 6.94763 26.219 7.44773C26.7191 7.94782 27 8.6261 27 9.33334ZM8.33335 9.33334C8.33335 10.0406 8.0524 10.7189 7.5523 11.219C7.05221 11.7191 6.37393 12 5.66669 12C4.95944 12 4.28117 11.7191 3.78107 11.219C3.28097 10.7189 3.00002 10.0406 3.00002 9.33334C3.00002 8.6261 3.28097 7.94782 3.78107 7.44773C4.28117 6.94763 4.95944 6.66668 5.66669 6.66668C6.37393 6.66668 7.05221 6.94763 7.5523 7.44773C8.0524 7.94782 8.33335 8.6261 8.33335 9.33334Z" stroke={active == "forums" ? "#172B4D": "black"} stroke-width={active == "forums" ? "3" : "2"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Forums;