import { Link } from "react-router-dom"
import portfolio from "../assets/Portfolio.jpg"
import Projects from "../components/Projects"

const Portfolio = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative w-full">
                <img src={portfolio} alt="portfolio" className=" sm:w-screen sm:h-screen"/>
                <div className="z-10 absolute inset-x-1/2 sm:inset-y-1/2 inset-y-1/4  w-2/5">   
                    <div className="text-center text-white">
                        <h1 className=" md:text-2xl xs:text-sm text-xs font-bold mt-12 ">Portfolio</h1>
                        <h1 className=" md:text-xl xs:text-xs text-2xs font-bold ">Estos son algunos de los proyectos que he desarrollado</h1>
                    </div>
                </div>  
            </div>
            <Projects/>
            <div className="flex flex-col items-center justify-center mt-36">
                <h1 className="sm:text-2xl text-lg uppercase text-center mb-24">¿Hablamos?</h1>
                <Link to="/contact" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className="bg-sky-100 text-black font-bold hover:bg-blue-400 hover:text-white border-2 w-fit uppercase rounded-xl text-center xs:text-xl text-xs h-1/3 p-6 mb-36">
                    Contacta conmigo
                </Link>
            </div>
        </div>
    )
}

export default Portfolio
