import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/client'
import Image from 'next/image'
import Link from "next/link";
import logo from '../public/tremolo-logo.png'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

const PageHero = ({ img, title }) => {
  return (
    <div className='section-hero'>
      <Link href={'/'}>
        <Image src={logo} alt="logo" className='hero_logo' />
      </Link> 
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