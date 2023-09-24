import React from 'react'
import { NavLink } from 'react-router-dom'
import linkedin from "../assets/linkedin-icon-2.svg"
import github from "../assets/github-icon-1.svg"

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <div className='overflow-hidden font-serif'>
      <div className='flex flex-row bg-gray-200 justify-between md:py-7 sm:text-base text-sm p-2'>
        <nav className="w-1/2 p-2">
            <ul className = "flex md:flex-row md:justify-center md:gap-16 flex-col gap-1 ">
                <li>
                    <NavLink to="/" end onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500 " : scroll? "text-black hover:text-orange-500  " : "text-white hover:text-orange-500  "}>Inicio</NavLink>    
                </li>
                <li>
                    <NavLink to="/dariel-frias" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500 " : scroll? "text-black hover:text-orange-500  " : "text-white hover:text-orange-500 "}>Sobre Mi</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500" : scroll? "text-black hover:text-orange-500  " : "text-white hover:text-orange-500  "}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500 " : scroll? "text-black hover:text-orange-500  " : "text-white hover:text-orange-500  "}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
        <div className='flex flex-row justify-between items-center'>
          <a href = "https://www.linkedin.com/in/dariel-frias-castillo-035a951a4" target="_blank" className='items-center justify-center p-4'> 
            <img src={linkedin} alt="linkedin" className='sm:w-10 sm:h-10 w-6 h-6 hover:animate-pulse'/>
          </a>
          <a href = "https://github.com/dar96" target="_blank" className='items-center justify-center p-4'> 
            <img src={github} alt="github" className='sm:w-10 sm:h-10 w-6 h-6 hover:animate-pulse'/>
          </a>
        </div>
      </div>
      <div className=" bg-zinc-900 w-full items-center">
        <h1 className="md:p-7 xs:p-4 p-2 md:text-base xs:text-xs text-2xs text-gray-300 text-center">&copy; {copyright} Dariel Frías Web. Developing amazing Dapps Madrid, Spain.</h1>
      </div>
    </div>
  )
}

export default Footer
