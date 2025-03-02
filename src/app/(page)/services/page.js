import { FaLaptopCode } from "react-icons/fa";



const Service = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: 'MREN Development',
    description: 'We specialize in developing high-quality websites and applications. We specialize in developing high-quality websites and applications.'
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'Web Designer',
    description: 'We specialize in developing high-quality websites and applications. We specialize in developing high-quality websites and applications.'
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    description: 'We specialize in developing high-quality websites and applications.We specialize in developing high-quality websites and applications.'
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: 'Full stack development',
    description: 'We specialize in developing high-quality websites and applications.We specialize in developing high-quality websites and applications.'
  },

]

function Services() {
  return (
    <div >
      <h2 className='text-[30px] md:text-[40px] text-primary font-bold'>Services</h2>

   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-7 lg:pl-12">
   {
          Service.map((itme)=>{
            return(
              <div className=" w-[280px] h-[260px] bg-gray-500 rounded-lg flex flex-col  items-center space-y-2 cursor-pointer hover:animate-pulse " key={itme.id}>
        <h4 className=" mt-3 text-[35px] text-primary"><FaLaptopCode /></h4>
        <h3 className=" text-[25px] font-bold">{itme.title}</h3>
        <p className=" px-4 text-white text-[16px] leading-[26px]"> {itme.description} </p>

         </div>
            )
          })
      }
   </div>
    </div>
  )
}

export default Services