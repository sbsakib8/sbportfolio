'use client'
function ModalService({id, title, description,can1, can2, can3, can4, can5, can6, myservice1, myservice2, myservice3, myservice4, myservice5, myservice6, myservice7, price}) {
  return (
  <>
<dialog id={`modal${id}`} className="modal bg-background">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-200 ">✕</button>
    </form>

    <h3 className="font-bold  text-[25px] md:text[35px] text-primarys">{title}</h3>
    <p className="py-4 text-[17px] leading-[30px] text-white">{description}</p>
    <h3 className="text-[29px] font-bold text-primarys my-3">**What I can do ---**</h3>
    <p className="text-[17px] my-1 text-gray-300">- {can1}</p>
    <p className="text-[17px] my-1 text-gray-300">- {can2}</p>
    <p className="text-[17px] my-1 text-gray-300">- {can3}</p>
    <p className="text-[17px] my-1 text-gray-300">- {can4}</p>
    <p className="text-[17px] my-1 text-gray-300">- {can5}</p>
    <p className="text-[17px] my-1 text-gray-300">- {can6}</p>

    <h2 className="text-[29px] font-bold text-primarys my-3">**My services include-**</h2>

    <p className="text-[17px] my-1 text-gray-300">- {myservice1}</p>
    <p className="text-[17px] my-1 text-gray-300">- {myservice2}</p>
    <p className="text-[17px] my-1 text-gray-300">- {myservice3}</p>
    <p className="text-[17px] my-1 text-gray-300">- {myservice4}</p>
    <p className="text-[17px] my-1 text-gray-300">- {myservice5}</p>
    <p className="text-[17px] my-1 text-gray-300">- {myservice6}</p>
    <p className="text-[17px] my-1 text-gray-300">-  {myservice7}</p>
  <p className="text-[17px] my-4  text-gray-300"> Price : {price}</p>
  <hr />
  <p className="text-[20px] mt-2 text-white">Feel free to contact me, If you are interested in me. I'll reply instantly if I'm available.....

I am always ready to work with you. please contact me before placing an order.

Thanks!</p>
  </div>
</dialog>
<button className="btn bg-primarys rounded-full hover:text-black text-[18px] outline-0  shadow-lgs" onClick={()=>document.getElementById("modal"+id).showModal()}>See more</button>
</>
  )
}

export default ModalService