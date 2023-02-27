import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "./NotesProvider";

export default function Navbar() {
  const { color, changeColor } = useContext(NotesContext);

  return (
    <>
      <div>
        <div className={color ? "bg-primary" : "bg-dark"}>
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
              <a className="navbar-brand">SimpleNote</a>
              <div className="navbar">
                <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <Link to="/" className="nav-link active" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item mt-2 mx-2">
                    <a onClick={changeColor} className={color ? "text-dark" : "text-white"}>
                      {color ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-brightness-high"></i>}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-nav text-light">
                <i class="bi bi-person-circle">&nbsp;User</i>
              </div>
            </div>
          </nav>
        </div>
        <div className="container pt-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
