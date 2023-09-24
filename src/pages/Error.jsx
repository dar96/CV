import React from 'react'
import error from "../assets/Error.jpg"

const Error = () => {
  return (
    <div>
        <div className="relative w-full">
                <img src={error} alt="Error 404" className=" w-screen h-screen"/>
                <div className="z-10 absolute inset-x-1/2 sm:inset-y-1/2 inset-y-1/4  w-2/5">   
                    <div className="text-center text-white font-mono">
                        <h1 className=" md:text-2xl xs:text-xl text-2xs font-bold mt-12 ">Error 404</h1>
                        <h1 className=" md:text-2xl xs:text-xl text-2xs font-bold ">Page not found</h1>
                    </div>
                </div>  
            </div>
    </div>
  )
}

export default Error