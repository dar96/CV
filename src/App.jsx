import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contacto from "./pages/Contacto"
import Layout from "./layouts/Layout"
import Error from "./pages/Error"
import { ProjectProvider } from "./context/ProjectProvider"


function App() {
  
  return (
      <BrowserRouter>
      <ProjectProvider>
        <Routes>
            <Route path="/"  element = {<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="dariel-frias" element={<AboutMe/>} />
              <Route path="portfolio" element={<Portfolio/>} />
              <Route path="contact" element={<Contacto/>} />
              <Route path="*" element={<Error/>} />
            </Route>
        </Routes>
      </ProjectProvider>
      </BrowserRouter>
  )
}

export default App
