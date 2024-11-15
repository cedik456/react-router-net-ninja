import { Outlet, NavLink } from "react-router-dom";

function Help() {
  return (
    <div className="help">
      <h1>Website Help</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
        praesentium sed expedita impedit reprehenderit quidem ipsa aperiam animi
        in ab aliquid dolore ut suscipit, sapiente odio rem soluta possimus
        autem?
      </p>
      <div className="help-links">
        <NavLink to="faq">View the FAQ</NavLink>

        <NavLink to="contact">Contact Us</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Help;
