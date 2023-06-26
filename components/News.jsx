"use client"

import { useState } from "react"
import { MdClose } from "react-icons/md"
import { color, motion } from "framer-motion";

const News = () => {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({});

    ///// Put your data here
    const serviceInfo = [
        {
            id: 1,
            title: "New React js Update",
            date: "22 Oct 2022 /",
            img: "../assets/images/third.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Excepturi earum, odio nihil officia placeat.",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 2,
            title: "How to Take a Break from Yourself",
            date: "5 August 2022 /",
            img: "../assets/images/web.jpg",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 3,
            title: "How to Become as a Freelancer",
            date: "20 August 2022 /",
            img: "../assets/images/ui.jpg",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 4,
            title: "Why We Should Read Books About Programming Languages ",
            date: "20 August 2022 /",
            img: "../assets/images/3d animation.jpg",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
    ];

    const handleOpen = (service) => {
        setOpen(true);
        setSelectedService(service);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <div className="grid grid-cols-1 gap-5 pl-0 sm:pm-[41%] lg:pl-[32%] pr-5  sm:pr-28 lg:pr-32 py-16 ">
                {serviceInfo.map((item) => (
                    <div key={item.id}>
                        <motion.div
                            className="bg-white flex items-center p-2 gap-4 cursor-pointer"
                            whileHover={{ backgroundColor: "#e5d4be",scale: 1.1 }}
                            onClick={() => handleOpen(item)}
                        >
                            <div className="w-[200px] h-[100px]">
                                <img src={item.img} alt="" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-light text-gray-400 text-sm tracking-wider">{item.date}</span>
                                <h3 className="font-bold text-lg lg:text-2xl">{item.title}</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`modal ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                            onClick={handleClose}
                            whileTap={{ scale: 1.5 }}
                            key={item.id}
                        >
                            <div className="relative">
                                <motion.div className="modal-content">
                                    <motion.div
                                        className="modal-btn"
                                        whileHover={{ backgroundColor: "#E0B784" }}
                                    >
                                        <MdClose className="text-white text-lg sm:text-2xl lg:text-3xl" />
                                    </motion.div>
                                    <div className="w-full h-80">
                                        <img src={selectedService.img} alt="your-image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="pt-5">
                                        <h4 className="font-bold text-lg lg:text-xl my-2">{selectedService.title}</h4>
                                        <p className="text-gray-600 my-5 text-sm lg:text-base">{selectedService.moreDescription}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default News;