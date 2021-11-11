import React from "react";
import { Helmet } from "react-helmet";
import NextButton from "../components/NextButton";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import StoryImage from "../components/StoryImage";
import youtubeTutorialImg from "../img/story/Youtube Tutorial.png";
import beanieFailImage from "../img/story/Beanie Fail.png";
import problemPitchImg from "../img/story/Problem Pitch.png";
import ideasDocumentImg from "../img/story/Ideas Document.png";

function ProblemPage() {
  return (
    <div>
      <Helmet title="Problem" />
      <Section title="Problem">
        <p>
          One fine day, an upcycler is casually scrolling through Youtube. She
          comes across a tutorial that guides sewists to sew a totebag using a
          pair of jeans. She likes how the final product looks, and she is
          excited to try it out!
        </p>
        <StoryImage
          width="60%"
          image={youtubeTutorialImg}
          link="https://www.youtube.com/watch?v=bxiCj9u0WQE"
        />
        <p>
          However, she is hesitant to actually start sewing, because her final
          product does not always match her desired design. This is the{" "}
          <b>Expectations vs Reality</b> problem. She has failed several
          upcycling projects in the past as she faced difficulties when
          following through with Do-It-Yourself (DIY) tutorials. Sometimes, when
          she thought of deviating slightly from the tutorial and adding in her
          personal touch of design, she found it hard to imagine how the final
          product would look like in the first place.
        </p>
        <StoryImage
          width="45%"
          image={beanieFailImage}
          link="https://www.realsimple.com/shop/womens-fashion/customizable-jeans-levis-sc281474979946582.html"
        />
        <p>
          These challenges make it difficult for upcyclers to experiment with
          their clothes. While it is encouraging to see upcyclers partaking in
          the ethical fashion movement, it is regretful for those who eventually
          gave up on their projects due to sewing tribulations.
        </p>
      </Section>
      <Subsection title="How we started" id="How we started">
        <p>
          So, what kickstarted our project? In lecture 2, one of our team
          members, Rui En, explained the issue of increasing fashion waste
          amidst the culture of consumerism during her problem pitch. As a young
          shopper herself, she approached the topic of upcycling from a consumer
          perspective. Her proposed idea is that consumers could try out
          upcycling suggestions using Augmented Reality, and have their old
          clothes transformed to be in trend and in the right fit by tailors.
        </p>
        <StoryImage width="50%" image={problemPitchImg} link="" />
        <p>
          Our team concurred with the problem of fashion wastage. After careful
          consideration, we decided to approach the problem from an upcycler's
          perspective instead of a consumer's perspective. This was an
          interesting turn of events, as none of us sew as a hobby. As a team,
          we felt that the challenges faced by upcyclers are rather
          underrespresented in the fashion industry. It would be more compelling
          to address the problems faced by upcyclers, rather than consumers,
          where there are a lot of existing solutions in place.
        </p>
      </Subsection>
      <Subsection title="Why did we choose this problem" id="Why we chose this">
        <p>
          After the problem pitch lecture, our team performed two rounds of
          problem evaluation. The first round was to eliminate the problems that
          did not meet the essential requirements of the project. The problem
          statements that survived this round are unique and they have the
          potential to generate innovative prototype-able solutions. The second
          round was to choose the problems that our team have the most interest
          in. We eventually selected the fashion waste issue as we were able to
          relate to it.
        </p>
        <StoryImage width="60%" image={ideasDocumentImg} link="" />
      </Subsection>
      <NextButton to="/research" title="🧵 Interview upcyclers" />
    </div>
  );
}

export default ProblemPage;
