import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import Subsection from "../components/Subsection";
import { Tabs, Tab } from "react-bootstrap";
import NextButton from "../components/NextButton";
import LofiRow from "../components/LofiRow";
import HifiRow from "../components/HifiRow";
import TaskDescription from "../components/TaskDescription";

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
          Using Balsamiq, each member created a low fidelity prototype for 2
          user tasks. After which, our team conducted an internal team review of
          each prototype.
        </p>
        <Tabs
          id="controlled-tab-example"
          activeKey={lowKey}
          onSelect={(k) => setLowKey(k)}
        >
          <Tab eventKey="Plan" title="Plan">
            <TaskDescription task="Plan" />
            <LofiRow
              member="Jing Lin"
              link="https://drive.google.com/file/d/1DD11Ige2BGo21UjLVqFa1O2ADKzdUKZA/preview"
              pros={[
                "Different parts of the application are tied together nicely using the navigation bar, making it easy for users to navigate to the different parts of the application.",
                "There are no major roadblocks on the user journey, and the information the user needs at each stage is displayed well.",
              ]}
              cons={[
                "Users may not intuitively go to the avatar and materials page first. There must be a workflow to allow users to add an avatar and materials when starting a project, without having to go to their respective pages.",
                "Users will have to switch to their camera app to take photos before being able to upload them onto the application, causing them inconvenience.",
              ]}
            />
            <LofiRow
              member="Chun Yong"
              link="https://drive.google.com/file/d/1gnx9OTCYhqyjy1k_cm1uSOJZBKwhkxa_/preview"
              pros={[
                "The welcome screen gave clear instructions to first time users (H10 principle help and documentation)",
                "Users can take a photo of the outfit to be upcycled and themselves directly through the built-in camera in the app, increasing convenience.",
              ]}
              cons={[
                "The play/pause to quickly speed through a large variety of possible designs may be too overwhelming for users.",
                "Only one avatar can be created, limiting the use of the application to only for the users themselves.",
              ]}
            />
            <LofiRow
              member="Hui Xian"
              link="https://drive.google.com/file/d/1-J66KiihdqvxQkmGWskYLsa9Rqt6gggZ/preview"
              pros={[
                "Specific interactions with the application are detailed",
                "There is quick and easy toggling between ‘product’ and ‘avatar’ views",
              ]}
              cons={[
                "Onboarding of the user was not considered",
                "Undo, redo, and shuffle buttons were unclear",
              ]}
            />
          </Tab>
          <Tab eventKey="Measure" title="Measure">
            <TaskDescription task="Measure" />
            <LofiRow
              member="Rui En"
              link="https://drive.google.com/file/d/1HoLf044tUz4PKEmQns_aWqT6SSawszYa/preview"
              pros={[
                "The design is simplistic, making it user-friendly.",
                "The list of the product's components (e.g. bag and straps) is comprehensive, and it increases clarity for the user.",
              ]}
              cons={[
                "The Move and Rotate functions may cause some components to separate from the rest of the components, since the components of the product would be connected together to form a fashion item.",
                "The Style function should not be included, as the fabric type has already been chosen in user task 1, and the fabric’s color is unable to be easily changed.",
              ]}
            />
            <LofiRow
              member="Jing Lin"
              link="https://drive.google.com/file/d/1UxaHafxuOVOdGmd117ohNp66p8MS2b24/preview"
              pros={[
                "Colouring a portion of the slider red to denote the sizes where the user has insufficient fabric is an elegant way to convey this information. It is intuitive for the user without generating clutter.",
                "Users are presented with a simple and easy to understand way to adjust the sizes and fabric of each component to their liking.",
              ]}
              cons={[
                "Customisation is too simple and users are not able to customise in finer details. For example, users cannot adjust the thickness of the strap without also increasing its length.",
                "Moving the user back to the projects page after confirming their project means they have to click on the project again to continue, which is inconvenient for the user.",
              ]}
            />
            <LofiRow
              member="Chun Yong"
              link="https://drive.google.com/file/d/1b5SlydrtTnzwejEOxlI77qq8catFBjbl/preview"
              pros={[
                "The “adjust” button is useful in case the user wants to adjust the measurements again even after finalizing their adjustments (H3 user control and freedom, by implementing undos).",
              ]}
              cons={[
                "With only zoom and no rotation, it may be difficult to visualize the product on their avatars.",
              ]}
            />
            <LofiRow
              member="Stephen"
              link="https://drive.google.com/file/d/1coi6_zc0v06a8WABKzitXXpCVzSrVmd7/preview"
              pros={[
                "The design was very detailed and comprehensive in the features available and customizability with the many parameters available for customisation.",
                "The navigation between different components in a compiled screen was found to be useful, to reduce the overhead of navigating through components.",
              ]}
              cons={[
                "Use of the Ipad as a platform was thought to be a barrier for entry for new users and not provide enough benefits to the interface look and feel.",
                "The interface was found to be too complicated and challenging to use for new sewists, and while detailed, was not very intuitive to use.",
              ]}
            />
          </Tab>
          <Tab eventKey="Sew" title="Sew">
            <TaskDescription task="Sew" />
            <LofiRow
              member="Rui En"
              link="https://drive.google.com/file/d/1qE-cM1qGJqQWhwZCQ28kG3D3OIlLpYb1/preview"
              pros={[
                "The color coded and annotated steps are very helpful.",
                "The chatbot feature is seamlessly integrated into the application, instead of showing hyperlinks that would lead the user away from the application.",
              ]}
              cons={[
                "Apart from voice assistance, the user should also be able to type their question as well.",
                "It would be more user-friendly if the user can access the history of chatbot help requests.",
              ]}
            />
            <LofiRow
              member="Hui Xian"
              link="https://drive.google.com/file/d/1816BVAp5HyK-XuaMQg0vSuXpu3lYy5Nr/preview"
              pros={[
                "Voice interaction supporting a hands-off experience",
                "Highlighted the section of the tote bag (output product) that corresponds to the section of the jeans (input material).",
              ]}
              cons={[
                "Overall user flow from one screen to the next is unclear",
                "Suggestions direct users out of the application (to Safari), which is not ideal.",
              ]}
            />
            <LofiRow
              member="Stephen"
              link="https://drive.google.com/file/d/1sNlRkI2wWJRRsCoG1ARcRJ3lFCmpbpxY/preview"
              pros={[
                "The idea of putting the tracing on top of the actual Clothing to be cut out was well liked, and provided clear instructions to the users.",
                "Laying out the different steps in the process, such as cutting fabric, stitching and assembly into different parts of user flow was also thought to be useful and user-friendly.",
              ]}
              cons={[
                "The forum idea of getting users who encountered similar problems in the past to post up help requests, was thought to be harder to navigate and less intuitive than a voice chat bot recommending content and advice instead.",
                "Adding rationale, while useful for absolute beginner sewers, was thought to make the application too “tutorial-like”. This went against the persona who knew some rudimentary sewing, needing more guidance on visualisation and sequence of steps.",
              ]}
            />
          </Tab>
        </Tabs>
      </Subsection>
      <Subsection title="Hifi Prototypes" id="Hifi Prototypes">
        <p>
          Using Figma, each member created a high fidelity prototype for 1 user
          task. After which, we conducted an user review of each prototype.
        </p>
        <Tabs
          id="controlled-tab-example"
          activeKey={highKey}
          onSelect={(k) => setHighKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Plan" title="Plan">
            <TaskDescription task="Plan" />
            <HifiRow
              member="Jing Lin"
              link="https://www.figma.com/proto/cUd8Cb0h3oPEJk38B2NR4Q/A0201495J_ShiJingLin_UserTask1HiFi?node-id=20%3A302&scaling=min-zoom&page-id=20%3A302&starting-point-node-id=20%3A333"
              pros={[
                "It was easy to navigate between the different screens to add their materials and avatar before trying to start a new project. Each screen was clear in its function and how to use it.",
                "The card-based style of information display was compact, consistent, and informational.",
              ]}
              cons={[
                "Users may not want to use all their materials for a particular project, but they are currently unable to select specific materials to include or exclude.",
                "The randomise feature is not very useful because it only shows one possible outcome at a time. Users wanted to be able to browse multiple combinations at once to go through possibilities at a quicker pace.",
              ]}
            />
            <HifiRow
              member="Chun Yong"
              link="https://www.figma.com/proto/faWqkPxzQ1xN87nok1jOtD/A0199902R_Lim-ChunYongUserTask1HiFi?node-id=2%3A348&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A348&show-proto-sidebar=1"
              pros={[
                "The process of tracking ongoing projects serves as a motivator for them to complete their undone projects.",
                "The process of creating an avatar was simple and intuitive, and is useful to help visualization.",
              ]}
              cons={[
                "The e-commerce style of upcycling project suggestions was perceived to be overwhelming.",
                "Users found the showing of whether materials sufficiently useful but felt more could be done by indicating how much of the fabric is used for the project and how much will be left over after the project is done.",
              ]}
            />
          </Tab>
          <Tab eventKey="Measure" title="Measure">
            <TaskDescription task="Measure" />
            <HifiRow
              member="Rui En"
              link="https://www.figma.com/proto/DAheTKMSE7M2wPrMcCT3et/HiFi-Prototypes-(G2)?node-id=169%3A1319&scaling=scale-down&page-id=16%3A3&starting-point-node-id=169%3A1319&show-proto-sidebar=1"
              pros={[
                "The user liked the simplicity of the design, as she was able to understand how to use the features, even if I did not explain the user flow to her.",
                "The user found it useful to hide components and focus on specific component(s).",
              ]}
              cons={[
                "The user felt that the AR Selfie mode was redundant as Avatar Mode is more interactive and useful for the user.",
              ]}
            />
          </Tab>
          <Tab eventKey="Sew" title="Sew">
            <TaskDescription task="Sew" />
            <HifiRow
              member="Stephen"
              link="https://www.figma.com/proto/gU26pVQiKI25gs9StKQYOQ/A0196608R_TanHinKhaiStephen_UserTask3-HiFi?node-id=36%3A1085&scaling=min-zoom&page-id=36%3A1085&starting-point-node-id=39%3A1620"
              pros={[
                "A step by step sequence for the sewist to follow along to, with clear instructions and visual tracings for each step allowed target users to focus on sewing rather than on what the next step would be like.",
                "The 2D Tracing and component assembly portion was initially thought to be unintuitive. However the usage was validated by users that mentioned that sewists with basic understanding would be able to view and understand it well.",
              ]}
              cons={[
                "Instructions were suggested to be formatted in a more user-friendly manner rather than via voice only, through displaying each instruction in a sequence.",
              ]}
            />
            <HifiRow
              member="Hui Xian"
              link="https://www.figma.com/proto/NJ0RibnPjidmeaY0FqBrrp/A0190635A_OngHuiXian_UserTask3-HiFi?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A140"
              pros={[
                "Use of coloured annotations (red for cutting, blue for sewing, yellow for pins).",
                "Autosave users’ progress and allow them to pause their project by tapping on ‘Exit’, which brings them to the home screen.",
              ]}
              cons={[
                "In the first phase of the execution process, users prefer to cut and seam rip all at once before proceeding to the next step of sewing.",
                "Did not consider the disembarking process, which is key for a more cohesive and complete experience.",
              ]}
            />
          </Tab>
        </Tabs>
      </Subsection>
      <NextButton to="/evaluation" title="🧵 Final round of user review" />
    </div>
  );
}

export default PrototypePage;
