import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import NextButton from "../components/NextButton";
import StoryImage from "../components/StoryImage";
import brainstormingMiro from "../img/story/Brainstorming Miro.png";
import ut1Storyboard from "../img/story/UT1 Storyboard.png";
import ut2Storyboard from "../img/story/UT2 Storyboard.png";
import ut3Storyboard from "../img/story/UT3 Storyboard.png";
import StoryboardRow from "../components/StoryboardRow";
import Card from "../components/Card";

function EvaluationPage() {
  return (
    <div>
      <Helmet title="Ideation" />
      <Section title="Ideation" id="Ideation">
        The user research was very fulfilling. We appreciated the interviewees
        for showing us how an actual upcycling project is done, and expressing
        the pain points they face in the process. Let's think of ideas to help
        our fellow upcyclers!
      </Section>
      <Subsection title="Brainstorming" id="Brainstorming">
        <p>
          We created a Miro board to facilitate a systematic brainstorming
          process. For each key user task, each member generated ideas. After
          two rounds of voting, we arrived with three sets of ideas
          respectively.
        </p>
        <StoryImage width="60%" image={brainstormingMiro} link="" />
      </Subsection>
      <Subsection title="Scenario and Storyboard" id="Storyboard">
        For each key user task, each member created a scenario. Interestingly,
        each member interpreted the ideas generated from the brainstorming stage
        in slightly different ways. Eventually, we consolidated the individual
        scenarios into collective scenarios. With the help of our in-house comic
        artists, we created storyboards.
        <Card>
          <b>Fun Fact:</b>
          The application's name, The Seams, makes a play on words! It takes
          inspiration from our personalized mannequin/avatar feature and the
          widely popular game, The Sims. Read on to find out more about this
          feature!
        </Card>
        <StoryboardRow
          image={ut1Storyboard}
          title="Planning and viewing possibilities"
        >
          <p>
            Amy is sitting at her workstation with a few pairs of old jeans and
            she is wondering about the possible upcycling projects that can be
            done with the jeans. She launches the app and scans a few pairs of
            her jeans using her phone. The application then shows her a feed of
            upcycling ideas that can be created using the material and
            dimensions of her jeans. For each idea, a time estimate is included
            so that she can estimate the time and effort she would have to put
            into the project. She scrolls through the list and finds a design
            that she likes: a tote bag.
          </p>
          <p>
            Amy creates a personalized mannequin so that the tote bag would
            match her body proportions. To do so, she scans a full-body video of
            herself using her camera. Amy fits the tote bag against her avatar
            and taps on ‘randomise’ to see different designs, and chooses a look
            that she likes.
          </p>
        </StoryboardRow>
        <StoryboardRow
          image={ut2Storyboard}
          title="Measuring and visualizing final product"
        >
          A tote bag with default measurements (including seam allowance) is
          fitted onto Olivia’s avatar. Olivia noticed that the straps of the
          totebag are too short for her body frame. She clicks the strap
          component and adjusts its length, but she adjusts the slider too far.
          The application notifies her that she does not have enough fabric, and
          she readjusts accordingly. She can also adjust the seam allowance if
          she wishes to. She now thinks the tote bag looks great on her avatar!
        </StoryboardRow>
        <StoryboardRow
          image={ut3Storyboard}
          title="Sewing and creating final product"
        >
          <p>
            Amy wants to create the actual product with her jeans. The app
            visualises the sewing pattern by showing the parts of her jeans that
            would need to be seam ripped and cut. Following the app's guidance,
            she is able to make accurate cuts on her jeans. After which, she
            proceeds to sew the tote bag.
          </p>
          <p>
            Whenever she encounters a problem, she can communicate with the app
            via verbal commands. The app would instantly search for
            recommendations and best practices. Amy is able to easily see the
            solutions to her problems and complete her upcycling project
            successfully.
          </p>
        </StoryboardRow>
      </Subsection>
      <NextButton to="/prototype" title="📱 Create prototypes" />
    </div>
  );
}

export default EvaluationPage;
