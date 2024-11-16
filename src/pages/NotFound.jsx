import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Error";

    return () => {
      document.title = "React Router";
    };
  }, []);

  return (
    <div className="error">
      <h1>404 - ERROR</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link to="/" className="return-btn">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
