import Routers from "@/component/Resume/Routers"


function Layout({children}) {
  return (
    <div className=" w-full h-full flex justify-center items-center">
    <Routers>
      {children}
     </Routers>
    </div>
  )
}

export default Layout