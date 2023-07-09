import React from 'react';
import { Js2, PythonLogo1, ReactLogo2, FlaskLogo1 } from "../assets/index";

const Whatido =() =>{
  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
            <div className="w-[400vw] h-full flex bg-blue-500 grid grid-cols-3 gap-10 relative">
                <div className='w-[30vw] h-[30vw] relative mx-20 my-20 grid grid-cols-1 absolute'>
                    <img 
                    src={Js2}
                    alt='JsImage'
                    />
                    <h2>Javascript</h2>
                    <p>Explain what i use Javascript for in this section</p>
                </div>
                <div className='w-[30vw] h-[30vw] relative mx-20 my-20 grid grid-cols-1 absolute'>
                    <img 
                    src={PythonLogo1}
                    alt='JsImage'
                    />
                    <h2>Python Language</h2>
                    <p>Explain what i use Python for in this section</p>
                </div>
                <div className='w-[30vw] h-[30vw] relative mx-20 my-20 grid grid-cols-1'>
                    <img 
                    src={ReactLogo2}
                    alt='JsImage'
                    />
                    <h2>React Framwork</h2>
                    <p>Explain what i use React for in this section</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Whatido;