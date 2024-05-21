import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white h-[200px] p-[2rem] w-[100%] text-black grid grid-cols-5 '>
      <div className=' col-span-4  flex flex-col justify-center'>
        <h1 className=' font-semibold text-2xl font-recursive uppercase text-[#5853ff] '>TechyStar</h1>
        <p className=' text-lg text-[2rem] font-recursive '>@all right reserved</p>
      </div>

      <div className=' col-span-1'>
        <h5 className=' font-recursive text-xl text-center font-semibold '>Follow Me</h5>
        <div className=' flex flex-col text-center p-[1rem] space-y-1 '>
          <a className=' hover:text-[blue] text-lg font-medium ' href="https://www.linkedin.com/in/virjesh-choudhary-5b7a31232/" target={"blank"}>
            Linkedin
          </a>
          <a className=' hover:text-[blue] text-lg font-medium ' href="https://www.instagram.com/virjesh_choudhary/" target={"blank"}>
            Instagram
          </a>
          <a className=' hover:text-[blue] text-lg font-medium ' href="https://github.com/VirjeshChoudhary" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer