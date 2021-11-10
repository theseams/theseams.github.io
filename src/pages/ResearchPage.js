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
          Our target user group is tech-savvy upcyclers. They like to explore
          social media platforms to get inspiration for upcycling projects.
          While they know the general workflow of an upcycling project, they
          tend to dive right into the execution process — following DIY
          tutorials — after coming up with a rough plan in their head. However,
          the tutorials often leave little room for customization and the
          upcyclers are unable to visualize and execute their ideal design. As a
          result, their final product may not match their expectations.
        </p>
        <p>
          Our team also narrowed down the target user group to upcyclers who
          have basic sewing capabilities. This is because we want to focus on
          mitigating the mismatch in expectations versus reality in upcycling
          projects, and not guiding beginner sewists into the world of
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
          hobbyists who have shared their experiences with upcycling projects.
          Through her connections, we began planning interviews with experienced
          upcyclers who have worked on many upcycling projects.
        </p>
        <p>
          As we are not experienced sewists or upcyclers, we defined the focus
          of our contextual inquiry as such: To understand more about how
          upcycling works and learn about the challenges that they face while
          sewing. Next, we crafted four key focus questions:
        </p>
        <ol>
          <li>
            What pain points do DIY-ers face when trying to turn their designs
            into reality/modifying their clothes?
          </li>
          <li>Is visualising their final product a pain point when sewing?</li>
          <li>
            To what extent are DIY-ers successful at turning their designs into
            reality?
          </li>
          <li>To what extent are DIY-ers interested in upcycling?</li>
        </ol>
        <p>
          Questions 1, 3 and 4 are exploratory questions designed for us to
          learn more about the practices of sewing and upcycling and the pain
          points associated with them, whereas question 2 aims to validate our
          prior knowledge and assumptions.
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
              </div>
            </div>
          </Tab>
        </Tabs>
        <br />
        <p>
          A few things went well for us. We found that it was easy to ask
          questions about what our interviewees were doing as we observed them
          work. We would not have thought of these questions if we were to
          conduct an interview, as we lacked sewing experience. Furthermore,
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
        <br />
        <iframe
          title="Miro Whiteboard"
          width="768"
          height="432"
          src="https://miro.com/app/live-embed/o9J_lzDB29E=/?moveToViewport=-10357,-4627,14697,7216"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
        <br />
        <br />
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
        <p>Lastly, we were able to identify 3 key user tasks:</p>
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
        <StoryImage width="70%" image={persona1Image} />
        <StoryImage width="70%" image={persona2Image} />
      </Subsection>
      <NextButton to="/prototype" title="Prototype" />
    </div>
  );
}

export default ResearchPage;
