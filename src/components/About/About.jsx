import '../About/about.css';
import { courses } from "./courses.js";

export const About = () => {
    return(
        <div id="about" className="bg-about d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5">
            <h1 className="h1-custom w-75 text-center">Sobre mi</h1>
            <div className="mx-2 px-2 w-about-custom">
                <h5 className="mx-auto w-text">Hola, me llamo Nicolas Galeano, tengo 23 años y soy Desarrollador Fullstack. <br /> Me encuentro en busqueda de mi primer trabajo IT mientras sigo capacitandome. Actualmente me encuentro cursando Tecnicatura en Programacion en la UNSAM ademas del programa Codo a Codo Python. <br /> Recientemente termine mi capacitancion con la Fundacion Pescar y Valtech, en el que me brindaron una capacitacion Fullstack MERN en EducacionIT y una beca de Google de Analista de Datos en Coursera. <br />
                Gracias a esto, pude obtener mas conocimientos y mejorar mis habilidades</h5>
            </div>
            <h2 className="h1-custom">Cursos y Estudios</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
                {courses.map((course, index)=>(
                <CardEduc title={course.title} time={course.time} text={course.text} certificates={course.certificates}
                key={index}></CardEduc>
                ))}
            </div>
        </div>
    )
}


const CardEduc = ({title, time, text, certificates}) => {
    return(
        <div className="card w-card-educ">
        <div className="card-body">
          <h5 className="card-title color-custom">{title}</h5>
          <p className="card-text"><small className="time-text">{time}</small></p>
          <p dangerouslySetInnerHTML={{ __html: text }} />
          {certificates? <a href={certificates} target='_blank' className="btn btn-secondary btn-custom">Ver certificados</a> : ' ' }
        </div>
      </div>
    )
}