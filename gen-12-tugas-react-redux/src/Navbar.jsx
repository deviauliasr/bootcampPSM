import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  let navigate = useNavigate();
  const { color, changeColor } = useContext(ThemeContext);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const userLogout = async () => {
    dispatch({
      type: "user/LogOut",
    });
    navigate("/");
  };

  return (
    <>
      <div>
        <div className={color ? "bg-primary" : "bg-dark"}>
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
              <a className="navbar-brand">SimpleNote</a>
              {user.username == "" ? (
                <div className="navbar">
                  <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
                    <li className="nav-item mt-2 mx-2">
                      <a type="button" onClick={changeColor} className={color ? "text-dark" : "text-white"}>
                        {color ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-brightness-high"></i>}
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="navbar">
                  <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                      <Link to="/home" className="nav-link active" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mt-2 mx-2">
                      <a type="button" onClick={changeColor} className={color ? "text-dark" : "text-white"}>
                        {color ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-brightness-high"></i>}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {user.username == "" ? (
                <div className="navbar-nav text-light">
                  <i class="bi bi-person-circle"></i>
                </div>
              ) : (
                <div className="navbar-nav text-light">
                  <i class="bi bi-person-circle">&nbsp;{user.username}</i>&nbsp;&nbsp;
                  <a type="button" class="pe-auto" className="text-white">
                    <i class="bi bi-box-arrow-right" onClick={userLogout}></i>
                  </a>
                </div>
              )}
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
