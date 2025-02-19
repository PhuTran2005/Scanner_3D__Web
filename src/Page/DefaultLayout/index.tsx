import { NavLink, Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
export default function DefaultLayout() {
  return (
    <>
      <div className="wrap">
        <header className="header">
          <div className="header__logo">
            <img src="" alt="Logo" />
          </div>
          <div className="header__nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/discovery">Discovery</NavLink>
              </li>
              <li>
                <NavLink to="/colection">Colection</NavLink>
              </li>
            </ul>
            <div className="header__search">
              <input type="text" />
            </div>
          </div>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <ul className="footer__nav">
            <li className="footer__social">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li className="footer__copyrigth">
              <p>CopyRight by IT</p>
            </li>
            <li className="footer__logo">
              <img src="" alt="logo" />
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
