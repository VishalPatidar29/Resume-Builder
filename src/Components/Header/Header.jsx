import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
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
    <header className='py-3 shadow bg-gray-500'>
      <nav className='flex'>
        <ul className='flex ml-auto'>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
          )}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
