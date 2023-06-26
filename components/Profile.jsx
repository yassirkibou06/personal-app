"use client"

import { useState } from "react";
import { MdClose } from "react-icons/md"
import { color, motion } from "framer-motion";

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({});

    // Put your data here (image,url for your project, descr)
    const ProfileInfo = [
        {
            id: 1,
            img: "../assets/images/third.jpg",
            url: "https://www.google.co.uk/",
            //put your description project
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 2,
            img: "../assets/images/web.jpg",
            url: "https://www.google.co.uk/",
            //put your description project
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 3,
            img: "../assets/images/ui.jpg",
            url: "https://www.google.co.uk/",
            //put your description project
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias, Ex blanditiis a temporibus, facere odio vero quas quae mollitia saepe assumenda autem perferendis inventore facilis, magni maxime! Ut quis assumenda molestias.",
        },
        {
            id: 4,
            img: "../assets/images/3d animation.jpg",
            url: "https://www.google.co.uk/",
            //put your description project
            Description:
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
                {ProfileInfo.map((item) => (
                    <div key={item.id}>
                        <motion.div
                            className="profile-box"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleOpen(item)}
                        >
                            <img src={item.img} alt="image" className="w-full h-full object-cover z-0" />
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
                                        <p className="text-gray-600 my-5 text-sm lg:text-base">{selectedService.Description}</p>
                                        <a
                                            href={selectedService.url}
                                            className="py-2 px-4 font-semibold text-sm text-center block border-2 border-pry-brown rounded-full delay-100 ease-in hover:bg-pry-bleu hover:border-pry-bleu hover:text-white transition-all duration-300"
                                        >MY LINK</a>
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


export default Profile