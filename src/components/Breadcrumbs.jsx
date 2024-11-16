import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div className="crumbs">
      {paths.map((path, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
        return (
          <span key={routeTo}>
            <Link className="link" to={routeTo}>
              {path}
            </Link>{" "}
            {index < paths.length - 1 && " > "}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
