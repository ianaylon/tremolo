import React from 'react'
import { urlFor } from '@/lib/client'

const TitleTextImage = ({content: {title, text, image}}) => {
  return (
    <div className="tc-features_item">
      <div className="tc-features_content-holder">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="tc-features_image-holder">
        <img
          src={urlFor(image ?? image)}
          alt={title}
          className={"tc-features_image"}
        />
      </div>
    </div>
  )
}

export default TitleTextImage