import Image from 'next/image'
import mypic from "../../../../public/mypic/home.png"
function Home() {
  return (
    <section className=" px-10 flex flex-col md:flex-row w-full h-screen">
    <div className=" text-white pt-32 w-[95%] md:w-[50%]">
        <h3 className=' font-bold text-[20px'>
            Hello, It's Me
        </h3>
        <h1 className='bg-gradient-to-r from-[#0ef] to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent text-[35px] my-3 '> SB SAKIB SARKAR</h1>
        <div className='flex gap-4  items-center'>
        <h3  className=' font-bold text-[28px]'>And I'm a </h3>
          <h2 className=''>Front End Developer </h2>
        </div>
        <p className=' mt-1.5 max-w-[500px] text-[17px] leading-[30px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Illum temporibus veniam 
            qui quidem eum assumenda
             distinctio suscipit voluptate optio cum.</p>
            
         <button type="button" className=' text-black rounded-lg bg-[#0ef] shadow-2xl shadow-[#0ef]/50 w-[200px] h-12 text-[20px] font-semibold transition-all mt-8 hover:bg-amber-400 hover:bg-linear-to-r/increasing from-indigo-500 to-teal-400 hover:shadow-none cursor-pointer'>Download CV</button>    
    </div>
    <div className="home-img">
        <Image  width={500} height={500} src={mypic} alt="home img"/>
    </div>
</section>
  ) 
}

export default Home