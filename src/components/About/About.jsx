import { skills } from "../About/skills.js";
import '../About/about.css';

export const About = () => {
    return(
        <div id="about" className="bg-about d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5">
            <h1 className="h1-custom w-75 text-center">Sobre mi</h1>
            <div className="mx-2 px-2 w-about-custom">
                <h5 className="mx-auto">Hola, me llamo Nicolas Galeano, tengo 23 años y soy Desarrollador Fullstack. <br /> Me encuentro en busqueda de mi primer trabajo IT mientras sigo capacitandome. Actualmente me encuentro cursando Tecnicatura en Programacion en la UNSAM ademas del programa Codo a Codo Python. <br /> Recientemente termine mi capacitancion con la Fundacion Pescar y Valtech, en el que me brindaron una capacitacion Fullstack MERN en EducacionIT y una beca de Google de Analista de Datos en Coursera. <br />
                Gracias a esto, pude obtener mas conocimientos y mejorar mis habilidades</h5>
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