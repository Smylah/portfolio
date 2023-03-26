import { Swiper, SwiperSlide } from "swiper/react"
import { PortfolioData } from "./data"

const Portfolio = () => {
  return (
    <Swiper>
      {PortfolioData.map((data, index) => {
        const { id, category, url, title, description } = data
        return (
          <SwiperSlide key={index}>
            {id}
            {category}
            {url}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Portfolio
