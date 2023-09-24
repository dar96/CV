import { useState, createContext } from "react";

const ProjectContext = createContext()

const ProjectProvider = ({children}) => {

  const [scroll, setScroll] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <ProjectContext.Provider
        value={{
            scroll,
            setScroll,
            menu,
            setMenu
        }}
    >
        {children}
    </ProjectContext.Provider>
)
}

export {
ProjectProvider
}

export default ProjectContext