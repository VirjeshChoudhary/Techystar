import React from 'react'

const Contact = () => {
  return (
    <div className="contact w-[100%] h-[100vh] bg-[#090c31] flex justify-center items-center ">
      <main className=' bg-[white] h-[34rem] w-[60%] rounded-2xl p-[3rem] '>
        <h1>Contact Us</h1>

        <form className=' lg:m-[5rem] flex flex-col items-center justify-center '>
          <div className=' h-[3rem] flex items-center justify-end w-[60%] m-[0.5rem] '>
            <label className=' font-recursive text[1.2rem] font-semibold w-[40%] lg:w-[20%] my-[1rem]  '>Name :</label>
            <input className='ml-[1.2rem] lg:ml-0 self-stretch w-[120%] lg:w-[80%] p-[1rem] rounded-lg border-solid outline-none border-[rgba(123, 123, 123, 0.6)] border-[1px] '  type="text" required placeholder="Username" />
          </div>

          <div className=' h-[3rem] flex items-center justify-end w-[60%] m-[0.5rem] '>
            <label className=' font-recursive text[1.2rem] font-semibold w-[40%] lg:w-[20%] my-[1rem]  '>Email :</label>
            <input className='ml-[1.2rem] lg:ml-0 self-stretch w-[120%] lg:w-[80%] p-[1rem] rounded-lg border-solid outline-none border-[rgba(123, 123, 123, 0.6)] border-[1px] ' type="email" required placeholder="Abc@gmail.com" />
          </div>
          <div className=' h-[3rem] flex items-center justify-end w-[60%] m-[0.5rem] '>
            <label className=' font-recursive text[1.2rem] font-semibold w-[70%] lg:w-[20%] my-[1rem]  '>Message :</label>
            <input className='ml-[1.2rem] lg:ml-0 self-stretch w-[120%] lg:w-[80%] p-[1rem] rounded-lg border-solid outline-none border-[rgba(123, 123, 123, 0.6)] border-[1px] ' 
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button className=' my-[3rem] p-[0.7rem] border-none rounded-md text-white w-[200px] font-semibold text-[1rem] font-recursive  hover:opacity-90 bg-[#5853ff] ' type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact