import Button from "./Button"

function Routers({children}) {
  
  return (
    <div className=' w-full flex flex-col  lg:flex-row gap-11'>
      <div className="w-full lg:w-[50%]" >
        <h1 className=" text-center">Why Hire me? </h1>
        <p  className=" text-center text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem incidunt facere dolor dicta illo doloribus, commodi fugit rerum quas error!</p>
      <Button/>
      </div>
      
    <div className='flex flex-col  items-center bg-red-400 w-full lg:w-[50%] gap-2 h-[600px] overflow-y-scroll'>
      {children}
    </div>
    </div>
  )
}

export default Routers