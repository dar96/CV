import { Outlet,NavLink } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useProject from "../hooks/useProject"


const Layout = () => {

    const {scroll,setScroll,setMenu} = useProject()

    window.onscroll = () => {
        if(window.scrollY <= 10){
            setScroll(false)
            setMenu(false)
        }else{
            setScroll(true)
        }
    }
    

    return (
        <>      
            <header>
                <Header/>
            </header>

            <div>
                <Outlet/>
            </div>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout
