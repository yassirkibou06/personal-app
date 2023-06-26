"use client"

import Nav from "@components/Nav";
import "@styles/globals.css";
import { useState, useEffect } from "react"
import { PropagateLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';


export const Metadata = {
  title: "Pola - Tailwind CSS Portfolio React/Next JS 13 Template",
  description: "My portfolio website",
};

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleReload = () => {
      setLoading(true);
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  return (
    <html lang='en'>
      <body>
        {loading ? (
          <div className="bg-black z-50 w-full h-screen">
            <div className="absolute top-2/4 left-2/4">
              <PropagateLoader color="rgba(224, 183, 132, 1)" size={20} loading={loading} />
            </div>
          </div>
        ) : (
          <>
            <AnimatePresence >
              <div className="pl-[15px]" >
                <Nav />
                {children}
              </div>
            </AnimatePresence>
          </>
        )}
      </body>
    </html>
  );
};


export default RootLayout;