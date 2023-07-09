import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaHome,
    FaGithub,
} from "react-icons/fa";
import {MdLocation} from "react-icons/md";
import {BsPersonFill} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-60 bg-purple-950 text-[#949494] py-20 px-20 font-titleFont">
        <div className='max-w-screen-xl mx-auto grid grid-2 gap-5'>
            <h1 className="text-2xl font-semibold">Contact Me @</h1>
            <div className='flex gap-8 text-lg text-gray-400'>
                <FaHome className='hover:text-white duration-300 cursor-pointer' />
                <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
                <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                <FaGithub className='hover:text-white duration-300 cursor-pointer' />
            </div>
            <div className='flex flex-row justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm'
                placeholder='e-mail' 
                type="text" />
                <button className='text-sm border text-white border-t-0
                hover:bg-gray-900 active:bg-white active:text-black'>
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer;