import "./projects.css";
import { Projs } from "./projs.js";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-project d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5"
    >
      <h2 className="h1-custom text-center">Proyectos</h2>

      {Projs.map((projs, index) => (
        <CardProject title={projs.title} text={projs.text} img={projs.img} LDeploy={projs.LDeploy} LGitHub={projs.LGitHub} LDemo={projs.LDemo} key={index}></CardProject>
      ))}
    </div>
  );
};

const CardProject = ({ title, text, img, LDeploy, LGitHub, LDemo }) => {
  return (
    <div className="card w-card-proj mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title color-custom">{title}</h4>
            <p className="card-text">{text}</p>
            <div className="d-flex gap-3">
              {LDeploy ? (
                <a
                  href={LDeploy}
                  target="_blank"
                  className="btn btn-secondary btn-custom"
                >
                  Deploy
                </a>
              ) : (
                " "
              )}
              {LDemo ? (
                <a
                  href={LDemo}
                  target="_blank"
                  className="btn btn-secondary btn-custom"
                >
                  Demo
                </a>
              ) : (
                " "
              )}
              <a
                href={LGitHub}
                target="_blank"
                className="btn btn-secondary btn-custom"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
