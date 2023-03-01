import React from 'react'

import { urlFor } from "@/lib/client";

const PageHero = ({ img, title }) => {
  return (
    <div className='section-hero'>
      <img src={urlFor(img && img)} className="section-hero_img" alt={title}/>
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