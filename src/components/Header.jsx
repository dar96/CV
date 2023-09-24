import {Link, NavLink} from "react-router-dom"
import MyMenu from "./MyMenu"
import useProject from "../hooks/useProject"
import { useEffect } from "react"

const Header = () => {

    const {scroll,setScroll,menu} = useProject()

    const mediaquery = window.matchMedia("(min-width: 850px)")

    useEffect(()=>{
        menu && setScroll(true)
    },[menu])
    
    return (
        
        <div className="fixed w-full z-20 overflow-hidden font-serif">
            <div className={scroll? "flex flex-row justify-between gap-8 sm:p-3 p-1 items-center bg-white border-b-2 transition ease-out duration-1000 transform": "flex flex-row text-white justify-between gap-8 sm:p-3 p-1 items-center transition ease-out duration-1000 transform"}>
                <div className ="flex w-2/5 items-center justify-center">
                    <Link to = "/" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className ="flex flex-row justify-center gap-2 items-center w-fit">
                        <h2 className ="md:text-2xl sm:text-xl text-xs font-bold">Dariel Frías</h2> 
                    </Link>
                </div>

                {mediaquery.matches?
                    <nav className="w-3/5">
                        <ul className = "flex flex-row justify-center gap-16 ">
                            <li>
                                <NavLink to="/" end onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500 " : scroll? "text-black hover:text-orange-500  transition ease-out duration-1000 transform" : "text-white hover:text-orange-500  transition ease-out duration-1000 transform"}>Inicio</NavLink>   
                            </li>
                            <li>
                                <NavLink to="/dariel-frias" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500 " : scroll? "text-black hover:text-orange-500  transition ease-out duration-1000 transform" : "text-white hover:text-orange-500 transition ease-out duration-1000 transform"}>Sobre Mi</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500" : scroll? "text-black hover:text-orange-500  transition ease-out duration-1000 transform" : "text-white hover:text-orange-500  transition ease-out duration-1000 transform"}>Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500 " : scroll? "text-black hover:text-orange-500  transition ease-out duration-1000 transform" : "text-white hover:text-orange-500  transition ease-out duration-1000 transform"}>Contacto</NavLink>
                            </li>
                        </ul>
                    </nav>
                    :
                    <MyMenu/>
                }
                
            </div>
            {menu && 
                    <div className="w-full z-20">
                        <nav className="w-full">
                            <ul className = "flex flex-col w-full">
                                <li className="w-full bg-white border-b-2 xs:text-base text-2xs">
                                    <NavLink to="/" end onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500  bg-white bg w-full " : "text-black w-full bg-white hover:text-orange-500 "}>Inicio</NavLink>    
                                </li>
                                <li className="w-full bg-white border-b-2 xs:text-base text-2xs">
                                    <NavLink to="/dariel-frias" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500  bg-white w-full " : "text-black w-full bg-white hover:text-orange-500 "}>Sobre Mi</NavLink>
                                </li>
                                <li className="w-full bg-white border-b-2 xs:text-base text-2xs">
                                    <NavLink to="/portfolio" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500  bg-white w-full " : "text-black w-full bg-white hover:text-orange-500 "}>Portfolio</NavLink>
                                </li>
                                <li className="w-full bg-white border-b-2 xs:text-base text-2xs">
                                    <NavLink to="/contact" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className={({isActive}) => isActive? " text-orange-500  bg-white w-full " : "text-black w-full bg-white hover:text-orange-500 "}>Contacto</NavLink>
                                </li>
                            </ul>
                    </nav>
                    </div>
                }
        </div>
        
    )
}

export default Header
