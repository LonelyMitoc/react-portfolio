import React from "react";

export const Contact = () => {
  return (
    <div id="contact" className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-white text-center">Contact Me!</h1>
        <div className="contact-info">
          <a href="mailto: jamesmatsu@gmail.com" className="info">
            Email: jamesmatsu@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/james-matsushita-22016586/" className="info">
            LinkedIn
          </a>
          <a href="https://github.com/LonelyMitoc" className="info">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};