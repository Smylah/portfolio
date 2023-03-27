import Link from "next/link"
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"

const Footer = () => {
  const socials = [
    { name: "linkedIn", link: "#" },
    { name: "GitHub", link: "#" },
    { name: "Twitter", link: "#" },
  ]
  const date = new Date().getFullYear()

  return (
    <footer className="h-[15vh] bg-gradient-to-br flex items-end">
      <main className="container mx-auto flex justify-between border-t pb-30 pt-10 border-primaryMidnight px-20">
        <div>Ikay Designs &copy;{date}</div>
        <div className="flex gap-10">
          <a href="#">
            <BsGithub />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsLinkedin />
          </a>
        </div>
      </main>
    </footer>
  )
}

export default Footer
