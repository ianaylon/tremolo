import React from 'react'
import Image from 'next/image'

const PageHero = ({ img, title }) => {
  return (
    <div className='section-hero'>
      <Image className='section-hero_img' src={img} alt={title}/>
      <div className='section-hero_content'>
        <div className='page-padding'>
          <div className='container'>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHero