import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ArtCard from '../components/ArtCard.jsx'


// object to hold art img info in public/img/art
const ArtItemsColOne = [
  { title: "building", description: "test", image: 'img/art/building.jpg' },
  { title: "coffee", description: "test", image: 'img/art/coffee.jpg' },
  { title: "fallentree", description: "test", image: 'img/art/fallentree.jpg' }
]

const ArtItemsColTwo = [
  { title: "building", description: "test", image: 'img/art/building.jpg' },
  { title: "coffee", description: "test", image: 'img/art/coffee.jpg' },
  { title: "fallentree", description: "test", image: 'img/art/fallentree.jpg' }
]

const ArtItemsColThree = [
  { title: "protestor", description: "test", image: 'img/art/protestor.jpg' },
  { title: "peaceflag", description: "test", image: 'img/art/peaceflag.jpg' }
]

const ArtItems = [
  { title: "protestor", description: "test", image: 'img/art/protestor.jpg' },
  { title: "peaceflag", description: "test", image: 'img/art/peaceflag.jpg' },
  { title: "building", description: "test", image: 'img/art/building.jpg' },
  { title: "coffee", description: "test", image: 'img/art/coffee.jpg' },
  { title: "fallentree", description: "test", image: 'img/art/fallentree.jpg' }
]


// ArtItems.forEach((e,i) => i % 2 === 0 ? colOne.push(e) : null)
var colOne = []
var colTwo = []
var colThree = []
var count = 1

ArtItems.forEach((e, i) => i % 3 === 0 ? colOne.push(e) : null)
ArtItems.forEach((e, i) => i % 3 === 1 ? colTwo.push(e) : null)
ArtItems.forEach((e, i) => i % 3 === 2 ? colThree.push(e) : null)


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
        <div className='sm:my-5 md:my-10 md:grid md:grid-cols-8 sm:flex flex-col gap-[3%]'>
          <div className='col-span-2 col-start-2 w-full h-full'>

            {colOne.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div>

          <div className='col-span-2 col-start-4 w-full h-full'>

            {colTwo.map((artItem, i) => {
              return <ArtCard
                key={uuidv4()}
                title={artItem.title}
                description={artItem.description}
                image={artItem.image}
              />
            })}

          </div>

          <div className='col-span-2 col-start-6 w-full h-full'>

            {colThree.map((artItem, i) => {
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
      {ArtPageDisplay()}
    </>

    // <div className='sm:my-5 md:my-10 md:grid md:grid-cols-8 sm:flex flex-col gap-[3%]'>
    //   <div className='col-span-2 col-start-2 w-full h-full'>

    //     {colOne.map((artItem, i) => {
    //       return <ArtCard
    //         key={uuidv4()}
    //         title={artItem.title}
    //         description={artItem.description}
    //         image={artItem.image}
    //       />
    //     })}

    //   </div>

    //   <div className='col-span-2 col-start-4 w-full h-full'>

    //     {colTwo.map((artItem, i) => {
    //       return <ArtCard
    //         key={uuidv4()}
    //         title={artItem.title}
    //         description={artItem.description}
    //         image={artItem.image}
    //       />
    //     })}

    //   </div>

    //   <div className='col-span-2 col-start-6 w-full h-full'>

    //     {colThree.map((artItem, i) => {
    //       return <ArtCard
    //         key={uuidv4()}
    //         title={artItem.title}
    //         description={artItem.description}
    //         image={artItem.image}
    //       />
    //     })}

    //   </div>

    // </div>
  )
}

export default Art