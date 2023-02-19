import React from 'react'
import Link from 'next/link'

const BtnSecondary = ({destination, text}) => {
  return (
    <Link href={destination} className="btn-secondary">{text}</Link>
  )
}

export default BtnSecondary