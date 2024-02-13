import { skills } from "../About/skills.js";
import '../About/about.css';

export const About = () => {
    return(
        <div id="about" className="bg-about d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5">
            <h1 className="h1-custom w-75 text-center">Sobre mi</h1>
            <div className="mx-2 px-2 text-center w-about-custom">
                <h5 className="mx-auto">Hola!, Me llamo Nicolas Galeano y soy Desarrollador Fullstack, hace unos meses termine la capacitacion en EducacionIT que me brindo la Fundación Pescar y Valtech. Me encuentro en la búsqueda de mi primer trabajo IT mientras me sigo capacitando en mas tecnologías y especializándome en algunas. </h5>
            </div>
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