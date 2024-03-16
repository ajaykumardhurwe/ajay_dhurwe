import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 "
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer, intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Learnovate Ecommerce, pvt ltd
              </h4>
              <p>
              End of internship, I have a solid foundation in web development 
              concepts and technologies, along with practical experience working on 
              real-world projects. I equipped with the skills and knowledge 
              necessary to pursue a career in web development or to further my education 
              in the field.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Business Development Associate
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Byjus, pvt ltd
              </h4>
              <p>
              MY business development work experience will offer a rich learning experience 
              that combines practical skills development with exposure to strategic 
              business concepts and industry dynamics.  
              I have gained valuable experience, insights, and connections that will 
              prepared me for a successful career in business development or related fields.
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                xyz, pvt ltd
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
