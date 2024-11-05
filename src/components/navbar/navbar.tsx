import bell from "../../../public/assets/icons/bell.svg"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end gap-3 p-4">
      <div className="w-[40px] h-[40px] rounded-[6px] bg-bgSecondary flex justify-center items-center">
        <img src={bell} alt="" className="w-[18px] h-[18px]" />
      </div>

      <div className="w-[42px] h-[42px] bg-[#D9D9D9] rounded-full"></div>
    </nav>
  )
}

export default Navbar