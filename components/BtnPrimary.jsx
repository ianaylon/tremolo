import React from 'react'
import Link from 'next/link'

const BtnPrimary = ({destination, text}) => {
  return (
    <Link href={destination} className="btn-primary">{text}</Link>
  )
}

export default BtnPrimary