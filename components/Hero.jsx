import React from 'react';
import CurvedTextWithImage from './CurvedTextWithImage';
import { FaFacebookF, FaInstagram, FaBehance } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[100vh] ml-3 overflow-hidden">
      <CurvedTextWithImage
        //HERE YOU CAN CHANGE THIS TEXT WITH YOUR INFO
        text="ZACK SANYDER - FRONT-END-DEVELOPER - UI/UX DEDIGNER "
        //HERE YOU CAN CHANGE THIS IMAGE WITH YOUR IMAGE
        imagePath="/assets/images/third.jpg"
      />
      <div className="hero-content">
        <h1 className="hero-name">{/**PUT YOUR NAME */}Zack Snyder</h1>
        <p className="hero-info">{/**PUT YOUR INFO */}I am a <span className="text-pry-brown">Front-end Developer</span> by nature and develop features suited for each project.</p>
      </div>
      <div className="flex items-center absolute bottom-5">
        <span className="px-0 md:px-10 border-b-2 border-pry-brown rounded-full"></span>
        <div className="flex">
          {/**here you can put your link (href="") */}
          <Link href="https://web.facebook.com" target="_blank" className="box-socail">
            <FaFacebookF />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" className="box-socail">
            <FaInstagram />
          </Link>
          <Link href="https://www.behance.net/" target="_blank" className="box-socail">
            <FaBehance />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-5 md:right-24 right-4">
        <h4 className="font-light text-xs md:text-sm">&copy; Created by <Link className="text-pry-brown font-semibold" href="https://themeforest.net/user/bestcoden">BestCoden</Link></h4>
      </div>
    </div>
  )
}

export default Hero;