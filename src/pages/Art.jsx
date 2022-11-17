import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ArtCard from '../components/ArtCard.jsx'


// object to hold art img info in public/img/art
const ArtItems = [
  { title: "protestor", description: "test", image: 'ProjectMayce/img/art/cocacolatop.jpg' },
  { title: "peaceflag", description: "test", image: 'ProjectMayce/img/art/peaceflag.jpg' },
  { title: "building", description: "test", image: 'ProjectMayce/img/art/building.jpg' },
  { title: "coffee", description: "test", image: 'ProjectMayce/img/art/coffee.jpg' },
  { title: "rivercity", description: "test", image: 'ProjectMayce/img/art/rivercity.jpg' },
  { title: "cocacolatop", description: "test", image: 'ProjectMayce/img/art/cocacolatop.jpg' },
  { title: "pyrabuilding", description: "test", image: 'ProjectMayce/img/art/pyrabuilding.jpg' },
  { title: "black", description: "test", image: 'ProjectMayce/img/art/black.jpg' },
  { title: "snowmountains", description: "test", image: 'ProjectMayce/img/art/snowmountains.jpg' },
  { title: "mountains", description: "test", image: 'ProjectMayce/img/art/mountains.jpg' },
  { title: "food", description: "test", image: 'ProjectMayce/img/art/food.jpg' },
  { title: "sunsetshore", description: "test", image: 'ProjectMayce/img/art/sunsetshore.jpg' },
  { title: "fallentree", description: "test", image: 'ProjectMayce/img/art/fallentree.jpg' }
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