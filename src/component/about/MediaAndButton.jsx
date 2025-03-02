import  Link  from 'next/link';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function MediaAndButton() {
  return (
    <div>
        <ul className=' media_component'>
                <li><Link className=' ' href='https://www.facebook.com/sbsakibsarkar/' target="_blank" ><BiLogoFacebookCircle className='media_icon'/></Link></li>
    
                <li><Link href='https://www.linkedin.com/in/sb-sakib-sarkar-5823202b9/' target="_blank" ><TiSocialLinkedinCircular className='media_icon'/></Link></li>
    
                <li><Link href='https://www.instagram.com/sbsakibsarkar/' target="_blank" ><FaInstagramSquare className='media_icon'/></Link></li>
    
                <li><Link href='https://github.com/sbsakib8' target="_blank" ><FaGithub className='media_icon'/></Link></li> 
                
          </ul>  

         <div className=' flex flex-col md:flex-row items-center justify-center gap-4 md:justify-start' >
        <button type="button" className='home_button'><Link href='/resume' >Resume</Link></button>

        <button type="button" className='home_button'><Link href='/contact' >Contact</Link></button>
        </div>     
              
    </div>
  )
}

export default MediaAndButton