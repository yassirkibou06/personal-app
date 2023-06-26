import React from 'react'

const AboutContent = () => {
    return (
        <>
            <div className="relative">
                <p className="font-medium text-sm lg:text-base pr-4 sm:pr-[10em] lg:pr-[14em] sm:pl-[23em] lg:pl-[30em] pt-5 leading-8">
                    Hi, my name is Zack Snyder and I am a front-end developer with a passion for UI/UX design.
                    I've spent most of my waking hours for the last ten years designing, programming, and creating full-fledged platforms from scratch.
                    One of my specialties is transforming ideas into websites with
                    a unique, outstanding, and contemporary look-and-feel.
                    With extensive knowledge of web mechanics,
                    I excel at optimizing complex integrations to require minimal maintenance while ensuring they run seamlessly for years.
                </p>
                <span className="w-16 border-b-2 rounded-full border-pry-brown absolute top-[17%] left-[29%] opacity-0 lg:opacity-100 sm:opacity-0"></span>
            </div>
            <span className="w-[75%] sm:w-[30%] lg:w-[45%] border-b-[1px] border-black mx-8 sm:mx-[25em] lg:mx-[35em] my-[4em] block"></span>
            <div className="pl-0 sm:pl-[19em] lg:pl-64 block lg:flex sm:gap-7 lg:gap-44 justify-center items-center ">
                <div>
                    <ul>
                        <li className="spacing-li">
                            <span className="about-info">Birthday:</span>
                            <span className="about-info-value">05.02.2000</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Age:</span>
                            <span className="about-info-value">32</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Address:</span>
                            <span className="about-info-value">Ave 11, New York, USA</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Email:</span>
                            <span className="about-info-value">pola@gmail.com</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Phone</span>
                            <span className="about-info-value">+212 675467067</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="spacing-li">
                            <span className="about-info">Nationality:</span>
                            <span className="about-info-value">USA</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Study:</span>
                            <span className="about-info-value">Univercity of ""</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Degree:</span>
                            <span className="about-info-value">Master</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Interest:</span>
                            <span className="about-info-value">Playing Games</span>
                        </li>
                        <li className="spacing-li">
                            <span className="about-info">Freelance:</span>
                            <span className="text-green-600 font-semibold">Available</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutContent