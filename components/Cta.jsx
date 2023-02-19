import React from 'react'
import Link from 'next/link'

const Cta = ({mainText, btnText}) => {
  return (
    <div className='cta'>
        <div className='page-padding'>
            <div className='container'>
                <p>{mainText}</p>
                <Link className='btn-dark margin-top' href={'/'}>{btnText}</Link>
            </div>
        </div>
    </div>
  )
}

export default Cta