import logo from "../img/Logo Heart.png";
import illustration from "../img/Sewing Illustration.svg";
import NextButton from "../components/NextButton";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="home-content">
        <img src={logo} alt="logo" className="home-logo" />
        <p className="home-text">Welcome to The Seams</p>
        <p className="home-subtext">we keep things seample</p>
        <NextButton to="/problem" title="Begin Journey" />
      </div>
      <img src={illustration} alt="illustration" className="illustration" />
    </div>
  );
}

export default HomePage;
