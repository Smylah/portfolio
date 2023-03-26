import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Portfolio from '../components/portfolio/index.jsx'
import Footer from '../components/footer'
import Picture from '../public/picture/my-picture.jpeg'
import Frontend from '../public/frontend.svg'
import Responsive from '../public/responsive.svg'
import First from '../public/picture/Rectangle.png'
import Second from '../public/picture/Rectangle1.png'
import Third from '../public/picture/Rectangle3.png'

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
        <main className='container mx-auto  md:flex md:justify-between px-20' >
          <div className='space-y-24'>
            <div className='md:w-[40vw] space-y-12'>
              <p className='text-xl font-medium '>Hello I am <span className='text-blue-900 '>Ikenna</span></p>
              <div className='font-bold text-3xl md:text-5xl  text-blue-900'>Web/Software <p>Developer</p></div>
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
          <div className='hidden md:inline-block h-400 w-400'>
            <Image src={Picture} alt='' className='rounded-full border-4 border-primaryMidnight' />
          </div>
        </main >
      </section >

      <section id='about' className='container mx-auto mt-64 space-y-32'>
        <h1 className='font-bold text-3xl md:text-5xl text-center'>About Me</h1>
        <div className='md:flex md:justify-around'>
          <div className='md:w-1/2 p-20 border border-gray-50 shadow-md rounded-md'>
            <p>My name is Ikenna Chima, a versatile developer capable of tackling complex projects. I have honed my skills in web development, software engineering, and user experience design through years of experience.</p><br />
            <p>I understand the importance of effective communication and strive to ensure that my clients are satisfied with the final product. I work collaboratively with clients and stakeholders, taking their input into account throughout the development process and with a keen eye for detail, I am committed to delivering products that not only meet but exceed my clients expectations.</p><br />
            <p>My passion for software development is evident in the high-quality solutions I produce and my impressive track record and commitment to excellence makes me a valuable asset to any organization or individual.</p>
          </div>
          <div className='md:w-1/3 space-y-24'>
            <h1 className='text-center'>My skills and capabilities</h1>
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

      <section className='mt-64 mx-auto container'>
        <h1 className='font-bold text-3xl md:text-5xl text-center mb-32'>What i do</h1>
        <div className='flex gap-20 mb-80'>
          <div className='flex items-center gap-10'>
            <div className='p-12 bg-blue-100 rounded-md '>
              <Image src={Frontend} alt='' />
            </div>
            <div>
              <h3 className='font-normal'>01</h3>
              <h5 className='text-lg font-semibold'>Frontend Development</h5>
            </div>
          </div>
          <div className='flex items-center gap-10'>
            <div className='p-12 bg-blue-100 rounded-md '>
              <Image src={Responsive} alt='' />
            </div>
            <div>
              <h3 className='font-normal'>02</h3>
              <h5 className='text-lg font-semibold'>Software Development</h5>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-30 space-y-64'>
          <div className='flex rounded-3xl border shadow-md p-20'>
            <div className='space-y-32 p-28'>
              <h5 className='font-medium text-sm uppercase text-primaryMidnight'>frontend development</h5>
              <p className='font-semibold text-3xl'>Implementing UX designs into live and user friendly websites</p>
            </div>
            <div className='-mt-80'>
              <Image src={Second} alt='' />
            </div>
          </div>
          <div className='flex rounded-3xl border shadow-md p-20'>
            <div className='space-y-32 p-28'>
              <h5 className='font-medium text-sm uppercase text-primaryMidnight'>software development</h5>
              <p className='font-semibold text-3xl'>Building landing pages, responsive websites and web App</p>
            </div>
            <div className='-mt-80'>
              <Image src={Third} alt='' />
            </div>
          </div>
        </div>

      </section>

      <section className='container mx-auto my-64 space-y-32'>
        <h1 className='font-bold text-3xl md:text-5xl text-center '>My Work</h1>
        <main className='md:flex'>
          <div className='md:w-2/3'>
            <h4 className='font-medium text-xl text-blue-900'>Personal Projects</h4>
            <Portfolio />
          </div>

          <div className='md:w-1/3 border border-gray-50 shadow-md rounded-2xl'>
            <h4 className='font-medium my-16 text-xl text-center text-blue-900'>Work Experience</h4>
            <div className=''>
              {workExperience.map((item, index) => {
                return (
                  <div className='flex hover:bg-gray-50 px-20 py-8' key={index}>
                    <div>
                      <div className='mr-10 rounded-full h-50 w-50 border border-dotted border-primaryMidnight' />
                    </div>
                    <div className=''>
                      <h5 className='font-bold text-primaryMidnight'>{item.company}</h5>
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
              <p className='font-medium text-center'>Download Resume</p>
            </a>
          </div>
        </main>
      </section>

      <section className='container mx-auto rounded-3xl flex justify-between bg-primaryMidnight p-48 items-center'>
        <div className='space-y-24 text-white'>
          <p className='text-3xl font-medium'>Have any project in mind?</p>
          <p >Let’s work together and I will help you by all my best.</p>
        </div>
        <button className='rounded-3xl px-16 py-8  text-sm font-medium bg-white hover:-translate-y-4 transition ease-in-out duration-500'>
          Lets Talk
        </button>
      </section>

      <Footer />
    </>
  )
}
