import { Outlet, NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>RouterRoutes</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About us</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
