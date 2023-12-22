import React from "react";
// import {HiArrowLeft, HiArrowRight} from "react-icons/hi";
import { gradient, ernest } from "../assets/index";

const Banner =() =>{
    return (
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[650px] relative">
                <div className="w-[400vw] h-full flex">
                    <img
                    className="w-[400vw] h-full object-cover" 
                    src={gradient}
                    alt="BannerImage"
                    loading="priority"
                    />
                </div>
                <div className='absolute w-fit left-0 right-20 top-10 mx-10 border-10 gap-20 bg-white grid grid-cols-2'>
                    <div className="grid grid-col-1 mx-20 my-20 ">
                        <h1 className="text-4xl font-semibold text-red ">PROFILE</h1>
                        <p className="justify-center text-justify">I am an entry level software Engineer
                            and a Data Analyts. I hold a Bachelors degree in Mathematics & Statistics from
                            the University of Calabar, Nigeria. I've developed data-driven Web and Mobile Applications to meet my clients
                            needs and satisfaction. I am also a research assitant, performing scientific research in order to contribute to science. Our services are top notch and the feedbacks after every job has been mind blowing. Pitch that
                            great idea you have today and allow me transform your thoughts to a productive code. 
                        </p>
                        <button class="bg-blue-500 hover:bg-purple-950 text-white font-bold py-2 px-2 w-15 rounded-full">Connect</button>
                    </div>
                    <div className="w-[50vw] h-full grid grid-cols-1">
                        <img 
                        className="w-[20vw] object-cover my-10"
                        src={ernest}
                        alt="ProfileImage"
                        />
                        <h1 className="text-4xl font-semibold">Ekereke Ernest Echeng</h1>
                        <h2 className="text-2xl font-semibold">Junior Software Engineer &</h2>
                        <h2 className="text-2xl font-semibold">Data Scientist</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;