"use client"

import { useState } from "react"
import { MdOutlineDesignServices, MdClose, MdWebAsset, MdOutlineAppSettingsAlt, MdAnimation } from "react-icons/md"
import { color, motion } from "framer-motion";

const ServicesBox = () => {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({});

    //// Put your data here
    const serviceInfo = [
        {
            id: 1,
            title: "Web design",
            icon: MdOutlineDesignServices,
            img: "../assets/images/third.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Excepturi earum, odio nihil officia placeat.",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 2,
            title: "Web developer",
            icon: MdWebAsset,
            img: "../assets/images/web.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Excepturi earum, odio nihil officia placeat.",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 3,
            title: "App developement",
            icon: MdOutlineAppSettingsAlt,
            img: "../assets/images/ui.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Excepturi earum, odio nihil officia placeat.",
            moreDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 4,
            title: "3D animation",
            icon: MdAnimation,
            img: "../assets/images/3d animation.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Excepturi earum, odio nihil officia placeat.",
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
            <div className="box">
                {serviceInfo.map((item) => (
                    <div key={item.id}>
                        <motion.div
                            className="box-contents"
                            whileHover={{ backgroundColor: "#e5d4be" }}
                            onClick={() => handleOpen(item)}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="box-icon">
                                    <item.icon className="text-[2rem] lg:text-[2.5rem]" />
                                </div>
                                <h3 className="font-bold text-lg lg:text-xl py-3">{item.title}</h3>
                                <p className="text-center text-sm lg:text-base font-light text-gray-400">{item.description}</p>
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


export default ServicesBox;