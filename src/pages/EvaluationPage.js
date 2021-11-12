import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import NextButton from "../components/NextButton";

function EvaluationPage() {
  return (
    <div>
      <Helmet title="Evaluation" />
      <Section title="Evaluation" id="Evaluation">
        Based on the internal team reviews and user reviews, we selected
        features to include in the group prototype. Following which, we combined
        our individual prototypes into a unified high-fidelity prototype.
      </Section>
      <Subsection title="Group Prototype" id="Group Prototype">
        <iframe
          title="Group Prototype"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          className="figma-full"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWTIfCKvUuodCSYZgvhmGO9%2FUnified-HiFi%3Fnode-id%3D115%253A1847%26scaling%3Dscale-down%26page-id%3D75%253A1443%26starting-point-node-id%3D115%253A1847"
          allowfullscreen
        ></iframe>
      </Subsection>
      <Subsection title="Evaluation Method" id="Evaluation Method">
        <p>
          All usability test sessions will be structured in the same way to
          ensure consistency across different user interviews. In each session,
          at least three members of our team are required to be present. There
          will be one moderator in charge of briefing the objectives and task
          scenario of the test to the user, and probing the user if they fall
          silent or look confused. The other two team members—observers—will be
          taking notes and asking questions, when appropriate, for more
          clarification.
        </p>
        <ol>
          <li>
            <b>Introduction</b>
            <p>
              The moderator will begin by explaining that the objective of the
              usability test is to obtain user feedback on the team’s Figma
              prototype, which is still a work-in-progress. This puts the user
              at ease of being critical of the prototype without offending the
              designer. The moderator will also emphasise that it is the system
              and not the user that is being tested. This assures the user that
              any error made is not their fault, but the fault of the
              application’s design. The moderator will clearly state that they
              will only interrupt the test should there be a serious bug or
              obstacle that prevents the user from proceeding with the test
              task.
            </p>
          </li>
          <li>
            <b>Pre-Test</b>
            <p>
              At the beginning of the session, the moderator will brief the user
              on the usability test goals and task scenario. The user is
              prompted to share their screen and demonstrate how they would
              navigate our prototype to accomplish the (user) goals by thinking
              aloud. Thinking aloud allows the team to derive insights into the
              thought process behind user actions.
            </p>
          </li>
          <li>
            <b>Test</b>
            <p>
              The user will commence the test by clicking on the Figma link,
              which simulates opening the application. The starting point is at
              the homepage of the application. Our team will largely observe and
              jot down notes, prompting and clarifying with the user only when
              necessary. Minimum help will be provided to the user.
            </p>
          </li>
          <li>
            <b>Post-Test</b>
            <p>
              After the user has completed the test task, our team will conduct
              an open question-and-answer session to gather the overall feedback
              of the prototype, and ask questions that were not asked during the
              test in the interest of not interrupting the user’s flow. This
              will be done by navigating to the screen of interest and replaying
              the user action to jog their memory.
            </p>
          </li>
        </ol>
      </Subsection>
      <Subsection title="Findings and Changes" id="Findings and Changes">
        <p>
          Overall, all users found our prototype useful in tackling the pain
          points of visualising and executing upcycling projects with a
          relatively intuitive user flow. They liked how a project is broken
          down into the three phases of ‘Plan—Measure—Sew’, which aligns with
          the typical workflow of an upcycling project.
        </p>
        <p>
          However, they felt that our prototype could be refined with:
          <ol>
            <li>Clearer signposting for user action</li>
            <li>Further simplification of user flow</li>
            <li>Protection to prevent user errors</li>
          </ol>
        </p>
        <p>
          Detailed findings and severity ratings are explained in the table
          below.
        </p>
        <iframe
          title="Findings and Changes"
          src="https://drive.google.com/file/d/1f18YMA5Kk7tRljBr3hVWCus0bLGx9a0z/preview"
          className="pdf-full"
          allow="autoplay"
        ></iframe>
      </Subsection>
      <NextButton to="/final-result" title="🍊 Fruit of hard work" />
    </div>
  );
}

export default EvaluationPage;
