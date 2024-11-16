import React from "react";
import { useRouteError, Link } from "react-router-dom";
import CareerDetails from "./CareerDetails";

function CareersError() {
  const error = useRouteError();
  return (
    <div className="career-error">
      <h3>Error</h3>
      <p>{error.message}</p>
      <Link to="/" element={<CareerDetails />}>
        Back to Homepage
      </Link>
    </div>
  );
}

export default CareersError;
