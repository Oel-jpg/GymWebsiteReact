const HeroContainer = ({children}) => {
    const Background = "flex flex-col items-center bg-[#162A40] p-5 rounded-xl border-1 md:border-2 border-gray-400 shadow-xl shadow-gray-800"
    return (
    <>
        <div className={`${Background}`}>
            {children}
        </div>
    </>
  )
}

export default HeroContainer