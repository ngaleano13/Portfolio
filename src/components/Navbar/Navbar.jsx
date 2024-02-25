import './navbar.css';

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg fixed-top z-index-sticky bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand ms-4 color-custom" href="#">PORTFOLIO<i className="fa-solid fa-code ps-3"></i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
            <ul className="navbar-nav gap-2 mt-3 mt-md-0 align-items-center">
              <li className="nav-item">
              <a className="nav-link mx-2" href="#about"><i className="fa-solid fa-user pe-3"></i>Sobre Mi</a>
              </li>
              <li className="nav-item">
              <a className="nav-link mx-2" href="#skills"><i className="fa-solid fa-list pe-3"></i>Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#projects"><i className="fa-solid fa-folder-open pe-3"></i>Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#contact"><i className="fa-solid fa-circle-user pe-3"></i>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}