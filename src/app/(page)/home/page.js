import Image from 'next/image'
import mypic from "../../../../public/mypic/home.png"

import HomeTyping from '@/component/home/HomeTyping'
import MediaAndButton from '@/component/home/MediaAndButton'

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
        <p className='home_paragraph'>I am Shakib. front end developer. I have been doing web development since 2023.The reason for coming to programming is, actually I like coding a lot, and thinking about the future, I think programming is the best option in the future.I don't know if my coding is better than everyone else's. But I try my best to write good coding so that everyone will fall in love with my coding.I am now in Dubai. I am working in hotel and also doing programming and learning new things.Being a Bengali, working alone was very difficult for me. Now I want a front end development job.Pray for me, that I can do something good…</p>
         
         <MediaAndButton/>
        
      </div>
      <div className="home-img">
        <Image  width={700} height={700} src={mypic} alt="home  img" />
      </div>
    </section>
  )
}

export default Home