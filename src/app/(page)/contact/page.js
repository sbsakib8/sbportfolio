
import From from "@/component/contact/From";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
function Contact() {
  return (
    <div className=" w-full   bg-background ">
      <h2 className=" text-[30px] md:text-[40px] text-primarys font-bold">Contact Me</h2>
      <div className=" w-full flex flex-col items-center ">
        <div className="w-full h-full flex flex-col items-center mt-5">
          <h4 className=" text-primarys text-[26px]">Have you any Qestions ?</h4>
          <p className=" text-[18px]">I'm At your Service</p>
        </div>

        {/* media main div */}
        <div className="flex flex-col lg:flex-row  items-center gap-10 lg:gap-26 pl-10 mt-10 lg:mt-16">
          {/* call div */}
          <div>
            <IoCall className="contact_icon text-primarys text-[40px]" />
            <h5 className="text-[20px] font-bold">Call Us On</h5>
            <p>Phone: +971 55 555 5555</p>
          </div>
          {/* location div */}
          <div>
            <IoLocationSharp className="contact_icon text-primarys text-[40px]" />
            <h5 className="text-[20px] font-bold">Office</h5>
            <p>1700 Street, Gazipur, Joydebpur</p>
          </div>
          {/* email div */}
          <div>
            <MdEmail className="contact_icon text-primarys text-[40px]" />
            <h5 className="text-[20px] font-bold">Email</h5>
            <p>sbsakibsarkar8@gmail.com</p>
            <p>sakibhossain7397@gmail.com</p>
          </div>
          {/* website div */}
          <div>
            <TbWorld className="contact_icon text-primarys text-[40px]" />
            <h5 className="text-[20px] font-bold">WebSite</h5>
            <p>www.sbsakib.com</p>
          </div>

        </div>

        <div className="w-full h-full flex flex-col items-center my-10 lg:my-26">
          <h4 className=" text-primarys text-[26px]">SEND ME AN EMAIL</h4>
          <p className=" text-[16px]">I'M VERY RESPONSIVE TO MESSAGES</p>
        </div>

      </div>
{/* from div */}
      <div className=''>
 <From/>
      </div>


    </div>
  )
}

export default Contact