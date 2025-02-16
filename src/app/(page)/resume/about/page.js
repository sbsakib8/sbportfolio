
function Aboutmy() {
  return (
    <div className=" py-3 px-6 lg:p-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title'>About me</h3>
      <p className="rerume_paragraph">
        dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit, sed consectetur urna enim non ex. Sed vel convallis neque, sit amet placerat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo 
      </p>
      </div>
      {/*  */}
      <address className=" mt-8 flex flex-col lg:flex-row gap-3 lg:gap-10">
        <div>
          <p>Name : <span> SB Sakib Sarkar</span></p>
          <p>Experience : <span> 2+ Years </span></p>
          <p>Nationality : <span> Bangladesh</span></p>
          <p> Freelance : <span> Upwork , Fiverr , freelancer </span></p>

        </div>

        <div>
          <p>Phone : <span> +8801799999999</span></p>
          <p>Email : <span> sbsakibsarkar8@gmail.com</span></p>
          <p>Languages : <span> Engnlish , Hindi</span></p>
        
        </div>

      </address>
      
       
        
    </div>
  )
}

export default Aboutmy