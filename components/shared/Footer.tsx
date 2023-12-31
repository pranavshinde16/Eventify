import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image 
          src= "/assets/images/logo_3.png"
          alt='logo'
          width={88}
          height={38}
          />
        </Link>
        <p>2023 Eventify. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer