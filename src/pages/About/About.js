import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://private-user-images.githubusercontent.com/54279953/313147123-338affc3-c3ee-4665-a198-f84af6e43cf7.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0OTY4NTYsIm5iZiI6MTcxMDQ5NjU1NiwicGF0aCI6Ii81NDI3OTk1My8zMTMxNDcxMjMtMzM4YWZmYzMtYzNlZS00NjY1LWExOTgtZjg0YWY2ZTQzY2Y3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE1VDA5NTU1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIxYjA3ODUyYmEwZDYyZTEwODI4YTI3NTIwZGJhMTMyZGMyZTE0NTQ3MTUxZDE5YjY5NzdjZjAwNmQ0MDVlOTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rq79CVtLJDwVQYrgQRv4kfz09ojnn1oPuaOK9TvPHfE"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              As a MERN stack developer, I am proficient in using the technologies that make up the MERN stack, which include MongoDB, Express.js, React.js, and Node.js. I have experience designing and developing full-stack web applications using these technologies. I am skilled in creating RESTful APIs with Node.js and Express.js, as well as using MongoDB for data storage and retrieval.
<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* As a MERN stack developer,  */}
    I am committed to writing clean, maintainable code that is well- documented and adheres to best practices in software development. I am always eager to learn and stay up-to-date with the latest trends and technologies in the field.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
