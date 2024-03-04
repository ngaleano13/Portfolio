import CV from "../../../public/NicolasGaleanoCV.pdf";
import Foto from "../../../public/foto_ng.jpg";

import "./home.css";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <div className="vh-nav d-flex flex-column-reverse flex-md-row justify-content-center align-items-center text-light gap-1">
      <div className="p-4 text-center text-md-start ">
        <h1 className="mb-4">
          Hola, soy
          <TypeAnimation
            sequence={[
              "Programador FullStack",
              1000,
              "",
              1000,
            ]}
            speed={50}
            className="color-custom"
            style={{ fontSize: "1.1em", display: "block", height: '80px'}}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-3 fs-5 w-custom">
          Me llamo <span className="color-custom">Nicolas Galeano</span>, soy una persona cooperativa, responsable y
          organizada, apasionada por la programación.
        </p>
        <a href={CV} className="btn btn-secondary btn-custom mt-3 p-3">
          Descargar CV
        </a>
      </div>
      <div className="p-4">
        <img
          src={Foto}
          className="rounded-circle img-custom"
          alt="Foto de Nicolas Galeano"
        />
      </div>
    </div>
  );
};
