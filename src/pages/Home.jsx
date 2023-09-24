import Typed from "typed.js"
import { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import home from "../assets/Home.mp4"
import Flip from "../components/Flip"
import Projects from "../components/Projects"



const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Mi nombre es Dariel Frías", "Soy desarrrollador web3 ", "Trabajo con lenguajes como Javascript, Solidity y Python"], 
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          smartBackspace: true,
          loop: true,
          showCursor: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
    
    

    return (
        <div className="flex flex-col overflow-hidden" >
            <div className="relative w-full">
                <video autoPlay loop muted playsInline className="w-full h-full">
                    <source src={home} type="video/mp4" />
                </video>
                <div className="z-10 absolute inset-x-1/2 sm:inset-y-1/2 inset-y-1/4  w-2/5">
                    <div className="text-center text-white">
                        <h1 className="uppercase md:text-2xl xs:text-sm text-xs font-bold xs:mb-4">Hola</h1>
                        <span ref={el} className="uppercase md:text-xl xs:text-xs text-2xs font-mono"></span> 
                    </div>
                </div>
                
            </div>

            <div className=" bg-blue-200 w-full items-center">
                <h1 className="md:p-6 sm:p-4 p-2 text-center text-3xs xs:text-2xs sm:text-base font-bold font-mono">"Primero resuelve el problema. Entonces, escribe el código" -- John Johnson</h1>
            </div>

            <div className="flex flex-col items-center mt-10">
                <h2 className="font-bold text-xl xs:text-2xl mt-2">WEB3 Blockchain Developer</h2>
                <h3 className="sm:w-1/3 w-4/5 mt-4 mb-4 text-center">Soy un Ingeniero Industrial que desde muy temprano en mis estudios me interesé por el desarrollo de software.</h3>
            </div>

            <Flip/>

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

export default Home
