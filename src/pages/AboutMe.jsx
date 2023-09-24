import { Link } from "react-router-dom"
import sobremi from "../assets/Sobre_Mi.jpg"
import likes from "../assets/likes.jpg"
import mia from "../assets/mia.jpeg"

const AboutMe = () => {
    return (
        <div className='flex flex-col bg-slate-50 overflow-hidden'>
            <div className="relative w-full">
                <img src={sobremi} alt="sobremi" className=" sm:w-screen sm:h-screen"/>
                <div className="z-10 absolute inset-x-1/2 sm:inset-y-1/2 inset-y-1/4  w-2/5">   
                    <div className="text-center text-white font-mono">
                        <h1 className=" md:text-xl xs:text-xs text-2xs font-bold mt-12 ">"A good programmer is someone who always looks both ways before crossing a one-way street."</h1>
                        <h1 className=" md:text-xl xs:text-xs text-2xs font-bold ">Doug Linder</h1>
                    </div>
                </div>  
            </div>

            <div className="grid grid-rows-2 items-center mt-44">
                <div className='mx-4 md:mx-auto md:w-3/5 bg-white shadow-lg rounded-lg text-center border-2'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row p-4 align-middle'>
                            <img src={mia} alt="foto" className='rounded-full xm:w-16 xm:h-16 w-12 h-12'/>
                            <div className='px-2 text-start'>
                                <h1 className='font-bold xs:text-base text-xs'>Dariel Frías Castillo</h1>
                                <h2 className='xs:text-sm text-xs'>Ingeniero Industrial</h2>
                                <p className='xs:text-xs text-2xs'>Promocionado</p>
                            </div>
                        </div>
                        <div className="xm:w-10 xm:h-10 xs:w-8 xs:h-8 h-6 w-6 mt-2 mr-2 rounded-full hover:cursor-pointer hover:bg-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        </div>
                    </div>
                    <h3 className="p-4 mt-4 mb-4 text-justify text-2xs xs:text-xs xm:text-sm sm:text-base">Mi nombre es <span className='font-bold'>Dariel Frías Castillo</span>. En 2015 ccomencé mi carrera como <span className='font-bold'>Ingeniero Industrial</span> en la Universidad Tecnológica de La Habana. Desde los primeros años mi interés por el desarrollo de software me llevó a realizar estudios complementarios a mi carrera universitaria enfocados a diferentes áreas como el desarrollo de sitios web con <span className='font-bold'>JavaScript: EcmaScript, Angular, React y NodeJS</span>; incursionar en el universo <span className='font-bold'>Blockchain</span> y la creación de Dapps y Smart Contracts con <span className='font-bold'>Solidity</span>; así como, aprender sobre Ciberseguridad y protección de la información.</h3>
                    <div className='flex flex-row align-middle h-8 mx-8 '>
                        <div className='flex flex-row xm:w-12 xm:h-full h-6 w-8'>
                            <img src={likes} alt="likes" className="w-full h-full"/>
                        </div>
                        {/* <div className='flex flex-row align-middle w-full justify-between'>
                            <p className='opacity-80 text-3xs xm:text-xs md:text-base'>1250</p>
                            <div className='flex flex-row align-middle text-center mx-1 text-3xs xm:text-xs md:text-base'>
                                <p className='opacity-80'>550 comentarios<span className='opacity-80 mx-2'>|</span></p> 
                                <p className='opacity-80'>768 veces compartido</p>
                            </div>
                        </div>    */}
                    </div>
                    <hr className='mx-8'/>
                    <div className='mx-auto justify-between flex flex-row text-3xs xs:text-2xs sm:text-xs md:text-base mt-2 mb-2'>
                        <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2 justify-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                            <h1 className='mx-1'>Recomendar</h1>
                        </div>
                        <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2 justify-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <h1 className='mx-1'>Comentar</h1>
                        </div>
                        <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2 justify-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>

                            <h1 className='mx-1'>Compartir</h1>
                        </div>
                        <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2 justify-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                            <h1 className='mx-1'>Enviar</h1>
                        </div>
                    </div>
                </div>

                    <div className='mx-4 md:mx-auto md:w-3/5 bg-white shadow-lg rounded-lg text-center border-2 mt-12'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row p-4 align-middle'>
                                <img src={mia} alt="foto" className='rounded-full xm:w-16 xm:h-16 w-12 h-12'/>
                                <div className='px-2 text-start'>
                                    <h1 className='font-bold xs:text-base text-xs'>Dariel Frías Castillo</h1>
                                    <h2 className='xs:text-sm text-xs'>Ingeniero Industrial</h2>
                                    <p className='xs:text-xs text-2xs'>Promocionado</p>
                                </div>
                            </div>
                            <div className="xm:w-10 xm:h-10 xs:w-8 xs:h-8 h-6 w-6 mt-2 mr-2 rounded-full hover:cursor-pointer hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            </div>
                        </div>
                        <h3 className="p-4 mt-4 mb-4 text-justify text-2xs xs:text-xs xm:text-sm sm:text-base">Mis estudios y conocimientos informáticos me permitieron comenzar mi vida laboral en España en empresas del sector como <a href="https://ioon.es/" target="_blank" className='text-blue-700 hover:underline'>IOON Technologies</a> y <a href="https://www.aon.com/spain/default.jsp" target="_blank" className='text-blue-700 hover:underline'>AON</a>. La colaboración y la comunicación son parte integral de mi trabajo y disfruto resolviendo problemas con mis colegas para ofrecer los mejores resultados. Me gusta estar en constante aprendizaje y realizar tareas que me ayuden a crecer como profesional y me permitan aportar un mayor valor a mi empresa en el futuro. Si consideras que mis estudios, valores y experiencias aportarán valor a tu proyecto, <Link to="/contact" className='text-blue-700 hover:underline'>¡contáctame!</Link>.</h3>
                        <div className='flex flex-row align-middle h-8 mx-8 '>
                            <div className='flex flex-row xm:w-12 xm:h-full h-6 w-8'>
                                <img src={likes} alt="likes" className="w-full h-full"/>
                            </div>
                        </div>
                        <hr className='mx-8'/>
                        <div className='mx-auto justify-between gap-1 flex flex-row text-3xs xs:text-2xs sm:text-xs md:text-base mt-2 mb-2'>
                            <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2 justify-center rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                                <h1 className='mx-1'>Recomendar</h1>
                            </div>
                            <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2  justify-center rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>

                                <h1 className='mx-1'>Comentar</h1>
                            </div>
                            <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2  justify-center rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                </svg>

                                <h1 className='mx-1'>Compartir</h1>
                            </div>
                            <div className='flex flex-row text-center align-middle hover:cursor-pointer hover:bg-slate-200 w-full h-full py-2  justify-center rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-4 xs:h-4 w-2 h-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>

                                <h1 className='mx-1'>Enviar</h1>
                            </div>
                        </div>
                    </div>
                
            </div>

            <div className="flex flex-col items-center justify-center mt-36">
                <h1 className="sm:text-2xl text-lg uppercase text-center mb-24">¿Hablamos?</h1>
                <Link to="/contact" onClick={()=>window.scrollTo({top: 0, behavior: 'auto'})} className="bg-sky-100 text-black font-bold hover:bg-blue-400 hover:text-white border-2 w-fit uppercase rounded-xl text-center xs:text-xl text-xs h-1/3 p-6 mb-36">
                    Contacta conmigo
                </Link>
            </div>
            
        </div>
    )
}

export default AboutMe
