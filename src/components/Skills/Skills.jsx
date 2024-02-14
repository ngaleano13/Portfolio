import { skills } from "./skills.js";

export const Skills = () => {
    return(
        <div id="skills" className="bg-about d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5">
        <h2 className="h1-custom">Tecnologias</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mx-2 w-about-custom">
            {skills.map((skill, index)=>(
                <Cards name={skill.name} icon={skill.icon} key={index}></Cards>
            ))}
        </div>
        </div>
    )
}


const Cards = ({name, icon}) => {
    return(
    <div className="card w-card">
        <div className="card-body hover-custom d-flex justify-content-center align-items-center ">
            <h5 className="card-title card-font-custom m-0 ">{name}</h5>
        </div>
      </div>
    )
}