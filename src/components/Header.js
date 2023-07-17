import React from 'react';
import {DivLogo1} from "../assets/index";
import { Link } from "react-router-dom";

export const Header =() => {
  return (
    <div className="w-full h-30 flex bg-purple-950 border-b-[2px]border-b-gray-700 font-titleFont sticky to-0 z-50">
        <div className="max-w-screen-x1 h-full mx-auto flex item-center gap-80 justify-between">
            <Link to="/Profile">
                <div className='flex items-left'>
                    <img className="w-20" src={DivLogo1} alt="Logo" />
                </div>
            </Link>
            <div className="flex items-center gap-10">
                <ul className='flex items-center gap-10'>
                    <li className='text-base text-white font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                        <Link to="Profile">
                            Profile
                        </Link>
                    </li>
                    <li className='text-base text-white font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                        <Link to="/Profile">
                            Projects
                        </Link>
                    </li>
                    <li className='text-base text-white font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                        <Link to="/Connect">
                            Connect
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header