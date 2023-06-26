"use client"

import ContactForm from "@components/ContactForm";
import Map from "@components/Map";
import Shadow from "@components/Shadow";
import { motion } from "framer-motion";

const page = () => {
    return (
        <div>
            <Shadow />
            <h1 className="about-title">Contact.</h1>
            <div className="pt-5 pl-0 sm:pl-[40%] lg:pl-[34%] pr-5 sm:pr-22 lg:pr-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
            >
                <Map />
            </motion.div>
            <ContactForm />
            </div>
        </div >
    )
}

export default page;