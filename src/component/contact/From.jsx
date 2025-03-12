"use Client"

function From() {
    return (
        <div className='py-10 bg-background w-full'>
            <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
                
               <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
              
                <input type="text" className="input w-full md:w-1/2 text-[18px] " placeholder="Name" />

                
                <input type="email" className="input w-full md:w-1/2 text-[16px]" placeholder="Email" />

               </div>
               <input type="text" className="input w-full mt-5 text-[24px] font-bold" placeholder="Subject" />
                
                <textarea className="textarea h-34 w-full mt-5 text-[17px]" placeholder="Bio"></textarea>
 

               <button className="btn btn-neutral mt-4 w-[200px] rounded-full bg-primarys text-black text-[18px] font-bold hover:shadow-lgs">Send Message</button>
            </fieldset>
        </div>
    )
}

export default From