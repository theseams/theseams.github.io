import logo from "../img/Logo Heart.png";
import { NavLink } from "react-router-dom";
import illustration from "../img/Sewing Illustration.svg";

function HomePage() {
  return (
    <div>
      <div className="HomePage">
        <img src={logo} alt="logo" className="logo" />
        <p className="home-text">Welcome to The Seams</p>
        <p className="home-subtext">we keep things seample.</p>
        <NavLink to="/problem" exact activeClassName="active">
          <button className="my-button">Begin Journey</button>
        </NavLink>
        <img src={illustration} alt="illustration" className="illustration" />
      </div>
    </div>
  );
}

export default HomePage;
