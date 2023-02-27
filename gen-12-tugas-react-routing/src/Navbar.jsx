import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                <li className="nav-item mx-2">
                  <Link to="/editNote" className="nav-link">
                    Edit
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/addNote" className="btn btn-outline-light w-20">
              Create Note
            </Link>
          </div>
        </nav>
      </div>
      <div className="container pt-5">
        <Outlet />
      </div>
    </>
  );
}
