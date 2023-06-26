"use client"

import { AiFillPlusCircle } from "react-icons/ai";

const MyKnowledge = () => {
    // put your info
    const info = [
        { skill: 'Tailwind css', },
        { skill: 'React js, Next js', },
        { skill: 'Ui design'},
        { skill: 'Ux design'}
        // Add more skills as needed
    ];
    // put your info
    const interests = [
        { skill: 'Build webPage', },
        { skill: 'design a page', },
        { skill: 'responsive design'},
        { skill: 'Front End'}
        // Add more skills as needed
    ];
  return (
    <div className="flex gap-2 justify-between items-center pl-0 sm:pl-[40%] lg:pl-[36%] pr-8 sm:pr-28 lg:pr-48">
        <div>
            <h1 className="font-bold lg:text-xl pb-3">Knowledge</h1>
            {info.map((item, index) => (
                <div key={index} className="flex items-center py-2">
                    <AiFillPlusCircle className="text-pry-bleu"/>
                    <h2 className="px-2 font-medium text-gray-500">{item.skill}</h2>
                </div>
            ))}
        </div>
        <div>
            <h1 className="font-bold lg:text-xl pb-3">Interests</h1>
            {interests.map((item, index) => (
                <div key={index} className="flex items-center py-2">
                <AiFillPlusCircle className="text-pry-bleu"/>
                <h2 className="px-2 font-medium text-gray-500">{item.skill}</h2>
            </div>
            ))}
        </div>
    </div>
  )
}

export default MyKnowledge;