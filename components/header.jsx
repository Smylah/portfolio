import Link from "next/link"

const Header = () => {
  const links = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ]
  return (
    <>
      <nav className="z-49 bg-primaryMidnight fixed top-20 shadow-md rounded-3xl ">
        <div className="flex gap-20 px-24 py-8 sticky ">
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
