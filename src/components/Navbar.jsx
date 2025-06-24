import placeholder from '../assets/placeholder.png'


const Navbar = () => { 
  return (
    <>
      <nav className="navbar-gradient flex items-center justify-center md:justify-between px-2 py-4 md:px-8 md:py-6 gap-4 md:gap-0">
        <div className="flex items-center space-x-4">
            <img src={placeholder} alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-white">TrackGym</h1>
        </div>
        <div className="flex space-x-2 md:space-x-4">
            <h2 className="text-white">Home</h2>
            <h2 className="text-white">Routine</h2>
            <h2 className="text-white">Workout</h2>
        </div>
      </nav>
    </>
  )
}

export default Navbar