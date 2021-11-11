import logo from "../img/Logo Full.png";
import { NavLink } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import { Accordion } from "react-accessible-accordion";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <NavLink to="/" exact>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <Accordion allowZeroExpanded={true} allowMultipleExpanded={false}>
          <NavBarItem
            header="Problem"
            to="/problem"
            subheaders={["How we started", "Why we chose this"]}
          />
          <NavBarItem
            header="Research"
            to="/research"
            subheaders={[
              "Target Audience",
              "Before the Interview",
              "During the Interview",
              "After the Interview",
              "Key User Tasks",
              "Personas",
            ]}
          />
          <NavBarItem
            header="Ideation"
            to="/ideation"
            subheaders={["Brainstorming", "Storyboard"]}
          />
          <NavBarItem
            header="Prototype"
            to="/prototype"
            subheaders={["Lofi Prototypes", "Hifi Prototypes"]}
          />
          <NavBarItem
            header="Evaluation"
            to="/evaluation"
            subheaders={[
              "Group Prototype",
              "Evaluation Method",
              "Findings and Changes",
            ]}
          />
          <NavBarItem
            header="Final Result"
            to="/final-result"
            subheaders={[
              "Interactive Prototype",
              "Effectiveness",
              "Presentation Video",
              "Future Work",
            ]}
          />
          <NavBarItem
            header="Our Team"
            to="/our-team"
            subheaders={[
              "Rui En",
              "Jing Lin",
              "Stephen",
              "Chun Yong",
              "Hui Xian",
            ]}
          />
        </Accordion>

        <footer className="footer">
          <p>@ The Seams, 2021</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
