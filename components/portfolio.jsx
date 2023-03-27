import Image from "next/image"
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import {
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiBootstrap,
  SiCss3,
  SiVuedotjs,
} from "react-icons/si"

const Portfolio = () => {
  const PortfolioData = [
    {
      technologies: ["HTML", "Tailwind"],
      title: "Interior Decoration Site",
      image: "/../public/picture/interior-decor.png",
      url: "https://interior-decor-site.netlify.app/",
      description:
        "Developed a stylish and user-friendly website for an interior decoration company, showcasing their portfolio of stunning designs and services. Built with modern web technologies and responsive design, the site offers seamless navigation across all devices.",
    },
    {
      technologies: ["React", "Bootstrap"],
      title: "Bookstore App for The SpringField Schools. ",
      image: "/../public/picture/digital-bookstore.jpeg",
      url: "https://smylah.github.io/bookstore-app/",
      description:
        "Developed a feature-rich and intuitive mobile app for a bookstore, enabling customers to browse, search and purchase books with ease. Designed with a clean and modern UI, the app offers a seamless shopping experience.",
    },
    {
      technologies: ["React", "Sass"],
      title: "Web design Project for a client",
      image: "/../public/picture/ddhub.jpeg",
      url: "https://smylah.github.io/ddhub/",
      description:
        "Developed a comprehensive service hire app that connects users with a wide range of professional services for a client. ",
    },
    {
      technologies: ["Vue", "Tailwind", "Typescript"],
      title: "Untitled app",
      image: "/../public/picture/ddhub.jpeg",
      url: "https://smylah.github.io/ddhub/",
      description:
        "used this to showcase my skills in vue typescript and tailwind to a potential employer",
    },
    {
      technologies: ["Vue", "css"],
      title: "Vue Task Tracker",
      image: "/../public/picture/ddhub.jpeg",
      url: "https://smylah.github.io/ddhub/",
      description: "my first Project learning vue",
    },
  ]

  const [showMore, setShowMore] = useState(false)
  const split = PortfolioData.map((data) => {
    console.log()
  })

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <section className="space-y-10">
      {PortfolioData.map((data, index) => {
        const { url, title, image, description, technologies } = data
        return (
          <div
            key={index}
            className="md:flex border shadow-sm p-20 rounded-2xl space-y-10 md:space-y-0 md:gap-20 items-start"
          >
            <Image
              alt={`image ${index}`}
              src={image}
              width={350}
              height={100}
              className="rounded-2xl shadow-md"
            />
            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="px-10 py-6 rounded-3xl bg-primaryMidnight text-white text-xs"
                    >
                      {tech}
                    </div>
                  )
                })}
              </div>
              <h3 className="font-medium text-base text-blue-900">{title}</h3>
              <div className="description">
                <p>{showMore === false ? description : null}</p>
                <button onClick={handleShowMore}>
                  {showMore ? "show more..." : "show less"}
                </button>
              </div>
              <a
                href={url}
                className="inline-flex items-center border border-black rounded-lg px-16 py-4 hover:bg-primaryMidnight hover:text-white transition ease-out duration-200"
              >
                Visit Site <BsArrowRight />
              </a>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Portfolio
