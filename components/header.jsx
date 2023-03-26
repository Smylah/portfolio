import Link from "next/link"
import Image from "next/image"
import Picture from "../public/picture/mypic.png"

const Header = () => {
  const links = [
    { name: "About", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Work", link: "#" },
    { name: "Contact", link: "#" },
  ]
  return (
    <>
      <nav className="z-50 bg-primaryMidnight fixed top-20 shadow-md rounded-3xl ">
        <div className="flex gap-20 px-24 py-8 sticky ">
          <Image src={Picture} className="rounded-full h-20 w-20" />
          {links.map((link, index) => {
            return (
              <>
                <Link
                  key={index}
                  href={`${link.link}`}
                  className="font-medium text-white text-sm  hover:text-blue-300 transition-all ease-in-out duration-50"
                >
                  {link.name}
                </Link>
              </>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Header
