import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './Assets/images/logo.png'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <a className="navbar-brand mx-auto" href="#" > <img src={logo} alt="My Website Logo" width="30" height="30 " className="logo"/>
                  HOLA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
       {/* Banner Publicitario en la parte superior */}
       <div className="ad-container my-4">
          {/* Aquí irá el código de Google AdSense */}
          <p>Ad Space - Top Banner</p>
        </div>
      <div className="container">
        <header className="my-5 header-background">
          
          <h1>Welcome to My Website</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>          
        </header>

        {/* Banner Publicitario en la parte superior */}
        <div className="ad-container my-4">
          {/* Aquí irá el código de Google AdSense */}
          <p>Ad Space - Top Banner</p>
        </div>

         {/* Sección de Main Content con 3 columnas */}
         <div className="row mt-4">
          <div className="col-md-4">
            <h2>Column 1</h2>
            <p>This is the first column. You can add any content you like here, such as text, images, or even other Bootstrap components.</p>
          </div>
          <div className="col-md-4">
            <h2>Column 2</h2>
            <p>This is the second column. You can also include any kind of content here.</p>
          </div>
          <div className="col-md-4">
            <h2>Column 3</h2>
            <p>This is the third column. Customize it with the content that best suits your needs.</p>
          </div>

          <div className="col-md-4">
            <h2>Sidebar</h2>
            <p>
              This sidebar can contain additional links, advertisements, or
              other relevant information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
