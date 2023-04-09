import React, {useEffect, useState} from 'react'
import { Link} from "react-router-dom"
import { logo, menu, close } from "../assets"
import { navLinks } from '../constants'
// import { Tech, Finance, Business, Science } from "./index"


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='fixed sm:px-16 px-6 w-full flex items-center py-1.5 sm:py-3.5 top-0 z-20 bg-primary primary-color'>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link 
        to="https://thriving-lamington-a6a5cb.netlify.app/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer pr-4'><span className={"md:block hidden"}>News API</span></p>
        </Link>
      
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map(Link => (
            <li
              key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"} hoover: text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(Link.title)}>
              
                <a href={`https://thriving-lamington-a6a5cb.netlify.app/${Link.id}`}>{Link.title}</a>

            </li>
          ))}

        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center '>
          <img src={toggle ? close : menu} 
          alt="hamburger-menu" 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />
          
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-5 black-gradient absolute top-12 right-0 mx-1 my-3.5 min-w-[140px] z-10 rounded-md`}
          >
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map(Link => (
                <li
                  key={Link.id}
                  className={`${
                    active != Link.title 
                    ? "text-white" 
                    : "text-secondary"
                  } hoover: font-poppins font-medium
                  cursor-pointer text-[16]`} 
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(Link.title)
                  }}
                >
                  <a href={`https://thriving-lamington-a6a5cb.netlify.app/${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul> 
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar