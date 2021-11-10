import React from "react";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import RuiEnImg from "../img/team/Rui En.jpg";
import HuiXianImg from "../img/team/Hui Xian.jpg";
import StephenImg from "../img/team/Stephen.jpg";
import AquariusImg from "../img/team/Aquarius.png";
import ChunYongImg from "../img/team/Chun Yong.png";

function OurTeamPage() {
  return (
    <div>
      <Helmet title="Our Team" />
      <Section title="Our Team">
        We are friends who wanted to learn more about designs and user
        interaction.
      </Section>
      <Subsection title="Neo Rui En Maybelline" id="Rui En">
        <div style={{ display: "flex" }}>
          <img src={RuiEnImg} className="my-picture" />
          <p>Seamplicity is key for good design</p>
        </div>
      </Subsection>
      <Subsection title="Shi Jing Lin" id="Jing Lin">
        <div style={{ display: "flex" }}>
          <img src={AquariusImg} className="my-picture" />
          <p>
            Why did the chickens cross the road? To get away from their sewist.
          </p>
        </div>
      </Subsection>
      <Subsection title="Stephen Tan Hin Khai" id="Stephen">
        <div style={{ display: "flex" }}>
          <img src={StephenImg} className="my-picture" />
          <p>Why did the sewist cross the road? To find his two chickens.</p>
        </div>
      </Subsection>
      <Subsection title="Lim Chun Yong" id="Chun Yong">
        <div style={{ display: "flex" }}>
          <img src={ChunYongImg} className="my-picture" />
          <p>Tuesday 5pm next meeting</p>
        </div>
      </Subsection>
      <Subsection title="Ong Hui Xian" id="Hui Xian">
        <div style={{ display: "flex" }}>
          <img src={HuiXianImg} className="my-picture" />
          <p>Powered by cakes and caffeine ☕️</p>
        </div>
      </Subsection>
    </div>
  );
}

export default OurTeamPage;
