import React from 'react'

const ArtModal = ({showModal, setShowModal, image}) => {
  return (
    <>
        {showModal ? 
        <div className='fixed flex justify-center items-center top-0 left-0 right-0 inset-0 bg-gray-500 bg-opacity-75 transition-opacity'>
            <img className="h-[80%] mx-auto align-middle" src={image}></img> 
        </div> 
        : null}
    </>
    
  )
}

export default ArtModal