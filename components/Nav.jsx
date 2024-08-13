import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = ({ onShowForm }) => {
  return (
    <nav className='bg-bl-10 w-full max-container flexBetween padding-container px-6
        absolute z-30 py-5 bg-white-10 shadow-md h-[70px]'>
      <Link href="/">
        <Image
          src='/Ascella-logo.svg'
          alt="Ascell_logo"
          width={45}
          height={45}
        />
      </Link>

      <div className="hidden h-full gap-12 lg:flex ml-32">
        <Image
          src='/Ascella-text.svg'
          alt="Ascell_logo"
          width={200}
          height={200}
        />
      </div>

      <div
        className="lg:flexCenter hidden gap-3"
        onClick={onShowForm}>
        <p className='text-[#8A8A8A] montserrat hover:text-white cursor-pointer'>Ascella for startups</p>

        <button className='border-[1px] border-[#8A8A8A] p-1 px-[7px] py-[5px] rounded-[5px]'>
          <Image
            src='/Arrow.svg'
            alt="Ascell_logo"
            width={10}
            height={10}
          />
        </button>
      </div>
    </nav>
  )
}

export default Nav