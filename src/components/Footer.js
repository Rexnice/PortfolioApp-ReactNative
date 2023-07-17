import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import {MdLocation} from "react-icons/md";
import {BsPersonFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-60 bg-purple-900 text-[#949494] gap-50 py-20 px-20 font-titleFont">
        <div className='max-w-screen-xl mx-auto grid grid-2'>
            <h1 className="text-2xl font-semibold py-3">Contact Me @</h1>
            <div className='flex gap-8 text-lg text-gray-400'>
                <Link to="https://www.linkedin.com/in/ernest-ekereke-ab90a5185/">
                    <FaLinkedin className='hover:text-white duration-300 cursor-pointer' />
                </Link>
                <Link to="https://www.facebook.com/ernest echeng">
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
                </Link>
                <Link to="https://twitter.com/Rexnice2">
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                </Link>
                <Link to="">
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                </Link>
                <Link to="https://github.com/Rexnice">
                    <FaGithub className='hover:text-white duration-300 cursor-pointer' />
                </Link>
            </div>
            <div className='flex flex-row justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm'
                placeholder='e-mail' 
                type="text" />
                <button className='text-sm border text-white border-t-0
                hover:bg-gray-900 active:bg-white active:text-black'>
                    send mail
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer;