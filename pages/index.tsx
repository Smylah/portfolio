import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Portfolio from '../components/portfolio.jsx'
import Footer from '../components/footer'
import Picture from '../public/picture/my-picture.jpeg'
import Nobg from '../public/picture/Nobg.png'
import Frontend from '../public/frontend.svg'
import Responsive from '../public/responsive.svg'
import First from '../public/picture/Rectangle.png'
import Second from '../public/picture/Rectangle1.png'
import Third from '../public/picture/Rectangle3.png'
import { BsTwitter, BsLinkedin, BsGithub, BsBriefcase, BsArrowDownCircle } from "react-icons/bs"

export default function App() {
  const tags = ['LinkedIn', 'Github']
  const workExperience = [
    { company: 'UnbugQA', role: 'Front-End Engineer', yearSpan: '4 months' },
    { company: 'The Springfield', role: 'Front-End Engineer', yearSpan: '1 year +' },
    { company: 'Sidehustle internship', role: 'Front-End Engineer', yearSpan: '3 months' },
    { company: 'Zuri Internship', role: 'Front-End Engineer', yearSpan: '3 months' },
  ]
  const skills = ['HTML', 'CSS', 'Javascript', 'GitHub', 'React', 'Next', 'Vue', 'Nuxt', 'Bootstrap', 'Tailwind', 'Typescript',]
  const whatDo = [
    { id: '01', name: 'Front End Development ', img: 'Frontend' },
    { id: '02', name: 'Software Development ', img: 'Responsive' }
  ]
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='heurio' className='flex justify-center md:h-[100vh] md:items-center bg-gradient-to-tr from-gray-300 to-gray-50 bg-img' >
        <Header />
        <main className='container mx-auto mt-[15vh] md:mt-0 flex flex-col-reverse gap-20 md:gap-0 md:justify-between md:flex-row px-20' >
          <div className='space-y-24'>
            <div className='md:w-[40vw] space-y-12'>
              <h6>Hello I am <span className='text-blue-900 '>Ikenna</span></h6>
              <div className='font-bold text-3xl md:text-5xl  text-blue-900'>Web/Software <div>Developer</div></div>
              <p> I have an exceptional ability to bring ideas to life, with a passion for creating unique and innovative solutions. I am a skilled and dedicated web and software developer who takes pride in their work and i look forward to creating innovative solutions that meet the unique needs of each of my clients.</p>
            </div>
            <div className='flex space-x-10 '>
              {tags.map((tag, index) => {
                return (
                  <a key={index} className="rounded-3xl px-12 py-6 shadow-md bg-primaryMidnight text-white hover:shadow-2xl cursor-pointer transition ease-in-out delay-75">
                    {tag}
                  </a>
                )
              })}
            </div >
          </div >
          <div className='rounded-full border-4 flex border-primaryMidnight bg-gradient-to-bl from-blue-300 via-blue-100 to-blue-50 h-300 w-300 overflow-hidden '>
            <Image src={Nobg} alt='' className=' hover:scale-105 transition ease-in-out duration-500' />
          </div>
        </main >
      </section >

      <section id='about' className='container mx-auto mt-64 space-y-32 px-20'>
        <h1 >About Me</h1>
        <div className='md:flex md:justify-around'>
          <div className='md:w-1/2 p-20 border border-gray-50 shadow-md rounded-md'>
            <p>My name is Ikenna Chima, a versatile developer capable of tackling complex projects. I have honed my skills in web development, software engineering, and user experience design through years of experience.</p><br />
            <p>I understand the importance of effective communication and strive to ensure that my clients are satisfied with the final product. I work collaboratively with clients and stakeholders, taking their input into account throughout the development process and with a keen eye for detail, I am committed to delivering products that not only meet but exceed my clients expectations.</p><br />
            <p>My passion for software development is evident in the high-quality solutions I produce and my impressive track record and commitment to excellence makes me a valuable asset to any organization or individual.</p>
          </div>
          <div className='md:w-1/3 space-y-24'>
            <h5 className='text-center'>My skills and capabilities</h5>
            <div className='flex flex-wrap gap-10'>
              {skills.map((skill, index) => {
                return (
                  <div key={index} className='rounded-3xl shadow-sm border border-gray-50 px-12 py-6'>
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id='services' className='mt-64 mx-auto container px-20'>
        <h1 className='text-left mb-32'>What i do</h1>
        <div className='md:flex space-y-20 md:space-y-0 gap-20 mb-80'>
          <div className='flex items-center gap-10'>
            <div className='p-12 bg-blue-100 rounded-md '>
              <Image src={Frontend} alt='' />
            </div>
            <div>
              <h5 >01</h5>
              <h3>Frontend Development</h3>
            </div>
          </div>
          <div className='flex items-center gap-10'>
            <div className='p-12 bg-blue-100 rounded-md '>
              <Image src={Responsive} alt='' />
            </div>
            <div>
              <h5 >02</h5>
              <h3>Software Development</h3>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-30 space-y-64'>
          <div className='flex flex-col-reverse lg:flex-row rounded-3xl border shadow-md p-20'>
            <div className='space-y-16 md:space-y-32 md:p-28'>
              <h5 className='uppercase'>frontend development</h5>
              <h2>I Implement UX designs into live and user friendly websites</h2>
            </div>
            <Image src={Second} alt='' className='-mt-80 w-full' />
          </div>
          <div className='flex flex-col-reverse lg:flex-row rounded-3xl border shadow-md p-20'>
            <div className='space-y-16 md:space-y-32 md:p-28'>
              <h5 className='uppercase'>software development</h5>
              <h2>I also Build landing pages, responsive websites and web Apps for both individual and commercial purposes, small or large scale</h2>
            </div>
            <Image src={Third} alt='' className='-mt-80 w-full' />
          </div>
        </div>
      </section>

      <section id='work' className='container mx-auto my-64 space-y-32 px-20'>
        <h1>My Work</h1>
        <main className='lg:flex md:items-start space-y-20 lg:space-y-0 gap-30'>
          <div className='lg:w-2/3 space-y-16'>
            <h4>Personal Projects</h4>
            <Portfolio />
          </div>

          <div className='lg:w-1/3 border border-gray-50 rounded-2xl'>
            <h4 className='my-16 flex gap-10 justify-center'><BsBriefcase className='h-24 w-24' />Work Experience</h4>
            <div className=''>
              {workExperience.map((item, index) => {
                return (
                  <div className='flex hover:bg-gray-50 px-20 py-8' key={index}>
                    <div>
                      <div className='mr-10 rounded-full h-50 w-50 border border-dotted border-primaryMidnight' />
                    </div>
                    <div className=''>
                      <h5 className='font-bold'>{item.company}</h5>
                      <p>{item.role}</p>
                    </div>
                    {/* <div>
                      <h4 className='text-right'>{item.yearSpan}</h4>
                    </div> */}
                  </div>
                )
              })}
            </div>
            <a className='flex flex-col justify-center bg-gray-100 rounded-lg mx-20 my-16 py-8  cursor-pointer hover:bg-primaryMidnight hover:text-white transition ease-in-out duration-500'>
              <p className='flex justify-center gap-10 items-center'>Download Resume <BsArrowDownCircle /></p>
            </a>
          </div>
        </main>
      </section>

      <section id='contact' className='px-20'>
        <div className='container mx-auto rounded-3xl md:flex md:justify-between bg-primaryMidnight p-20 md:p-48  items-center space-y-10 md:space-y-0'>
          <div className='space-y-16 text-white md:mr-[20%]'>
            <h2>Have any project in mind?</h2>
            <p >Let us work together to bring your ideas to life and take your business to the next level with a powerful online presence.</p>
          </div>
          <div className='flex flex-col rounded-lg px-16 py-8 bg-white hover:-translate-y-4 transition ease-in-out duration-500'>
            <a className='text-sm font-medium text-center whitespace-nowrap '>
              Lets Talk
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
