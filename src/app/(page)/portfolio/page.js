import ModalProject from "@/component/portfolio/ModalProject"


const project = [
  {
    id: 1,
    title: 'Project bergar website ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus.',
    description2:"Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.",
    image: 'mypic/undraw_hello_ccwj.png',
    link: 'https://www.example.com',
    repolink:"http://example.com",
    technologies: "React-js + Next-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and Bootstrap5 markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'SEO optimization',
    whychooseme5:'SEO optimization',
    
  },
  {
    id: 2,
    title: 'Project portfolio website ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus.',
    description2:"Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.",
    image: 'mypic/undraw_hello_ccwj.png',
    link: 'https://www.example.com',
    repolink:"http://example.com",
    technologies: "React-js + Next-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and Bootstrap5 markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'SEO optimization',
    whychooseme5:'SEO optimization',
  },
  {
    id: 3,
    title: 'Project E-commers website ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus.',
    description2:"Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.",
    image: 'mypic/undraw_hello_ccwj.png',
    link: 'https://www.example.com',
    repolink:"http://example.com",
    technologies: "React-js + Next-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and Bootstrap5 markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'SEO optimization',
    whychooseme5:'SEO optimization',
  },
  {
    id: 4,
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus.',
    description2:"Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.",
    image: 'mypic/undraw_hello_ccwj.png',
    link: 'https://www.example.com',
    repolink:"http://example.com",
    technologies: "React-js + Next-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and Bootstrap5 markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'SEO optimization',
    whychooseme5:'SEO optimization',
  },
]


function Portfolio() {
  return (
    <div>
      <h2 className="text-[30px] md:text-[40px] text-primarys font-bold ">Portfolio</h2>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {
        project.map((itme)=>{
           return(
            <div className="card bg-base-100 w-96 shadow-sm" key={itme.id}>
            <figure>
              <img
                src={itme.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {itme.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{itme.description}</p>
              <div className="card-actions justify-end">
                <div >
                  <ModalProject className="badge badge-outline cursor-pointer border-1 border-white"  id={itme.id} title={itme.title} img={itme.image} description={itme.description2} technologies={itme.technologies} repolink={itme.repolink} weblink={itme.link} whychooseme1={itme.whychooseme1} whychooseme2={itme.whychooseme2} whychooseme3={itme.whychooseme3} whychooseme4={itme.whychooseme4} whychooseme5={itme.whychooseme5}/>
                </div>
                <div className="badge badge-outline cursor-pointer py-4">Project Link</div>
              </div>
            </div>
          </div>
           )
        })
      }
     </div>
    </div>
  )
}

export default Portfolio