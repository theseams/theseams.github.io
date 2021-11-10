import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ProblemPage from "./pages/ProblemPage";
import ResearchPage from "./pages/ResearchPage";
import IdeationPage from "./pages/IdeationPage";
import PrototypePage from "./pages/PrototypePage";
import EvaluationPage from "./pages/EvaluationPage";
import FinalResultPage from "./pages/FinalResultPage";
import OurTeamPage from "./pages/OurTeamPage";
import { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  const closeNav = () => {
    setNavToggle(false);
  };

  return (
    <div className="App">
      <Helmet defaultTitle="The Seams">
        <meta
          name="description"
          content="The Seams aims to keep the upcycling process seample."
        />
        <meta name="keywords" content="Seams, upcycling" />
      </Helmet>
      <div
        className={`sidebar ${navToggle ? "nav-toggle" : ""}`}
        onClick={closeNav}
      >
        <NavBar />
      </div>

      <div className="main-content">
        <div className="content">
          <div className="nav-btn" onClick={toggleNav}>
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
          </div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/problem">
              <ProblemPage />
            </Route>
            <Route exact path="/research">
              <ResearchPage />
            </Route>
            <Route exact path="/ideation">
              <IdeationPage />
            </Route>
            <Route exact path="/prototype">
              <PrototypePage />
            </Route>
            <Route exact path="/evaluation">
              <EvaluationPage />
            </Route>
            <Route exact path="/final-result">
              <FinalResultPage />
            </Route>
            <Route exact path="/our-team">
              <OurTeamPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
