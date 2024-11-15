import React from "react";

function Faq() {
  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>

      <div className="faq-item">
        <h3>What is this website about?</h3>
        <p>
          This website provides tutorials and resources on web development and
          programming.
        </p>
      </div>

      <div className="faq-item">
        <h3>Is there a community?</h3>
        <p>
          Yes! We have an active community where you can ask questions, share
          knowledge, and collaborate on projects.
        </p>
      </div>

      <div className="faq-item">
        <h3>Do I need any prior experience to use this website?</h3>
        <p>
          No, we offer tutorials for all skill levels, from beginners to
          advanced developers.
        </p>
      </div>

      <div className="faq-item">
        <h3>How can I contribute to this website?</h3>
        <p>
          If you'd like to contribute, you can submit a pull request on GitHub
          with improvements or new tutorials.
        </p>
      </div>
    </div>
  );
}

export default Faq;
