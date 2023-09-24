import useProject from "../hooks/useProject"

const MyMenu = () => {

  const {menu,setMenu} = useProject()

  const handleMenu = e => {
    e.preventDefault()
    setMenu(!menu)
  }

  return (
    <div className="mr-3">
      <button
        type="button"
        aria-label="menu"
        onClick={handleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
      
  )
}

export default MyMenu