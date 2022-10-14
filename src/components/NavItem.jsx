import React from 'react'
import { Link } from 'react-router-dom';



const NavItem = ({key, text, url, isLast}) => {

  function addBorderRight() {
    if (isLast === false) {
      return 'border-r-[1px] border-[#FCE8DE]'
    }
    else {
      return ''
    }
  }

  return (
      <li className={'text-center inline-block my-auto w-1/3 ' + addBorderRight()}>
        <Link to={url}>
          <a className='my-auto hover:text-lg'>{text}</a>
        </Link>
      </li>
    )
}


export default NavItem