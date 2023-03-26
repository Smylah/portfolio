import Link from "next/link"

const Footer = () => {
  const socials = [
    { name: "linkedIn", link: "#" },
    { name: "GitHub", link: "#" },
    { name: "Twitter", link: "#" },
  ]
  const date = new Date().getFullYear()

  return (
    <footer className="h-[25vh]   flex items-end">
      <main className="container mx-auto flex justify-between border-t pb-30 pt-10 border-primaryMidnight">
        <div>Ikay Designs &copy;{date}</div>
        <div className="flex gap-10">
          {socials.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                {item.name}
              </Link>
            )
          })}
        </div>
      </main>
    </footer>
  )
}

export default Footer
