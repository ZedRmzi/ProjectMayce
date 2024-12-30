import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ArtCard from '../components/ArtCard.jsx'


// object to hold art img info in public/img/art
const ArtItems = [
  { title: "1", description: "test", image: '/projectmayce/img/art/1.jpg' },
  { title: "2", description: "test", image: '/projectmayce/img/art/2.jpg' },
  { title: "3", description: "test", image: '/projectmayce/img/art/3.jpg' },
  { title: "4", description: "test", image: '/projectmayce/img/art/4.jpg' },
  { title: "5", description: "test", image: '/projectmayce/img/art/5.jpg' },
  { title: "6", description: "test", image: '/projectmayce/img/art/6.jpg' },
  { title: "7", description: "test", image: '/projectmayce/img/art/7.jpg' },
  { title: "8", description: "test", image: '/projectmayce/img/art/8.jpg' },
  { title: "9", description: "test", image: '/projectmayce/img/art/9.jpg' }
]


// ArtItems.forEach((e,i) => i % 2 === 0 ? colOne.push(e) : null)
var colOne = []
var colTwo = []
var colThree = []
var colFour = []
var count = 1

ArtItems.forEach((e,i) => {
  if (i % 3 === 0) {
    colOne.push(e)
  } else if (i % 3 === 1) {
    colTwo.push(e)
  } else if (i % 3 === 2) {
    colThree.push(e)
  } 
})

const Art = () => {


  function handleClick() {
    console.log(colOne)
  }

  const [width, setWidth] = useState(0)

  function SetDisplayWidth() {
    setWidth(window.innerWidth)
  }
  setInterval(SetDisplayWidth, 250)

  function ArtPageDisplay() {
    
    if (width > 1023) {
      return (
        <div className='sm:my-5 md:my-10 md:grid md:grid-cols-11 sm:flex flex-col gap-[3%]'>   
          <div className='col-span-3 col-start-2 w-full h-full'>

            {colOne.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div>

          <div className='col-span-3 col-start-5 w-full h-full'>

            {colTwo.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div>

          <div className='col-span-3 col-start-8 w-full h-full'>

            {colThree.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div>

          {/* <div className='col-span-2 col-start-8 w-full h-full'>

            {colFour.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div> */}

        </div>
      )
    } else {
      return (
        <div className='flex flex-col mx-8 my-6'>
          <div className='w-full h-full'>

            {ArtItems.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div>

        </div>
      )
    }
  }

  return (
    <>
      {/* {ArtPageDisplay()} */}
      <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:mx-[120px] lg:space-y-0 mt-10 flex flex-col mx-auto lg:items-center'>
      {ArtItems.map((artItem, i) => {
              return <>
                <div className='max-w-sm flex-initial lg:px-3 lg:my-auto lg:object-contain'>
                  <ArtCard
                    key={uuidv4()}
                    title={artItem.title}
                    description={artItem.description}
                    image={artItem.image}
                  />
                </div>
              </>

            })}
      </div>
    </>
  )
}

export default Art