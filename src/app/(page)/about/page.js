import AboutTyping from "@/component/about/AboutTyping"
import MediaAndButton from "@/component/about/MediaAndButton"

function About() {

  return (
    <div className=" w-full flex flex-col md:flex-row">
       <div className="text-center md:text-start space-y-3 md:w-[50%] ">
      <h1 className=" text-[30px] md:text-[40px] text-primarys font-bold">About me</h1>

      <h3 className=" font-bold text-[25px] md:text-[28px] leading-[30px]">I am SB Sakib Sarkar
      <AboutTyping/>
      </h3>
      <p className="text-[18px] text-wrap md:pr-6 lg:mt-18">I have been working in the field of web development since 2023. My passion for programming started when I was a kid. I love to think about the future, and I think programming is the best option in the future. I don't know if my coding is better than everyone else's. But I try my best to write good coding so that everyone will fall in love with my coding. I am now in Dubai. I am working in hotel.</p>

      <MediaAndButton/>
     </div>

     <div className="md:w-[50%] flex flex-col justify-center items-center md:-mt-5">
           <img className=" w-[450px]" src='mypic/about.png'></img>
      </div>

    </div>
    
  )
}

export default About