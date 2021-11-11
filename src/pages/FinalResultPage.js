import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import FigmaEmbed from "react-figma-embed";
import NextButton from "../components/NextButton";

function FinalResultPage() {
  return (
    <div>
      <Helmet title="Final Result" />
      <Section title="Final Result" id="Final Result">
        Ta-da! Finally, we have finished the project. Presenting to you,{" "}
        <b>Interactive_Prototype_FINALFINAL</b>, along with a video that
        features the 5 founders of The Seams who will guide you through the
        entire project.
      </Section>
      <Subsection title="Interactive Prototype" id="Interactive Prototype">
        <FigmaEmbed url="https://www.figma.com/proto/R4wgcmlLmVbchwbHTpGSk1/HiFi-Iteration-1?node-id=2%3A466&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A466" />
      </Subsection>
      <Subsection title="Presentation Video" id="Presentation Video">
        <iframe
          width="560"
          height="315"
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
