/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/client'

const MeFeature = ( {feature: {image, title}} ) => {
  return (
    <div className="me-feature">
        <img src={urlFor(image && image)} className='me-feature_img' alt={title}/>
        <div className="me-feature_content"><p>{title}</p></div>
     </div>
  )
}

export default MeFeature