import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import FigmaEmbed from "react-figma-embed";
import NextButton from "../components/NextButton";

function EvaluationPage() {
  return (
    <div>
      <Helmet title="Evaluation" />
      <Section title="Evaluation" id="Evaluation"></Section>
      <Subsection title="Group Prototype" id="Group Prototype">
        <FigmaEmbed url="https://www.figma.com/proto/WTIfCKvUuodCSYZgvhmGO9/Unified-HiFi?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=24%3A106&show-proto-sidebar=1" />
      </Subsection>
      <Subsection title="User Evaluation" id="User Evaluation"></Subsection>
      <NextButton to="/final-result" title="Final Result" />
    </div>
  );
}

export default EvaluationPage;
