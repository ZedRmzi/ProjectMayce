import React, {useState} from 'react'
import ArtModal from './ArtModal'

const ArtCard = ({title, description, image}) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev=> !prev)
  }

  return (
    <>
      <div className='md:mb-8 xs:py-5 lg:py-0'>
        {/* <div className='min-h-fit w-full bg-[#FCE8DE] border-2 rounded-xl shadow-md sm:p-0 lg:p-5'> */}
          <a onClick={openModal}>
            <img src={image} className='transition-all cursor-pointer hover:scale-110' alt={title}/>
            <ArtModal showModal={showModal} setShowModal={setShowModal} image={image}/>
          </a>
          {/* {description} */}
        </div>
      {/* </div> */}
    </>
  )
}

export default ArtCard