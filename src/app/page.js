import Contact from './(page)/contact/page';
import Home from './(page)/home/page';
import Services from './(page)/services/page';

export default function page() {
  return (
    <div className='w-full flex  flex-col gap-9 lg:gap-20'>
     <Home/>
     <Services/>
   <div className="lg:max-w-[1100px] md:max-w-[700px]">
   <Contact/>
   </div>
    </div>
  );
}
