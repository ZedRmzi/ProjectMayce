import React, {useState} from 'react'

const Footer = () => {

  return (
    <footer className='mt-auto bottom-0 text-[#FCE8DE]'>
        <div className='bg-[#3B1524]'>

            <div id='socials' className='flex justify-around'>
              <div className='md:basis-1/2 mx-2'>test</div>
              <div className='flex md:justify-end md:basis-1/2 '>
                <div className='md:border-solid md:border-l-2 md:pl-5 md:my-2 border-[#ffff] md:justify-end mx-2'>
                  <a className='' href='https://www.instagram.com/maycealbakri/'>
                    <i class="fa-brands fa-instagram fa-lg"></i> <span className=''>maycealbakri</span>
                  </a>
                </div>
              </div>
              
            </div>

            <div id='copyright' className='flex justify-center'> 
              Copyright © 2022 
            </div>
            
        </div>
    </footer>
  )
}

export default Footer