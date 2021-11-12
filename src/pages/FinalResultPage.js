import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import NextButton from "../components/NextButton";

function FinalResultPage() {
  return (
    <div>
      <Helmet title="Final Result" />
      <Section title="Final Result" id="Final Result">
        Ta-da! Finally, we have finished the project. Presenting to you,{" "}
        <b>The Seams</b>, along with a video that features the 5 founders of The
        Seams who will guide you through the entire project.
      </Section>
      <Subsection title="Interactive Prototype" id="Interactive Prototype">
        <iframe
          title="Group Prototype"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          className="figma-full"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FR4wgcmlLmVbchwbHTpGSk1%2FThe-Seams%3Fnode-id%3D2%253A466%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A466%26show-proto-sidebar%3D1"
          allowfullscreen
        ></iframe>
      </Subsection>
      <Subsection title="Effectiveness" id="Effectiveness">
        <p>
          Through multiple iterations of rigorous evaluation, our team has
          refined our design solution to have an intuitive and efficient user
          flow by (1) simplifying user flow, (2) clear signposting for user
          action, and (3) minimising errors.
        </p>
        <p>
          Our users have validated the effectiveness of our design solution in
          addressing the core design problem that our team has identified.
          During our user evaluation, our target users mentioned that they find
          our prototype useful in tackling the pain points of visualising and
          executing upcycling projects. Validation from our users is the best
          indicator of our design’s success.
        </p>
      </Subsection>
      <Subsection title="Presentation Video" id="Presentation Video">
        <iframe
          className="figma-full"
          src="https://www.youtube.com/embed/jxS1D28vmUw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Subsection>
      <Subsection title="Future Work" id="Future Work">
        <p>
          Larger scale upcycling projects may span longer time frames—from weeks
          to months. Our team did not manage to explore more complex projects as
          we did not have the luxury of time to conduct extensive research and
          follow our users through the stages of a large-scale upcycling
          project. If we had more time to conduct user research, we would like
          to observe upcycling projects that are more complex, as it may affect
          the level of customisation and guidance (of the instructions) in our
          designed workflow.
        </p>
        <p>
          Our team would also like to develop a decision tree for Sew Aunty’s
          voice interaction, as we did not have sufficient time to research and
          design a no-UI wireframe for the voice interface. We need to weigh in
          careful consideration to provide the optimum hands-off experience for
          our users.
        </p>
      </Subsection>
      <NextButton to="/our-team" title="😄 Our Team" />
    </div>
  );
}

export default FinalResultPage;
