import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [user, setUser] = useState("ced");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h3>About Us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cum
        tempore labore fugiat commodi quam? Eos explicabo ipsum ipsa est qui
        mollitia! Amet quia delectus commodi error assumenda totam repellendus
        tempora nam fugit suscipit quod harum enim reprehenderit iure, corrupti
        nobis, neque libero maxime laudantium impedit itaque dolor! Magnam,
        voluptates!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cum
        tempore labore fugiat commodi quam? Eos explicabo ipsum ipsa est qui
        mollitia! Amet quia delectus commodi error assumenda totam repellendus
        tempora nam fugit suscipit quod harum enim reprehenderit iure, corrupti
        nobis, neque libero maxime laudantium impedit itaque dolor! Magnam,
        voluptates!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cum
        tempore labore fugiat commodi quam? Eos explicabo ipsum ipsa est qui
        mollitia! Amet quia delectus commodi error assumenda totam repellendus
        tempora nam fugit suscipit quod harum enim reprehenderit iure, corrupti
        nobis, neque libero maxime laudantium impedit itaque dolor! Magnam,
        voluptates!
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default About;
