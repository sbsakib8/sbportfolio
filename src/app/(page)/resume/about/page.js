function Aboutmy() {
  return (
    <div className=" py-3 px-6 lg:px-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title'>About me</h3>
      <p className="resume_paragraph">
        dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit, sed consectetur urna enim non ex. Sed vel convallis neque, sit amet placerat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo 
      </p>
      </div>
      {/*  */}
      <address className=" mt-8 flex flex-col lg:flex-row gap-3 lg:gap-10">
        <div>
          <p className="resume_about_p">Name : <span className='resume_about_span'> SB Sakib Sarkar</span></p> 
          <p className="resume_about_p">Experience : <span className='resume_about_span'> 2+ Years </span></p>
          <p className="resume_about_p">Nationality : <span className='resume_about_span'> Bangladesh</span></p>
          <p className="resume_about_p"> Freelance : <span className='resume_about_span'> Upwork , Fiverr , freelancer </span></p>

        </div>

        <div>
          <p className="resume_about_p">Phone : <span className='resume_about_span'> +8801799999999</span></p>
          <p className="resume_about_p">Email : <span className='resume_about_span'> sbsakibsarkar8@gmail.com</span></p>
          <p className="resume_about_p">Languages : <span className='resume_about_span'> Engnlish , Hindi</span></p>
        
        </div>

      </address>
      
       
        
    </div>
  )
}

export default Aboutmy