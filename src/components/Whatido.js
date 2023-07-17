import React from 'react';
import { Js2, PythonLogo1, ReactLogo2, FlaskF, reactF, SqlF } from "../assets/index";

const Whatido =() =>{
  return (
    <div className="w-full h-auto bg-[#949494] overflow-x-hidden">
        <h1 className="text-4xl font-semibold text-center my-10 text-black">Favourite Tools</h1>
        <div className="w-screen top-10 my-10 border-10 gap-5 grid grid-cols-3 ">
            <div className='w-[10vw] h-[10vw  ] mx-20 my-20 grid grid-cols-1 relative'>
                <img 
                src={Js2}
                alt='JsImage'
                />
                <h2 className="text-2xl font-semibold text-black">Javascript</h2>
                {/* <p>Explain what i use Javascript for in this section</p> */}
            </div>
            <div className='w-[10vw] h-[10vw  ] mx-20 my-20 grid grid-cols-1 relative'>
                <img 
                src={PythonLogo1}
                alt='PythonImage'
                />
                <h2 className="text-2xl font-semibold text-black">Python Language</h2>
                {/* <p>Explain what i use Python for in this section</p> */}
            </div>
            <div className='w-[10vw] h-[10vw  ] mx-20 my-20 grid grid-cols-1 relative'>
                <img 
                src={reactF}
                alt='ReactImage'
                />
                <h2 className="text-2xl font-semibold">React Framework</h2>
                {/* <p>Explain what i use React for in this section</p> */}
            </div>
            <div className='w-[10vw] h-[10vw  ] mx-20 my-20 grid grid-cols-1 relative'>
                <img 
                src={FlaskF}
                alt='FlaskImage'
                />
                <h2 className="text-2xl font-semibold">Flask Framework</h2>
                {/* <p>Explain what i use Flask Frame Work for in this section</p> */}
            </div>
            <div className='w-[10vw] h-[10vw  ] mx-20 my-20 grid grid-cols-1 relative'>
                <img 
                src={PythonLogo1}
                alt='FlaskImage'
                />
                <h2 className="text-2xl font-semibold">Machine Learning</h2>
                {/* <p>Explain what i use Flask Frame Work for in this section</p> */}
            </div>
            <div className='w-[10vw] h-[10vw  ] mx-20 my-20 grid grid-cols-1 relative'>
                <img 
                src={SqlF}
                alt='FlaskImage'
                />
                <h2 className="text-2xl text-center font-semibold">SQL</h2>
                {/* <p>Explain what i use Flask Frame Work for in this section</p> */}
            </div>
        </div>
    </div>

  )
}

export default Whatido;
