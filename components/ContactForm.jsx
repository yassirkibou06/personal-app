"use client"

import { motion } from "framer-motion";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-4 my-5"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input-contact"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-contact"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="input-contact"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-pry-brown text-white py-2 px-4 rounded-sm hover:bg-pry-bleu transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;