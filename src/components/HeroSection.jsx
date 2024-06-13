import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center  lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Resource Generation Office  
            <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">{' '}
             BSU Alangilan
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Unlock BatStateU's Potential: Where Innovation Meets Sustainability, Empowering Tomorrow's Leaders Today
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='py-2 px-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 '>Order Now</a>

        </div>
        <div className="flex space-x-3 items-center justify-center mt-10">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-red-500 shadow-red-400" ><source src={video1} type="video/mp4"></source>
            Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-red-500 shadow-red-400" ><source src={video2} type="video/mp4"></source>
            Your browser does not support the video tag.
            </video>           
        </div>
    </div>
  )
}

export default HeroSection
