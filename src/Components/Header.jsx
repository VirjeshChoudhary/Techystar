import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Header = () => {
  return (
    <div className=' w-[100%] flex justify-between items-center sticky bg-white top-0 z-10'>
        <h1 className=' uppercase font-extrabold text-2xl pl-4'>TechyStar.</h1>
        <main className='w-[70%] flex justify-end'>
            <HashLink  className=' text-[rgb(44,44,44)] m-[1rem] hover:text-[#5853ff]' to={"/#home"}>Home</HashLink>
            <Link className=' text-[rgb(44,44,44)] m-[1rem] hover:text-[#5853ff]' to={"/contact"}>Contact</Link>
            <HashLink className=' text-[rgb(44,44,44)] m-[1rem] hover:text-[#5853ff]' to={"/#about"}>About</HashLink>
            <HashLink className=' text-[rgb(44,44,44)] m-[1rem] hover:text-[#5853ff]' to={"/#brands"}>Brands</HashLink>
            <Link className=' text-[rgb(44,44,44)] m-[1rem] hover:text-[#5853ff]' to={"/services"}>Services</Link>
            
        </main>
    </div>
  )
}

export default Header