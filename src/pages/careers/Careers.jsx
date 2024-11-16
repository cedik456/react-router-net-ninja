import { useLoaderData, Link, Outlet, useRouteError } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
  <Outlet />;
}

export default Careers;

export const careerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not fetch Careers");
  }

  return res.json();
};
