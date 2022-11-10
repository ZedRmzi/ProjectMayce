import React, { useState } from 'react'
import NavItem from './NavItem'
import { v4 as uuidv4 } from 'uuid';


const navList = [
  { text: "Art", url: "/" },
  { text: "About", url: "/About" },
  { text: "More", url: "/More" }
]

const Navbar = () => {


  const [width, setWidth] = useState(0)


  function SetDisplayWidth() {
    setWidth(window.innerWidth)
  }
  setInterval(SetDisplayWidth, 125)
  

  function NavMenuDisplay() {
    // make sure same as xs media query in tailwind.config.js when doing checks
    if (width > 1023) {
      return <ul className='flex flex-row lg:ease-in-out lg:transition-all basis-4/12 group-hover:basis-5/12 last:border-r-0'>
        {navList.map((item, i, isLast) => {
          return <NavItem
            key={uuidv4()}
            text={item.text}
            url={item.url}
            isLast={i === navList.length - 1 ? true : false} />
        })}
      </ul>
    } else {
      return (
        //HAMBURGER MENU
        <button onClick={{}}>
          <div class="space-y-1 hover:space-y-2 mr-5">
            <span class="block w-8 h-1 bg-[#3B1524]"></span>
            <span class="block w-8 h-1 bg-[#3B1524]"></span>
            <span class="block w-8 h-1 bg-[#3B1524]"></span>
          </div>
        </button>
      )
    }
  }


  return (
    <>
      <nav className='group m text-[#3B1524] h-16 lg:hover:h-20 grid grid-cols-12 justify-around shadow-md lg:ease-in-out lg:transition-all duration-500'>
        <div className='my-auto py-auto lg:col-span-3 xs:col-span-6 xs:col-start-4 text-center'>
          <h1 className='font-bold font-PassionsConflict xs:text-[1.4rem] lg:text-[2.5rem] mx-auto'>Project <span>Mayce</span></h1>
        </div>
        <div className='lg:col-span-9 xs:col-span-1 lg:col-start-5 xs:col-start-12 my-auto flex flex-row-reverse'>
          {NavMenuDisplay()}
          {/* <ul className='flex flex-row ease-in-out transition-all basis-4/12 hover:basis-5/12 last:border-r-0'>
            {navList.map((item, i, isLast) => {
              return <NavItem
                      key={uuidv4()}
                      text={item.text}
                      url={item.url} 
                      isLast={i === navList.length-1 ? true : false}/>
            })}
          </ul> */}
          <div className='basis-1/6'></div>
        </div>
      </nav>
    </>

  )
}

export default Navbar