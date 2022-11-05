import React, {useState} from 'react'

const Footer = () => {

  return (
    <footer className='mt-auto bottom-0 text-[#3B1524] border-solid border-[#3B1524]'>
      <div className='bg-white'>

        {/* <div id='socials' className='flex justify-around'> */}
          {/* <div className='md:basis-1/2 mx-2'></div>
            <div className='flex md:justify-end md:basis-1/2 '>
              <div className='md:pl-5 md:my-2 md:justify-end mx-2'>
                <a className='' href='https://www.instagram.com/maycealbakri/'>asdf</a>
              </div>
            </div>
          
          </div> */}

        <div id='copyright' className='flex flex-col  justify-around pt-5 pb-10'>
          <div className='flex mx-auto'>
            <a href='https://www.facebook.com/mayce.albakri'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='https://www.twitter.com/'className='ml-4'><i class="fa-brands fa-twitter"></i></a>
            <a href='https://www.instagram.com/maycealbakri/' className='ml-4'><i class="fa-brands fa-instagram fa-lg"></i></a>
            <a href='https://www.tiktok.com/@maycespalette' className='ml-4'><i class="fa-brands fa-tiktok"></i></a>
          </div>
          <div className='mx-auto mt-5'>
            Copyright © 2022 <span className='text-gray-500'>Powered by Zeid Ramzi <a href='https://github.com/ZedRmzi' className=''><i class="fa-brands fa-github"></i></a></span> 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer