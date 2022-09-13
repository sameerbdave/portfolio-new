import { useState } from "react";

const Tab = () => {
  const [ToggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index)
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="container">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(0, "active-tabs")}`}
          onClick={() => toggleTab(0)}
        >
          Achievements
        </li>
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          Experience
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Qualification
        </li>
      </ul>
      <div className="content-container">
        <div className={`content ${getActiveClass(0, "active-content")}`}>
          <h2>Achievements</h2>
          <ul>
            <li>More than 12 Year’s Experience</li>
            <li>Well Versed in HTML and CSS</li>
            <li>Better Understanding in jQuery & JavaScript</li>
            <li>Basic knowledge React, Vue, Angular</li>
            <li>Thorough Knowledge in Designing Software.</li>
            <li>Knowledge in Search Engine Optimization </li>
          </ul>
        </div>
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <h2>Experience</h2>
          <ul>
            <li>Understands project requirements distribute work in a team.</li>
            <li>Strong experience in developing User Interfaces for Mobile/Tablet/Desktop using HTML, CSS, SCSS, JavaScript, jQuery, bootstrap.</li>
            <li>Experience in system analysis, design, workflow architecture, development, testing and maintenance of web based applications.</li>
            <li>Experience in front - end tooling workflows Node JS (NPM), Bower, Gulp.</li>
            <li>Building Templates Component base complete website.</li>
            <li>Strong understanding and experienced with all the phases of SDLC and agile development methodologies including SCRUM, involved in daily SCRUM meetings to keep track of the Ongoing project status and issues using JIRA.</li>
            <li>Excellent working knowledge and thorough exposure on cross browser / cross device compatibility, with emphasis on Responsive Design</li>
            <li>principles and Interactive Web Design from a simple transition effect to parallax scrolling, rich media presentations.</li>
            <li>Have experience in framework like Angular, NodeJS.</li>
            <li>Excellent experience in GitHub and ClearCase for source code management and for version control.</li>
            <li>Good understanding of overall web design including basic usability, accessibility, industry standards, architecture and navigation.</li>
            <li>Work with UI / UX designer to help create then implement best design practices.</li>
            <li>Extensive knowledge of CSS and JS methods for providing performant visual effects.</li>
          </ul>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <h2>Qualification</h2>
          <ul>
            <li>Diploma in Software Management from Creative Line Computers.</li>
            <li>B.COM</li>
            <li>Much of what I know is self-taught and I've constantly improved my skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Tab

