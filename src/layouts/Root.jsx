import { Outlet, NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function Root() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="anchor-tag">RouterRoutes</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About us</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Breadcrumbs />
      </footer>
    </div>
  );
}

export default Root;
