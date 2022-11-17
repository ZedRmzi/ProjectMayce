import React from 'react'
import ArtCard from '../components/ArtCard'
import IMG_5177 from '../img/art/IMG_5177.jpg'

const About = () => {
  return (
    <div>
      <ArtCard
            title='zeid'
            description='test'
            // image={require('../img/art/IMG_5177.jpg')}
            />
            <img className='flex flex-col' href={require('../img/art/IMG_5177.jpg')}></img>
    </div>
    
  )
}

export default About