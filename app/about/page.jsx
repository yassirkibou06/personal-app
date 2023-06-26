"use client"

import AboutContent from "@components/AboutContent";
import MyKnowledge from "@components/MyKnowledge";
import Shadow from "@components/Shadow";
import Skills from "@components/Skills";
import Testimonial from "@components/Testimonial";
import { motion } from "framer-motion";


const Feed = () => {
    return (
        <motion.div className="relative grid grid-cols-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.70 }}
        >
            <Shadow />
            <h1 className="about-title">About Me.</h1>
            <AboutContent />
            <span className="w-[75%] sm:w-[30%] lg:w-[45%] border-b-[1px] border-black mx-8 sm:mx-[25em] lg:mx-[35em] my-[4em] block"></span>
            <Skills />
            <span className="w-[75%] sm:w-[30%] lg:w-[45%] border-b-[1px] border-black mx-8 sm:mx-[25em] lg:mx-[35em] my-[4em] block"></span>
            <MyKnowledge />
            <span className="w-[75%] sm:w-[30%] lg:w-[45%] border-b-[1px] border-black mx-8 sm:mx-[25em] lg:mx-[35em] my-[4em] block"></span>
            <div className="pl-0 sm:pl-[40%] lg:pl-[38%] ">
            <Testimonial />
            </div>
        </motion.div>
    )
}

export default Feed;