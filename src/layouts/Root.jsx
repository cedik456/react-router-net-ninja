import { Outlet, NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="anchor-tag">RouterRoutes</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About us</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
