import contacto from "../assets/contacto.jpg"

const Contacto = () => {
    return (
        <div className="bg-slate-50 overflow-hidden">
            <div className="relative w-full">
                <img src={contacto} alt="contacto" className=" sm:w-screen sm:h-screen"/>
                <div className="z-10 absolute inset-x-1/2 sm:inset-y-1/2 inset-y-1/4  w-2/5">   
                    <div className="text-center text-white">
                        <h1 className=" md:text-2xl xs:text-sm text-xs font-bold mt-12">Contacta conmigo</h1>
                        <h1 className=" md:text-xl xs:text-xs text-2xs font-bold ">Puedes ponerte en contacto conmigo enviando un mail a darielfriasweb@gmail.com</h1>
                    </div>
                </div>  
            </div>
            <div className=" bg-blue-900 w-full items-center">
                <h1 className="md:p-6 sm:p-4 p-2 text-center text-white text-xs xs:text-base font-bold">Actualmente vivo en Madrid, España.</h1>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4510.114707417918!2d-3.7098246869321168!3d40.41704225674825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e1918e67f%3A0x338473a0d0c9f946!2sSol!5e0!3m2!1ses!2ses!4v1667403284911!5m2!1ses!2ses" className="w-screen h-96" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className=" bg-gray-300 w-full items-center flex flex-row justify-between">
                <div className="flex flex-row items-center justify-center mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h1 className="md:p-6 sm:p-4 p-2 text-center md:text-xl xs:text-xs text-2xs">Madrid, España.</h1>
                </div>    
                <div className="flex flex-row items-center justify-center mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <h1 className="md:p-6 sm:p-4 p-2 text-center md:text-xl xs:text-xs text-2xs">darielfriasweb@gmail.com</h1>
                </div>            
            </div>
        </div>
    )
}

export default Contacto
