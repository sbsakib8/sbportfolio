'use client'
import { Typewriter } from 'react-simple-typewriter'
function HomeTyping() {
  return (
    <>
    <span className='home_title px-2'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Wev Devoloper', 'Front End Developer', 'Backend Developer', 'Full Stack Developer!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        
    </>
  )
}

export default HomeTyping