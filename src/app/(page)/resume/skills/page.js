import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function Skill() {
  return (
    <div>
      <h4>My Skills</h4>
      <p>lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus,
        lectus sed consectetur porttitor, urna velit bibendum velit, vel
        consectetur neque dolor eu arcu. Sed vel massa quis est faucibus
        consequat. Nulla facilisi. Donec in ipsum non massa bibendum
        facilisis. Donec at libero id velit ultrices bibendum. Sed non
        ligula a ipsum fermentum gravida. Donec at turpis a nisi vestibulum
        aliquet.
      </p>
{/* skils div */}
      <div>
        <h5>Frontend</h5>
        <ul>
          <li><FaHtml5/></li>
          <li><FaCss3Alt/></li>
          <li><IoLogoSass/></li>
          <li><FaBootstrap/></li>
          <li><RiTailwindCssFill/></li>
          <li><IoLogoJavascript/></li>
          <li><FaReact/></li>
          <li><SiNextdotjs/></li>
          s
        </ul>

      </div>
    </div>
  )
}

export default Skill