import React from "react";
import { Outlet } from "react-router-dom";

function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers Layout</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi
        quo repellat illum tenetur natus blanditiis accusamus ipsam minus ex!
      </p>

      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default CareersLayout;
