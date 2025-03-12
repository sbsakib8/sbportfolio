import Button from "./Button"

function Routers({children}) {
  
  return (
    <div className=' w-full flex flex-col  lg:flex-row gap-11'>
      <div className="w-full shadow-lgs py-4 lg:w-[50%] flex flex-col  items-center" >
        <h1 className="resume_title">Why Hire me? </h1>
        <p  className="resume_paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem incidunt facere dolor dicta illo doloribus, commodi fugit rerum quas error!</p>
      <Button/>
      </div>
      <div className=" lg:w-[1px] lg:h-screen lg:bg-primarys"></div>
      
    <div className='flex flex-col  items-center shadow-lgs md:mr-9  w-full lg:w-[50%] gap-2 h-[480px] overflow-y-scroll'>
      {children}
    </div>
    </div>
  )
}

export default Routers