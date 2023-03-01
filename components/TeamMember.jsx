/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PortableText } from "@portabletext/react";

import { urlFor } from '@/lib/client'

const TeamMember = ({name, role, content, image}) => {
  return (
    <div className='team-member'>
                <img
                    src={urlFor(image ?? image)}
                    alt={name}
                    className='team-member_img'
                />
        <div>
            <h2>{name}</h2>
            <h3>{role}</h3>
            <PortableText value={content} />
        </div>
    </div>
  )
}

export default TeamMember