import React, { useState } from 'react'


const More = () => {
  return (
    <>
      <div className='flex w-full h-auto text-center font-Noto'>
        <h1 className='mx-auto py-[8vh] font-bold lg:text-6xl text-3xl'>Got any questions or specific inquiries?</h1>
      </div>
      <div id='lilly' className='flex w-full h-auto'>
        <div id='filter' className='bg-[#3B1524] w-full h-full top-0 left-0 right-0 bottom-0'>

          <div className='flex lg:flex-row flex-col w-[73%] mx-auto '>
            <div className='bg-black/90 lg:w-[70%] lg:my-28 my-0 mt-20 lg:mx-auto py-20 lg:px-20 px-12 text-white relative rounded-tl-2xl lg:rounded-bl-2xl rounded-bl-none rounded-tr-2xl lg:rounded-tr-none'>
              <div className='w-full pb-16'>
                <h2 className='text-3xl'>Send an Email</h2>
              </div>
              <form className='flex flex-col font-Noto' action="mailto:maycealbakri@yahoo.com" method="get" enctype="text/plain">
                <div className='flex flex-col'>
                  <label for="name">Full name:</label>
                  <input type="text" id="name" name="name" />
                  <label for="Email" >Your email address</label>
                  <input type="email" id="Email" name="Email" class="fcf-form-control" required />
                </div>
                <div className='flex flex-col'>
                  <textarea name="comments" rows="12" cols="35" placeholder='Send your comments to us.'></textarea>
                  <div className='w-full justify-end lg:text-right text-center'>
                    <input id='submit' type="submit" name="submit" value="Send" className='cursor-pointer'/>
                  </div>
                </div>
              </form>
            </div>

            <div id='contact' className='text-[#3B1524] lg:min-w-[300px] bg-[#E82E88] flex-col lg:w-[30%] font-Noto font-semibold lg:my-28 mb-20 lg:mx-auto py-20 lg:px-20 px-12 lg:rounded-r-2xl lg:rounded-bl-none rounded-bl-2xl rounded-br-2xl'>
              <div className='w-full mx-auto pb-10'>
                <h2 className='text-3xl pb-16'>Contact and Other Info</h2>
                <p className='text-xl leading-10'>
                  Address (temporary):<br />
                  4Street161 Clinton<br />
                  Little Rock, AR, 72211<br />
                  Phone: <a href="tel:123-456-7890">123-456-7890</a><br /><br />
                  <div id='copyright' className='flex flex-col justify-around pt-5 pb-10'>
                    <div className='flex mx-auto'>
                      <a href='https://www.facebook.com/mayce.albakri' className='p-1'><i class="fa-brands fa-facebook-f"></i></a>
                      <a href='https://www.twitter.com/' className='ml-4 p-1'><i class="fa-brands fa-twitter"></i></a>
                      <a href='https://www.instagram.com/maycealbakri/' className='ml-4 p-1'><i class="fa-brands fa-instagram fa-lg"></i></a>
                      <a href='https://www.tiktok.com/@maycespalette' className='ml-4 p-1'><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>


          {/* <div className='bg-black/90 w-[50%] lg:my-28 my-20 mx-auto py-20 lg:px-20 px-12 text-white relative rounded-2xl'>

            

            <form className='flex flex-col font-Noto' action="mailto:mayce_albakri@gmail.com" method="get" enctype="text/plain">
              <div className='flex flex-col'>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" />
                <label for="Email" >Your email address</label>
                <input type="email" id="Email" name="Email" class="fcf-form-control" required />
              </div>
              <div className='flex flex-col'>
                <textarea name="comments" rows="12" cols="35">Send your comments to us.</textarea>
                <input type="submit" name="submit" value="Send" />
              </div>
            </form>

          </div> */}

        </div>
      </div>
    </>
  )
}

export default More