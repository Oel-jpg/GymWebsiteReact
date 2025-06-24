import HeroContainer from './HeroContainer'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <>
        <section className="bg-[#1E3E62] p-5 md:p-20 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center border-[#162A40] mb-10 md:mb-35 ">
                <h1 className="font-bold text-3xl md:text-9xl text-white shadow-xs">
                    Track Gym
                </h1>
                <p className="font-bold text-gray-200 text-xs md:text-lg">
                    Keep track of your gains and routines <span className="text-white">effortlessly</span>
                </p>
            </div>

            <div className="grid grid-col-1 md:grid-cols-2 gap-5">
                <HeroContainer>
                    <video className="w-full h-auto mt-5" preload="auto" autoPlay loop muted playsInline>
                        <source src='/src/assets/GymLandingPageVideo.mp4' type="video/mp4"/>
                    </video>
                </HeroContainer>
                <HeroContainer>
                    <div className="flex flex-row font-bold text-3xl md:text-7xl">
                        <h1 className="text-gray-100">Get</h1>
                        <h1 className="text-white">Started</h1>
                    </div>
              
                </HeroContainer>


            </div> 

        </section>
    </>
    
  )
}

export default Hero