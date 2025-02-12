import Image from 'next/image'
import mypic from "../../../../public/mypic/home.png"
function Home() {
  
  return (
    <section className="home_secton">
      <div className=" left_site">
        <h3 className=' font-bold text-[20px'>
          Hello, It's Me
        </h3>
        <h1 className='home_sb'> SB SAKIB SARKAR</h1>
        <div className='flex gap-4  items-center'>
          <h3 className=' font-bold text-[28px]'>And I'm a </h3>
          <h2 className='home_title'>Front End Developer </h2>
        </div>
        <p className='home_paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Illum temporibus veniam
          qui quidem eum assumenda
          distinctio suscipit voluptate optio cum.</p>

        <button type="button" className='home_button'>Contact</button>
      </div>
      <div className="home-img">
        <Image width={500} height={500} src={mypic} alt="home img" />
      </div>
    </section>
  )
}

export default Home