import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ArtCard from '../components/ArtCard.jsx'


// object to hold art img info in public/img/art
const ArtItemsColOne = [
  {title: "building", description: "test", image: 'img/art/building.jpg'},
  {title: "coffee", description: "test", image: 'img/art/coffee.jpg'},
  {title: "fallentree", description: "test", image: 'img/art/fallentree.jpg'}
]

const ArtItemsColTwo = [
  {title: "building", description: "test", image: 'img/art/building.jpg'},
  {title: "coffee", description: "test", image: 'img/art/coffee.jpg'},
  {title: "fallentree", description: "test", image: 'img/art/fallentree.jpg'}
]

const ArtItemsColThree = [
  {title: "protestor", description: "test", image: 'img/art/protestor.jpg'},
  {title: "peaceflag", description: "test", image: 'img/art/peaceflag.jpg'}
]

const Art = () => {
  return (
    
    <div className='sm:my-5 md:my-10 grid grid-cols-8 gap-[3%]'>
      
      <div className='col-span-2 col-start-2 w-full min-h-fit'>
        <div className='flex flex-col md:mb-8 sm:mb-5'>
          <div className='min-h-fit w-full bg-white border-2 rounded-xl shadow-md  p-5'>
            <a href="https://www.google.com">
              {/* <img src={ArtItems[0].image} className='pb-5'/> */}
            </a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veritatis voluptatum modi earum blanditiis nisi natus beatae illo, eum culpa fuga quam consequatur explicabo voluptate nam magnam fugiat. Odit, iure!
          </div>
        </div>

        <div className='flex flex-col md:mb-8 sm:mb-5'>
          <div className='min-h-fit w-full bg-white border-2 rounded-xl shadow-md  p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veritatis voluptatum modi earum blanditiis nisi natus beatae illo, eum culpa fuga quam consequatur explicabo voluptate nam magnam fugiat. Odit, iure!</div>
        </div>

      </div>

      <div className='col-span-2 col-start-4 w-full h-full'>

        {ArtItemsColTwo.map((artItem, i) => {
          return <ArtCard 
                  key={uuidv4()}
                  title={artItem.title}
                  description={artItem.description}
                  image={artItem.image}
                  />
        })}

      </div>

      <div className='col-span-2 col-start-6 w-full h-full'>

        {ArtItemsColThree.map((artItem, i) => {
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

export default Art