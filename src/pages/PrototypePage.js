import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import { Tabs, Tab } from "react-bootstrap";
import NextButton from "../components/NextButton";
import LofiRow from "../components/LofiRow";
import HifiRow from "../components/HifiRow";

function PrototypePage() {
  const [lowKey, setLowKey] = useState("Plan");
  const [highKey, setHighKey] = useState("Plan");
  return (
    <div>
      <Helmet title="Prototype" />
      <Section title="Prototype" id="Prototype">
        For each key user task, we came up with low and high fidelity
        prototypes.
      </Section>
      <Subsection title="Lofi Prototypes" id="Lofi Prototypes">
        <p>
          Each member created a lofi prototype for 2 user tasks. We conducted an
          internal team review of each prototype afterwards.
        </p>
        <Tabs
          id="controlled-tab-example"
          activeKey={lowKey}
          onSelect={(k) => setLowKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Plan" title="Plan">
            <LofiRow
              member="Jing Lin"
              link="https://drive.google.com/file/d/1DD11Ige2BGo21UjLVqFa1O2ADKzdUKZA/preview"
            >
              His prototype explores the initial setting up part of the
              application.
            </LofiRow>
            <LofiRow
              member="Chun Yong"
              link="https://drive.google.com/file/d/1gnx9OTCYhqyjy1k_cm1uSOJZBKwhkxa_/preview"
            >
              Our team liked the welcome screen, as the instructions were clear
              to first-time users on how to start visualizing the projects.
              However, we felt that the play/pause randomizer may be too
              overwhelming for the users.
            </LofiRow>
            <LofiRow
              member="Hui Xian"
              link="https://drive.google.com/file/d/1-J66KiihdqvxQkmGWskYLsa9Rqt6gggZ/preview"
            >
              Her prototype
            </LofiRow>
          </Tab>
          <Tab eventKey="Measure" title="Measure">
            <LofiRow
              member="Rui En"
              link="https://drive.google.com/file/d/1HoLf044tUz4PKEmQns_aWqT6SSawszYa/preview"
            >
              <p>Our team appreciated the following aspects:</p>
              <ul>
                <li>Simplistic and user-friendly design</li>
                <li>Easy toggling between Build mode and AR Selfie mode</li>
                <li>
                  Comprehensive list of the components of the product: this lets
                  the user xxxx
                </li>
                <li>Easy choice of a desired measurement unit</li>
              </ul>
              <p>
                Our team felt that these aspects could be modified or excluded:
              </p>
              <ul>
                <li>
                  The Move and Rotate functions may cause some components to
                  separate from the rest of the components, since the components
                  of the product would be connected together to form a fashion
                  item.
                </li>
                <li>
                  The Style function should not be included, as the fabric type
                  has already been chosen in user task 1, and the fabric’s color
                  is unable to be easily changed.
                </li>
              </ul>
            </LofiRow>
            <LofiRow
              member="Jing Lin"
              link="https://drive.google.com/file/d/1UxaHafxuOVOdGmd117ohNp66p8MS2b24/preview"
            >
              <p>Our team appreciated the following aspects:</p>
              <ul>
                <li>Simplistic and user-friendly design</li>
                <li>Easy toggling between Build mode and AR Selfie mode</li>
                <li>
                  Comprehensive list of the components of the product: this lets
                  the user xxxx
                </li>
                <li>Easy choice of a desired measurement unit</li>
              </ul>
              <p>
                Our team felt that these aspects could be modified or excluded:
              </p>
              <ul>
                <li>
                  The Move and Rotate functions may cause some components to
                  separate from the rest of the components, since the components
                  of the product would be connected together to form a fashion
                  item.
                </li>
                <li>
                  The Style function should not be included, as the fabric type
                  has already been chosen in user task 1, and the fabric’s color
                  is unable to be easily changed.
                </li>
              </ul>
            </LofiRow>
            <LofiRow
              member="Chun Yong"
              link="https://drive.google.com/file/d/1b5SlydrtTnzwejEOxlI77qq8catFBjbl/preview"
            />
            <LofiRow
              member="Stephen"
              link="https://drive.google.com/file/d/1coi6_zc0v06a8WABKzitXXpCVzSrVmd7/preview"
            />
          </Tab>
          <Tab eventKey="Sew" title="Sew">
            <LofiRow
              member="Rui En"
              link="https://drive.google.com/file/d/1qE-cM1qGJqQWhwZCQ28kG3D3OIlLpYb1/preview"
            />
            <LofiRow
              member="Hui Xian"
              link="https://drive.google.com/file/d/1816BVAp5HyK-XuaMQg0vSuXpu3lYy5Nr/preview"
            />
            <LofiRow
              member="Stephen"
              link="https://drive.google.com/file/d/1sNlRkI2wWJRRsCoG1ARcRJ3lFCmpbpxY/preview"
            />
          </Tab>
        </Tabs>
      </Subsection>
      <Subsection title="Hifi Prototypes" id="Hifi Prototypes">
        <p>
          Each member created a hifi prototype for 1 user task. We conducted an
          user review of each prototype afterwards.
        </p>
        <Tabs
          id="controlled-tab-example"
          activeKey={highKey}
          onSelect={(k) => setHighKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Plan" title="Plan">
            <HifiRow
              member="Chun Yong"
              link="https://www.figma.com/proto/faWqkPxzQ1xN87nok1jOtD/A0199902R_Lim-ChunYongUserTask1HiFi?node-id=2%3A348&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A348&show-proto-sidebar=1"
            />
            <HifiRow
              member="Jing Lin"
              link="https://www.figma.com/proto/cUd8Cb0h3oPEJk38B2NR4Q/A0201495J_ShiJingLin_UserTask1HiFi?node-id=20%3A302&scaling=min-zoom&page-id=20%3A302&starting-point-node-id=20%3A333"
            />
          </Tab>
          <Tab eventKey="Measure" title="Measure">
            <HifiRow
              member="Rui En"
              link="https://www.figma.com/proto/DAheTKMSE7M2wPrMcCT3et/HiFi-Prototypes-(G2)?node-id=169%3A1319&scaling=scale-down&page-id=16%3A3&starting-point-node-id=169%3A1319&show-proto-sidebar=1"
            />
          </Tab>
          <Tab eventKey="Sew" title="Sew">
            <HifiRow
              member="Stephen"
              link="https://www.figma.com/proto/gU26pVQiKI25gs9StKQYOQ/A0196608R_TanHinKhaiStephen_UserTask3-HiFi?node-id=36%3A1085&scaling=min-zoom&page-id=36%3A1085&starting-point-node-id=39%3A1620"
            />
            <HifiRow
              member="Hui Xian"
              link="https://www.figma.com/proto/NJ0RibnPjidmeaY0FqBrrp/A0190635A_OngHuiXian_UserTask3-HiFi?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A140"
            />
          </Tab>
        </Tabs>
      </Subsection>
      <NextButton to="/evaluation" title="🧵 Final round of user review" />
    </div>
  );
}

export default PrototypePage;
