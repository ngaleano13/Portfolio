import { skills } from "./techs.js";
import { learnSkills } from "./techs.js";
import { softSkills } from "./techs.js";
import './skills.css'

export const Skills = () => {
    return(
        <div id="skills" className="bg-skills d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5">
        <h2 className="h1-custom text-center">Tecnologias</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mx-2 w-about-custom">
            {skills.map((skill, index)=>(
                <Cards name={skill.name} icon={skill.icon} key={index}></Cards>
            ))}
        </div>
        <h2 className="h1-custom text-center">Tecnologias que estoy aprendiendo</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mx-2 w-about-custom">
            {learnSkills.map((skill, index)=>(
                <Cards name={skill.name} icon={skill.icon} key={index}></Cards>
            ))}
        </div>
        <h2 className="h1-custom text-center">Aptitudes</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mx-2 w-about-custom">
            {softSkills.map((skill, index)=>(
                <Cards name={skill.name} icon={skill.icon} key={index}></Cards>
            ))}
        </div>
        </div>
    )
}


const Cards = ({name, icon}) => {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <img className="size-custom" src={icon}/>
            <h5 className="mt-1 font-custom">{name}</h5>
        </div>
    )
}