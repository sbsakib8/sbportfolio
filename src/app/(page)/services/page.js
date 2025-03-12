import ModalService from "@/component/service/ModalService";
import { FaLaptopCode } from "react-icons/fa";



const Service = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: 'MREN Development',
    description: 'We specialize in developing high-quality websites and applications. We specialize in developing high-quality websites and applications.',
    description2:'I have more than 2+ years of experience in PSD **to HTML, and Figma to HTML/file converting** work. I complete these tasks using HTML5, CSS3, Bootstrap 5, JavaScript, WordPress, Elementor, and Photoshop. I am highly expert in converting PSD to HTML, XD to HTML, Sketch to HTML, PDF to HTML, and any kind of image into HTML. If you think that I am perfect for your job/project or if you need this kind of work, you can feel free to contact with me',
    // what i can do
    can1:'PSD to HTML, CSS, BOOTSTRAP'  ,
    can2:'Figma to HTML, CSS, BOOTSTRAP'  ,
    can3:'XD to HTML, CSS, BOOTSTRAP'  ,
    can4:'PSD to HTML' ,
    can5:'Figma to HTML' , 
    can6:' And any kind of images to HTML'  ,
    // my service 
    myservice1:'High-Quality design',
    myservice2:'Full HTML5 and Bootstrap5 markup',
    myservice3:'CSS3 style and animation',
    myservice4:'SEO Friendly Code & Responsive Design',
    myservice5:'100% hand-coded design',
    myservice6:'Supper first delivery',
    myservice7:'100% satisfaction guarantee',

    price: '$330'
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'Web Designer',
    description: 'We specialize in developing high-quality websites and applications. We specialize in developing high-quality websites and applications.',
    description2:'I have more than 2+ years of experience in PSD **to HTML, and Figma to HTML/file converting** work. I complete these tasks using HTML5, CSS3, Bootstrap 5, JavaScript, WordPress, Elementor, and Photoshop. I am highly expert in converting PSD to HTML, XD to HTML, Sketch to HTML, PDF to HTML, and any kind of image into HTML. If you think that I am perfect for your job/project or if you need this kind of work, you can feel free to contact with me',
    // what i can do
    can1:'PSD to HTML, CSS, BOOTSTRAP'  ,
    can2:'Figma to HTML, CSS, BOOTSTRAP'  ,
    can3:'XD to HTML, CSS, BOOTSTRAP'  ,
    can4:'PSD to HTML' ,
    can5:'Figma to HTML' , 
    can6:' And any kind of images to HTML'  ,
    // my service 
    myservice1:'High-Quality design',
    myservice2:'Full HTML5 and Bootstrap5 markup',
    myservice3:'CSS3 style and animation',
    myservice4:'SEO Friendly Code & Responsive Design',
    myservice5:'100% hand-coded design',
    myservice6:'Supper first delivery',
    myservice7:'100% satisfaction guarantee',

    price: '$330'
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    description: 'We specialize in developing high-quality websites and applications.We specialize in developing high-quality websites and applications.',
    description2:'I have more than 2+ years of experience in PSD **to HTML, and Figma to HTML/file converting** work. I complete these tasks using HTML5, CSS3, Bootstrap 5, JavaScript, WordPress, Elementor, and Photoshop. I am highly expert in converting PSD to HTML, XD to HTML, Sketch to HTML, PDF to HTML, and any kind of image into HTML. If you think that I am perfect for your job/project or if you need this kind of work, you can feel free to contact with me',
    // what i can do
    can1:'PSD to HTML, CSS, BOOTSTRAP'  ,
    can2:'Figma to HTML, CSS, BOOTSTRAP'  ,
    can3:'XD to HTML, CSS, BOOTSTRAP'  ,
    can4:'PSD to HTML' ,
    can5:'Figma to HTML' , 
    can6:' And any kind of images to HTML'  ,
    // my service 
    myservice1:'High-Quality design',
    myservice2:'Full HTML5 and Bootstrap5 markup',
    myservice3:'CSS3 style and animation',
    myservice4:'SEO Friendly Code & Responsive Design',
    myservice5:'100% hand-coded design',
    myservice6:'Supper first delivery',
    myservice7:'100% satisfaction guarantee',
    price: '$330'
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
    <div className=''>
      <h2 className='text-[30px] md:text-[40px] text-primarys font-bold'>Services</h2>

   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-7 lg:pl-12">
   {
          Service.map((itme)=>{
            return(
              <div id={itme.id} className=" w-[280px] h-[260px] bg-gray-500 rounded-lg flex flex-col  items-center space-y-2 cursor-pointer hover:animate-pulse " key={itme.id}>
        <h4 className=" mt-3 text-[35px] text-primarys"><FaLaptopCode /></h4>
        <h3 className=" text-[25px] font-bold">{itme.title}</h3>
        <p className=" px-4 text-white text-[16px] leading-[26px]"> {itme.description} </p>
        {/* modalcomponent */}
        <ModalService id={itme.id} title={itme.title} description={itme.description2}  can1={itme.can1} can2={itme.can2} can3={itme.can3} can4={itme.can4} can5={itme.can5} can6={itme.can6} myservice1={itme.myservice1}  myservice2={itme.myservice2}  myservice3={itme.myservice3}  myservice4={itme.myservice4}  myservice5={itme.myservice5} myservice6={itme.myservice6} myservice7={itme.myservice7} price={itme.price}/>
         </div>
            )
          })
      }
   </div>
   
    </div>
  )
}

export default Services