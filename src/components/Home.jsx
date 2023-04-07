import { topics } from "../constants"
import TitleCards from "./TitleCards"
import Contact from "./Contact"

const Home = () => {
  return (
      <div className="relative w-full mx-auto justify-center text-center bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-4 pb-0 sm:p-10 sm:pb-4 pt-16 sm:pt-24 uppercase bg-galaxy-pattern bg-cover bg-no-repeat bg-center bg-fixed font-bold bg-clip-text text-transparent">Check out what's new</div>
        <TitleCards props={topics}/>
        <Contact />
      </div>
  )
}

export default Home