import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import NextButton from "../components/NextButton";
import scrunchieImage from "../img/story/Scrunchie.png";
import cropTopImage from "../img/story/Crop Top.png";
import bucketHatImage from "../img/story/Bucket Hat.png";
import persona1Image from "../img/story/Persona 1.png";
import persona2Image from "../img/story/Persona 2.png";
import { Tabs, Tab } from "react-bootstrap";
import PersonaRow from "../components/PersonaRow";
import Card from "../components/Card";
import IntervieweeInfo from "../components/IntervieweeInfo";

function ResearchPage() {
  const [key, setKey] = useState("Interviewee 1");
  return (
    <div>
      <Helmet title="Research" />
      <Section title="Research">
        <p>
          It is time for us to do a user study to understand the needs of our
          target users!
        </p>
      </Section>
      <Subsection title="Target Audience" id="Target Audience">
        <p>
          We have identified{" "}
          <b>upcyclers who are tech-savvy and have basic sewing capabilities</b>{" "}
          as our target user group.
        </p>
        <p>
          Tech-savvy upcyclers tend to explore social media platforms to get
          inspiration for upcycling projects. While they know the general
          workflow of an upcycling project, they tend to dive right into the
          execution process — following DIY tutorials — after coming up with a
          rough plan in their head. However, the tutorials often leave little
          room for customization and the upcyclers are unable to visualize and
          execute their ideal design. As a result, their final product may not
          match their expectations.
        </p>
        <p>
          By targeting upcyclers who have experience in sewing, we can focus on
          mitigating the mismatch in expectations versus reality in upcycling
          projects, instead of guiding beginner sewists into the world of
          upcycling.
        </p>
      </Subsection>
      <Subsection title="Before the Interview" id="Before the Interview">
        <p>
          One of our team members, Hui Xian, is well connected to upcycling
          hobbyists. Through her connections, we began planning interviews with
          upcyclers who have worked on upcycling projects.
        </p>
        <Card>
          As we are not experienced sewists or upcyclers, we focused on:
          <b>(1) Understanding more about how upcycling works</b>
          <b>(2) Learning about the various sewing challenges</b>
        </Card>
        <Card>
          Next, we crafted key focus questions:
          <ol>
            <li>
              What pain points do upcyclers face when trying to turn their
              designs into reality?
            </li>
            <li>
              Is visualising their final product a pain point when sewing?
            </li>
            <li>
              To what extent are upcyclers successful at turning their designs
              into reality?
            </li>
            <li>To what extent are upcyclers interested in upcycling?</li>
          </ol>
        </Card>
        <p>
          We expected to learn about the practices of upcycling and the pain
          points associated in the process. Hence, we designed the exploratory
          questions 1, 3 and 4.
        </p>
        <p>
          We had previously assumed that people upcycle clothing to reduce
          fashion waste and save the environment. Therefore, question 2 serves
          as a way for us to test the validity of the assumption.
        </p>
      </Subsection>
      <Subsection title="During the Interview" id="During the Interview">
        <p>
          We visited the interviewees' house and we observed the interviewees as
          they attempt to complete an upcycling project from scratch.
        </p>
        <p>
          A few things went well for us. We found it easy to apply the
          master-apprentice model. As we lacked sewing experience, questions
          regarding our interviewees' work came naturally to us. Furthermore,
          asking about their failed projects led to in-depth answers about the
          struggles that the interviewees had faced. They were willing to share
          their troubles and pain points, which provided us a great deal of
          insight. Interviewee 1 showed us one of her failed upcycling projects,
          and it allowed us to understand first-hand how an upcycling project
          could go wrong. This helped us understand our users and their pain
          points much better.
        </p>
        <p>
          However, the interview time constraints posed a challenge for us. As
          sewing is quite a time consuming process, it was likely that the
          interviewees may not be able to complete their project during the
          contextual inquiry. As it turned out, interviewees 2 and 3 were unable
          to finish sewing during the interview. Fortunately, we managed to see
          interviewee 1 finish her upcycling project during the contextual
          inquiry. Yet, the interview was the longest out of the 3 interviews.
        </p>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="Interviewee 1" title="Interviewee 1">
            <IntervieweeInfo
              image={scrunchieImage}
              info={[
                "Early 20s, Female",
                "Year 4 Undergraduate at NIE",
                "She has been sewing since secondary school",
                "She upcycled a sleeve of a blouse into a scrunchie from scratch. By the end of the inquiry, she managed to finish it.",
              ]}
            />
          </Tab>
          <Tab eventKey="Interviewee 2" title="Interviewee 2">
            <IntervieweeInfo
              image={cropTopImage}
              info={[
                "Early 20s, Female",
                "Year 4 Undergraduate, studying Industrial Design",
                "She has been sewing for 3-4 years",
                "She picked up one of her failed upcycling projects, which is to create a crop top, and she attempted to finish it. Though she managed to finish sewing it by the end of the inquiry, the stitching ripped when she tried it on and she discontinued the project for now.",
              ]}
            />
          </Tab>
          <Tab eventKey="Interviewee 3" title="Interviewee 3">
            <IntervieweeInfo
              image={bucketHatImage}
              info={[
                "Early 20s, Female",
                "University Graduate, studied Accounting",
                "She has been sewing for 2-3 years",
                "She upcycled an old pair of jeans into a bucket hat from scratch. As the project required more time than what the inquiry allowed, she only managed to finish the foundation of the hat.",
              ]}
            />
          </Tab>
        </Tabs>
      </Subsection>
      <Subsection title="After the Interview" id="After the Interview">
        <p>
          We reviewed each interview by watching the video recordings. For each
          interview, we drew an affinity diagram, a sequence diagram and a
          cultural diagram.
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            title="Affinity, Sequence and Cultural"
            className="figma-full"
            src="https://miro.com/app/live-embed/o9J_lzDB29E=/?moveToViewport=-10357,-4627,14697,7216"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          />
        </p>
        <p>Our analysis revealed several surprising findings:</p>
        <ul className="shocked-ul">
          <li>
            Our interviewees' motivations for upcycling do not include the
            desire to reduce fashion waste and save the environment. Instead,
            they highlighted the satisfaction derived from revamping their old
            clothes that have sentimental value, and engaging in the hobby of
            sewing. This finding made us rethink our initial framing of the
            individual’s environmental social-responsibility as the key
            motivating factor for upcycling.
          </li>
          <li>
            Our interviewees' inspirations for starting an upcycling project was
            based on the clothes they have on hand, and not necessarily based on
            the designs they view online. This finding made us think about how
            our users would begin an upcycling project with our application.
          </li>
        </ul>
      </Subsection>
      <Subsection title="Key User Tasks" id="Key User Tasks">
        <p>
          From the affinity diagram, we were able to easily identify 3 key user
          tasks.
        </p>
        <b style={{ fontSize: "1.5rem" }}>Plan</b>
        <p>
          We want to tackle the rigidity of DIY tutorials that feature specific
          designs with fixed measurements. By generating output product
          visualisations—that can be further customised—according to input
          materials, upcyclers can visualise a range of possibilities for their
          final product.
        </p>
        <br />
        <b style={{ fontSize: "1.5rem" }}>Measure</b>
        <p>
          We want to address the mismatch between the expectation and reality of
          the final product, because it is difficult to accurately visualise how
          to final product would fit themselves.
        </p>
        <br />
        <b style={{ fontSize: "1.5rem" }}>Sew</b>
        <p>
          We want to mitigate the sewing mistakes that may occur in the
          execution of sewing by offering guided instructions and good sewing
          practices for upcyclers to recover from errors.
        </p>
      </Subsection>
      <Subsection title="Personas" id="Personas">
        <p>
          After having a better understanding of our target user group, we
          created personas with different levels of sewing experience and design
          expertise. This is to cater to the range of sewing and technological
          proficiencies within our target user group of upcyclers.
        </p>
        <PersonaRow image={persona1Image}>
          Amy is proficient in sewing. Yet, she tends to dive straight into
          sewing an upcycled product after briefly visualising what she wants to
          do in her head. Hence, her final products do not always turn out as
          she envisioned.
        </PersonaRow>
        <PersonaRow image={persona2Image}>
          Olivia is proficient in design. Typically, she begins an upcycling
          project with a very good idea of what she wants to create. However,
          she finds it difficult to execute the projects, as she is not that
          experienced with sewing.
        </PersonaRow>
      </Subsection>
      <NextButton to="/ideation" title="💡 Conceptualise ideas" />
    </div>
  );
}

export default ResearchPage;
