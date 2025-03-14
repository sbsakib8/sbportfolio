"use client"

import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2'


function From() {

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e01933a5-35bc-4540-840a-805ffd8cb3ce");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      formik.resetForm({
        values: { name: '', email: '' , message: '' , Subject: ''  },
       
      });
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Message sent Successfully!",
          icon: "success"
        });
    }
}


    const formik = useFormik({
        initialValues: {
          name: '',
          email:'',
          message:'',
          Subject:'',
        },
        validationSchema: yup.object({
          name: yup.string()
             .min(2, 'Name must be at least 2 characters')
             .max(50, 'Name must not exceed 50 characters')
             .required('Name is required'),
          email: yup.string()
             .email('Invalid email address')
             .required('Email is required'),
          message: yup.string()
             .min(10, 'Message must be at least 10 characters')
             .max(1000, 'Message must not exceed 1000 characters')
             .required('Message is required'),
          Subject: yup.string()
             .min(2, 'Subject must be at least 2 characters')
             .max(100, 'Subject must not exceed 100 characters')
             .required('Subject is required'),
        }),
        
      });
    
    return (
        <div className='py-10 lg:pt-0 lg:-mt-5 bg-background w-full flex flex-col justify-center items-center '>
           <form   className='w-full lg:ml-26' onSubmit={handleSubmit}>
           <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
                
                <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
               
                 <input  onChange={formik.handleChange} id="name"
         name="name" value={formik.values.name} type="text" className="input w-full md:w-1/2 text-[18px] " placeholder="Name" />
        
                 
                 <input onChange={formik.handleChange} id="email"
         name="email" value={formik.values.email} type="email" className="input w-full md:w-1/2 text-[16px]" placeholder="Email" />
            
                </div>
                <br />
                <div className=' flex justify-between gap-7'>
                {
                  formik.touched.name && formik.errors.name? (
                    <p className="text-red-500 ">{formik.errors.name}</p>
                  ) : null
                }
               
                {
                  formik.touched.email && formik.errors.email? (
                    <p className="text-red-500">{formik.errors.email}</p>
                  ) : null
                }
                </div>

                <input onChange={formik.handleChange} id="Subject"
         name="Subject" value={formik.values.Subject} type="text" className="input w-full  text-[24px] font-bold" placeholder="Subject" />
                 <br/>
                 {
                  formik.touched.Subject && formik.errors.Subject? (
                    <p className="text-red-500">{formik.errors.Subject}</p>
                  ) : null
                }
                 <textarea onChange={formik.handleChange} id="message"
         name="message" value={formik.values.message} className="textarea h-34 w-full  text-[17px]" placeholder="Bio"></textarea>
  
                   <br/>
                   {
                  formik.touched.message && formik.errors.message? (
                    <p className="text-red-500 ">{formik.errors.message}</p>
                  ) : null
                }
                <button type="submit" className="btn btn-neutral mt-4 w-[200px] rounded-full bg-primarys text-black text-[18px] font-bold hover:shadow-lgs">Send Message</button>
             </fieldset>
           </form>
        </div>
    )
}

export default From