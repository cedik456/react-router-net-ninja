import { useLoaderData, useParams } from "react-router-dom";

function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <p>{career.title}</p>
      <p>Based in {career.location}</p>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
    </div>
  );
}

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
