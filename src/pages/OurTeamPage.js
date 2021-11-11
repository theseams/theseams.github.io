import React from "react";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import RuiEnImg from "../img/team/Rui En.jpg";
import HuiXianImg from "../img/team/Hui Xian.jpg";
import StephenImg from "../img/team/Stephen.jpg";
import AquariusImg from "../img/team/Aquarius.png";
import ChunYongImg from "../img/team/Chun Yong.png";
import Card from "../components/Card";
import MemberIntro from "../components/MemberIntro";

function OurTeamPage() {
  return (
    <div>
      <Helmet title="Our Team" />
      <Section title="Our Team">
        <p>
          We are friends who wanted to learn more about designs and user
          interaction. Together, we would like to thank you Professor Zhao and
          the CS3240 Teaching Team for the lessons and in-class activities which
          have taught us the design processes, enabling us to see this project
          through completion. We would also like to thank our Teaching
          Assistant, Laurent for your constant guidance and in making time for
          consultations, queries and providing valuable feedback on our work.
          With Love, Team 14.
        </p>
        <Card>
          <b>Fun Fact:</b>
          Fun fact: Did you know that The Seams was almost named as Sewergram,
          SewyAunty, and even SewStripper? 🙈
        </Card>
      </Section>
      <Subsection title="Neo Rui En Maybelline" id="Rui En">
        <MemberIntro
          image={RuiEnImg}
          quote="Seamplicity is key for good design"
        />
      </Subsection>
      <Subsection title="Shi Jing Lin" id="Jing Lin">
        <MemberIntro
          image={AquariusImg}
          quote="Why did the chickens cross the road? To get away from their sewist."
        />
      </Subsection>
      <Subsection title="Stephen Tan Hin Khai" id="Stephen">
        <MemberIntro
          img={StephenImg}
          quote="Why did the sewist cross the road? To find his two chickens."
        />
      </Subsection>
      <Subsection title="Lim Chun Yong" id="Chun Yong">
        <MemberIntro img={ChunYongImg} quote="Tuesday 5pm next meeting" />
      </Subsection>
      <Subsection title="Ong Hui Xian" id="Hui Xian">
        <MemberIntro
          img={HuiXianImg}
          quote="Powered by cakes and caffeine ☕️"
        />
      </Subsection>
    </div>
  );
}

export default OurTeamPage;
