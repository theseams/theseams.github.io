import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import NextButton from "../components/NextButton";
import StoryImage from "../components/StoryImage";
import beanieFailImage from "../img/story/Beanie Fail.png";
import scrunchieImage from "../img/story/Scrunchie.png";
import cropTopImage from "../img/story/Crop Top.png";
import bucketHatImage from "../img/story/Bucket Hat.png";
import persona1Image from "../img/story/Persona 1.png";
import persona2Image from "../img/story/Persona 2.png";
import { Tabs, Tab } from "react-bootstrap";
import PersonaRow from "../components/PersonaRow";
import Card from "../components/Card";

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
          <b>upcyclers who are tech-savvy and familiar with sewing</b> as our
          target user group.
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
        <StoryImage
          width="35%"
          image={beanieFailImage}
          link="http://adambstingus.weebly.com/home/10-diy-fails-that-are-so-terrible-its-impossible-not-to-laugh-at"
        />
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
          <b>(2) Learning about the sewing challenges</b>
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
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Interviewee 1" title="Interviewee 1">
            <div style={{ display: "flex" }}>
              <img
                style={{ float: "left", marginRight: "2rem" }}
                src={scrunchieImage}
                alt="scrunchie"
                width="150px"
              />
              <div style={{ float: "right" }}>
                <p>Age: Early 20s</p>
                <p>Gender: Female</p>
                <p>Occupation: Year 4 Undergraduate at NIE</p>
                <p>
                  Sewing Experience: She has been sewing since secondary school
                </p>
                <p>
                  Upcycling task: She upcycled a sleeve of a blouse into a
                  scrunchie from scratch. By the end of the inquiry, she managed
                  to finish it.
                </p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Interviewee 2" title="Interviewee 2">
            <div style={{ display: "flex" }}>
              <img
                style={{ float: "left", marginRight: "2rem" }}
                src={cropTopImage}
                alt="scrunchie"
                width="150px"
              />
              <div style={{ float: "right" }}>
                <p>Age: Early 20s</p>
                <p>Gender: Female</p>
                <p>
                  Occupation: Year 4 Undergraduate, studying Industrial Design
                </p>
                <p>Sewing Experience: 3-4 years</p>
                <p>
                  Upcycling task: She picked up one of her failed upcycling
                  projects, which is to create a crop top, and she attempted to
                  finish it. Though she managed to finish sewing it by the end
                  of the inquiry, the stitching ripped when she tried it on and
                  she discontinued the project for now.
                </p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Interviewee 3" title="Interviewee 3">
            <div style={{ display: "flex" }}>
              <img
                style={{ float: "left", marginRight: "2rem" }}
                src={bucketHatImage}
                alt="scrunchie"
                width="150px"
              />
              <div style={{ float: "right" }}>
                <p>Age: Early 20s</p>
                <p>Gender: Female</p>
                <p>Occupation: University Graduate, studied Accounting</p>
                <p>Sewing Experience: 2-3 years</p>
                <p>
                  Upcycling task: She upcycled an old pair of jeans into a
                  bucket hat from scratch. As the project required more time
                  than what the inquiry allowed, she only managed to finish the
                  foundation of the hat.
                </p>
              </div>
            </div>
          </Tab>
        </Tabs>
        <br />
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
      </Subsection>
      <Subsection title="After the Interview" id="After the Interview">
        <p>
          We reviewed each interview by watching the video recordings. For each
          interview, we drew an affinity diagram, a sequence diagram and a
          cultural diagram.
        </p>
        <p>
          <iframe
            title="Miro Whiteboard"
            width="768"
            height="432"
            src="https://miro.com/app/live-embed/o9J_lzDB29E=/?moveToViewport=-10357,-4627,14697,7216"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </p>
        <p>Our analysis revealed several surprising findings:</p>
        <ol>
          <li>
            Some of the motivations for upcycling highlighted by our
            interviewees include the satisfaction derived from revamping their
            old clothes that have sentimental value, and engaging in the hobby
            of sewing. This finding made us rethink our initial framing of the
            individual’s environmental social-responsibility as the key
            motivating factor for upcycling.
          </li>
          <li>
            One unexpected discovery we made was that unit conversion was an
            issue as well, as most online tutorials used inches rather than
            centimeters, leading to the inconvenience of having to convert
            between units of measurement. We will have to keep this in mind
            during our design phase.
          </li>
          <li>
            The biggest takeaway we had was that the most difficult struggle
            echoed by all interviewees was that they are unable to smoothly
            execute the steps required to reach the final design. This caused
            the end result to be different from what they envisioned it to be.
            Surprisingly, different interviewees also have conflicting opinions
            on what would be an ideal solution. While interviewee 3 prefers
            having a 3D visualisation software for prototyping the end product,
            it was not an ideal solution for interviewee 1, who prefers
            visualisations through paper prototypes.
          </li>
        </ol>
      </Subsection>
      <Subsection title="Key User Tasks" id="Key User Tasks">
        <p>
          Lastly, we were able to identify 3 key user tasks: [todo: explain why
          we chose them]
        </p>
        <ol>
          <li>
            <b>Plan: </b> View the possible upcycling projects that can be done
            with the kind of clothes they want to upcycle.
          </li>
          <li>
            <b>Measure: </b> Visualise how the final product would look like on
            himself/herself, and customise the size of the product as necessary.
            stage.
          </li>
          <li>
            <b>Sew: </b> Begin sewing the product, solving any issues that crop
            up along the way.
          </li>
        </ol>
      </Subsection>
      <Subsection title="Personas" id="Personas">
        <p>
          Based on the findings, we understood our target user group better and
          we created two personas.
        </p>
        <PersonaRow image={persona1Image}>
          Our first persona is Amy. She is proficient in sewing, and she tends
          to dive straight into sewing an upcycled product after briefly
          visualising what she wants to do in her head. Hence, her final
          products do not always turn out as she envisioned.
        </PersonaRow>
        <PersonaRow image={persona2Image}>
          The other persona, Olivia represents the demographic of users who are
          more inclined towards design as compared to sewing. We chose this
          persona because we found that some interviewees had greater trouble
          with the execution segment of their projects, as they were less
          experienced with sewing than other interviewees. We also found that
          some interviewees already had a very good idea of what they wanted to
          create before starting the upcycling process. Therefore, we strived to
          ensure that our app would not hinder their speed in the design aspect.
        </PersonaRow>
      </Subsection>
      <NextButton to="/ideation" title="💡 Conceptualise ideas" />
    </div>
  );
}

export default ResearchPage;
