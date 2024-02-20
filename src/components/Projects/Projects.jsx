import './projects.css'

export const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-project d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5"
    >
      <h2 className="h1-custom text-center">Proyectos</h2>

    {/* Insertar bucle con proyectos */}

    </div>
  );
};

const CardProject = ({title, text, img, LDeploy, LGitHub, LDemo}) => {
  return (
    <div class="card w-card-proj mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={img} class="img-fluid rounded-start"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title color-custom">{title}</h4>
            <p class="card-text">
              {text}
            </p>
            <div className='d-flex gap-3'>
            {LDeploy? <a href={LDeploy} target='_blank' className="btn btn-secondary btn-custom">Deploy</a> : ' ' }
            {LDemo? <a href={LDemo} target='_blank' className="btn btn-secondary btn-custom">Demo</a> : ' ' }
                <a href={LGitHub} target='_blank' className="btn btn-secondary btn-custom">GitHub</a>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
