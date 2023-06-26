"use client"

import Hero from "@components/Hero";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <>
      {/* content of the page */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.70 }}
      >
        <div>
          <Hero />
        </div>
      </motion.div>
    </>
  )
}

export default Home;