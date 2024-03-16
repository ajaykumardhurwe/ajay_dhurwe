import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
      
        In summary, the MERN stack provides a robust and scalable foundation 
        for building a bookstore project, combining the 
        power of MongoDB, Express.js, React.js, 
        and Node.js to create a feature-rich web 
        application with a seamless user experience and i perform
        create, read, delete and update (crud) opertaions.
       
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://private-user-images.githubusercontent.com/54279953/313168422-986426f6-012b-475c-b5ec-92cecfd30017.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA1MDEyODQsIm5iZiI6MTcxMDUwMDk4NCwicGF0aCI6Ii81NDI3OTk1My8zMTMxNjg0MjItOTg2NDI2ZjYtMDEyYi00NzVjLWI1ZWMtOTJjZWNmZDMwMDE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE1VDExMDk0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhM2EyMTY5Y2FkMDc0MjNhZDQ2YmM1ZmI0NzYzZmIzZTc2YTY1YWQwYjZiYWVlNTkwNGI3NmEzNThjMDQxNDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.e8k-Skk26SEa6PZ3Zzgk8bLTDrAOZp2SGVoRsXb7PPo"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     Book Store App
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://books-stores-app.netlify.app/books"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/ajaykumardhurwe/book-store.01"
                  >
                    CODE
                  </a>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://private-user-images.githubusercontent.com/54279953/313174751-053f93e0-1a17-4d20-a6cd-336ccfbbca76.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA1MDI3ODAsIm5iZiI6MTcxMDUwMjQ4MCwicGF0aCI6Ii81NDI3OTk1My8zMTMxNzQ3NTEtMDUzZjkzZTAtMWExNy00ZDIwLWE2Y2QtMzM2Y2NmYmJjYTc2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE1VDExMzQ0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA4OGUxZjRlN2NlOGY1MjExNWYxNDM0NzQ3ZWVmNWY4ZmY0NzRhZGI5MmM2ZmYyNTZhMjAyNWVlZDJjZTk4ODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.pvikxv3fEizmZRz1Z3mPo9flEPPZrLpDQTFxCDFqZW8"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React JS</span>

                  <span className="card-detail-badge">C++</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">PATHFINDER-VISUALIZER <br></br>Dijkstra algorithm</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://pathfinder-visualizer1.netlify.app/"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/ajaykumardhurwe/PATHFINDER-VISUALIZER"
                  >
                    CODE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Desktop</span>
                  <img
                    src="https://t4.ftcdn.net/jpg/02/07/51/71/360_F_207517197_Kwr5TLcZ57TcYVU7QtrUKlY2oFhPw6R6.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {/* <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span> */}

                  <span className="card-detail-badge">C++</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Modern Farming Management System</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/ajaykumardhurwe/Modern-farming-Mangement-system-final-project-report">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
