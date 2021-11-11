import logo from "../img/Logo Heart.png";
import illustration from "../img/Sewing Illustration.svg";
import NextButton from "../components/NextButton";
import { Animated } from "react-animated-css";

function HomePage() {
  return (
    <div className="HomePage">
      <Animated animationIn="fadeInLeft" isVisible={true}>
        <div className="home-content">
          <img src={logo} alt="logo" className="home-logo" />
          <p className="home-text">Welcome to The Seams</p>
          <p className="home-subtext">we keep things seample</p>
          <div style={{ marginTop: "-2rem" }}>
            <NextButton to="/problem" title="Begin Journey" />
          </div>
        </div>
      </Animated>

      <img src={illustration} alt="illustration" className="illustration" />
    </div>
  );
}

export default HomePage;
