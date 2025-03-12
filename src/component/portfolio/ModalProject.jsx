'use client'
import Link from "next/link"

function ModalProject({id ,title ,img,description,technologies,repolink,weblink,whychooseme1,whychooseme2,whychooseme3,whychooseme4,whychooseme5}) {
  return (
    <>
<dialog id={`modal${id}`} className="modal ">
  <div className="modal-box max-w-[350px] lg:w-9/12 md:max-w-5xl ">
   <div className=" flex md:w-full space-x-5 flex-col lg:flex-row py-5">
    <div className=' w-[400px]'>
      <img className=" w-[350px] lg:w-full h-[300px] object-cover" src={img} alt={title}/>
       </div>
    <div className="max-w-[350px] md:w-full">
     <h3 className="font-bold  text-[25px] md:text[35px] text-primarys">{title}</h3>
    <p className="py-4 text-[17px] leading-[30px] text-white">{description} </p>
     {/* technologies */}
    <h3 className="font-bold  text-[25px] md:text[35px] text-white">{technologies}</h3>
    <h3 className="font-bold  text-[25px] md:text[35px] text-primarys">why choose me ? </h3>
    <p>===============================</p>
    <p className="text-[17px] my-1 text-gray-300">✓ {whychooseme1}</p>
    <p className="text-[17px] my-1 text-gray-300">✓ {whychooseme2}</p>
    <p className="text-[17px] my-1 text-gray-300">✓ {whychooseme3}</p>
    <p className="text-[17px] my-1 text-gray-300">✓ {whychooseme4}</p>
    <p className="text-[17px] my-1 text-gray-300">✓ {whychooseme5}</p>
    <p className="text-[17px] my-1 text-gray-300">and much more as your extra requirements you can tell me. I will do ......</p>
    <p>===============================</p>
    {/* weblink */}
   <div className="flex flex-col">
   <Link className="text-[17px] my-1 text-green-300" href={weblink}>Check out the project here:{weblink}</Link>

{/* relink */}
<Link className="text-[17px] my-1  text-green-300" href={repolink}>Check out the repolink here:{repolink}</Link>

   </div>
      </div>
      
   </div>
   <hr/>
   <p>are you looking for someone to make a responsive  website or landing page design? if yes? I am the one you are looking for. I can help you create a beautiful, user-friendly website to impress your visitors...</p>
    <div className="modal-action">
      <form method="dialog">
       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


<button className="btn" onClick={()=>document.getElementById("modal"+id).showModal()}>
Detail</button>
    </>
  )
}

export default ModalProject