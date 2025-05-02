import Image from 'next/image'
import mypic from "../../../../public/mypic/home.png"

import HomeTyping from '@/component/home/HomeTyping'
import MediahomeButton from '@/component/home/MediahomeButton'



function Home() {
  
  return (
    <section className="home_secton">
      <div className=" left_site">
        <h3 className=' font-bold text-[20px] text-center md:text-start '>
          Hello, It's Me
        </h3>
        <h1 className='home_sb'> SB SAKIB SARKAR</h1>
        <div className='flex flex-col md:flex-row md:gap-4  items-center'>
          <h3 className=' font-bold text-[28px]'>And I'm a </h3>
          <h2 className='home_title'><HomeTyping/></h2>
        </div>
        <p className='home_paragraph'>I love building creative and user-friendly web applications.
I am always ready to take on new challenges and learn constantly.
If you want to turn your idea into reality, let's work together!</p>
         
         <MediahomeButton/>
        
      </div>
      <div className="home-img">
        <Image  width={700} height={700} src={mypic} alt="home  img" />
      </div>
    </section>
  )
}

export default Home