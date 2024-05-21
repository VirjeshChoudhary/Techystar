import React from 'react'
import "../styles/style.css";
import vg from "../assets/2.webp" ;
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
   
    <div className="home w-[100%] h-[100vh] bg-[#090c31]" id="home">
      
        <main className='absolute flex  uppercase flex-col items-center w-[100%] h-[100%] p-[2rem] justify-center'>
       
          <h1 className=' text-[6rem] text-white'>TechyStar</h1>
          <p className='text-white font-semibold text-xl pt-[1.5rem]'>Solution to all your problems</p>
        </main>
        
      </div>






      <div className="w-[100%] mt-[-120px] mb-[70px] bg-[#090c31] h-[100vh] px-14 flex justify-center items-center ">
        <img className='home2img w-[30%] relative'  src={vg} alt="Graphics" />

        <div className=' w-[50%] flex flex-col justify-center items-center p-[5rem] h-[vh] '>
          <p  className='text-white [word-spacing:5px] font-recursive text-[1.2rem]  tracking-widest '> 
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>






      <div className="home3 w-[100%] h-[170vh] lg:h-[120vh]  lg:mb-0 bg-[#090c31] mt-[-200px] flex" id="about">
        <div className='w-[70%] h-[150vh] lg:h-[90vh]  bg-gray-300 border rounded-r-[200px] flex flex-col justify-center items-center p-[10rem]  '>
          <h1 className=' uppercas text-2xl font-medium  w-[10rem] text-center  border-b-[2px] border-solid border-black '>Who we are?</h1>
          <p className='mt-[2rem] [word-spacing:5px] tracking-wider font-recursive leading-[170%] '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>





      <div className="home4 w-[100%] h-[100vh] bg-[#090c31] flex justify-end " id="brands">
        <div className='bg-[#5853ff] rounded-l-[200px] w-[70%] h-[70vh] p-[2rem] flex flex-col items-center justify-center '>
          <h1 className='text-[white] uppercase w-[140px] border-b-[2px] border-solid border-white p-[0.5rem] font-medium text-2xl text-center mb-[1.5rem]'>Brands</h1>

          <article className='flex mx-[2rem] flex-wrap justify-center  '>
            <div className='brands m-[1rem] h-[10rem] w-[10rem] bg-[white] rounded-full flex flex-col items-center justify-center text-black transition-all duration-[0.5s] hover:invert-[1]  '
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle className=' text-[4rem] ' />
              <p className=' text-[1.2rem] font-recursive font-semibold '>Google</p>
            </div>

            <div className='brands m-[1rem] h-[10rem] w-[10rem] bg-[white] rounded-full flex flex-col items-center justify-center text-black transition-all duration-[0.5s] hover:invert-[1]  '
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle className=' text-[4rem] ' />
              <p className=' text-[1.2rem] font-recursive font-semibold '>Amazon</p>
            </div>

            <div className='brands m-[1rem] h-[10rem] w-[10rem] bg-[white] rounded-full flex flex-col items-center justify-center text-black transition-all duration-[0.5s] hover:invert-[1]  '
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube className=' text-[4rem] ' />
              <p className=' text-[1.2rem] font-recursive font-semibold '>Youtube</p>
            </div>

            <div className='brands m-[1rem] h-[10rem] w-[10rem] bg-[white] rounded-full flex flex-col items-center justify-center text-black transition-all duration-[0.5s] hover:invert-[1]  '
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram className=' text-[4rem] ' />
              <p className=' text-[1.2rem] font-recursive font-semibold '>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home