import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbClipboardText } from "react-icons/tb";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },

    {
      name: "About",
      slug: "/about-us",
      active: true,
    },
  ]

  return (
    <>
      <header className='md:px-6 lg:px-8 xl:px-18 px-4 py-3 shadow bg-[#009689] dark:bg-[#171923] dark:text-white'>

        <div className="flex wrap  justify-between">

          <div><TbClipboardText color="white" size="40px" /></div>

          <nav className='flex items-center '>


            <ul className='ml-auto hidden md:flex'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-bock px-6 py-2 duration-200 hover:text-white text-[#000] cursor-pointer dark:text-white'
                    >{item.name}</button>
                  </li>
                ) : null
              )}
            </ul>
            <button className="px-3 py-2 rounded cursor-pointer" onClick={toggleTheme}> {theme == 'light' ? <FaMoon color="#bcbcc6" className="hover:fill-white" /> : <MdOutlineWbSunny color="#bcbcc6" className="hover:fill-white" />} </button>

            <button onClick={() => setOpen(!isOpen)} className="md:hidden">  {isOpen ? <RxCross1 color="white" /> : <RxHamburgerMenu color="white" />}</button>

          </nav>

        </div>

      </header>
      {/* Mobile view Menu  */}

      {isOpen && (
        <div className="sm:flex md:hidden py-3 px-6 shadow bg-[#fff]  dark:bg-[#171923] dark:text-white absolute w-full" >
          <ul className=''>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="border-b-2">
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-0 py-2 duration-200 hover:text-white text-black dark:text-white'
                  >{item.name}</button>
                </li>
              ) : null
            )}
          </ul> </div>)}

    </>
  );
}

export default Header;
