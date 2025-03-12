

const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Company Name",
    date: "2020 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Company Name",
    date: "2020 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Company Name",
    date: "2020 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Company Name",
    date: "2020 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "Company Name",
    date: "2020 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id: 6,
    title: "Software Developer",
    company: "Company Name",
    date: "2020 - 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
]
function Experience() {
  return (
    <div className=" py-3 px-6 lg:px-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title '> My Experience</h3>
      <p className="resume_paragraph">
        dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit.
      </p>
      </div>
      {/*  */}
      <div className=' flex gap-3 flex-wrap mt-6 '>
        {
          experience.map((exp) => (
            <div key={exp.id} className="py-3 max-w-[300px] md:max-w-[220px] bg-gray-700 px-3 shadow-lgs cursor-pointer hover:skew-6 transition-all duration-200 ">
              <h4 className="text-lg text-[22px] font-semibold text-primarys">{exp.title}</h4>
              <p className="text-sm font-light">{exp.company}</p>
              <p className="text-sm text-[11px]  font-light">{exp.date}</p>
              <p className="text-sm text-gray-200 font-light">{exp.description}</p>
            </div>
          ))
        }

      </div>
      
       
        
    </div>
  )
}

export default Experience