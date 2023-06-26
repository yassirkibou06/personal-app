"use client"

import SkillBar from "./SkillBar";
import SkillBarLang from "./SkillBarLang";


const Skills = () => {
    // your language skill or design "put your info"
    const yourSkills = [
        { skill: 'HTML', percentage: 80 },
        { skill: 'CSS', percentage: 70 },
        { skill: 'JavaScript', percentage: 90 },
        // { skill: 'figma', percentage: 90 },
        // Add more skills as needed
    ];
    // your languages "put your info"
    const yourSkillsLang = [
        { skillLang: 'English', percentage: 90 },
        { skillLang: 'Arabic', percentage: 70 },
        { skillLang: 'French', percentage: 90 },
        // Add more skills as needed
    ];

    return (
        <div className="pl-0 sm:pl-[40%] lg:pl-[36%] pr-24 sm:pr-40 lg:pr-36 pt-10">
            <div className="block lg:flex justify-center items-center gap-20">
                <div className="w-full pb-5 lg:pb-0">
                    <h1 className="text-xl lg:text-2xl font-bold mb-10">Programming Skills</h1>
                    {yourSkills.map((skill, index) => (
                        <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
                    ))}
                </div>
                <div className="w-full">
                    <h1 className="text-xl lg:text-2xl font-bold mb-10">Language Skills</h1>
                    {yourSkillsLang.map((skillLang, index) => (
                        <SkillBarLang key={index} skill={skillLang.skillLang} percentage={skillLang.percentage} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills