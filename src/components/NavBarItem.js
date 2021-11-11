import { NavLink } from "react-router-dom";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { HashLink } from "react-router-hash-link";

function NavBarItem(props) {
  return (
    <NavLink to={props.to} className="NavBarItem" activeClassName="active">
      <AccordionItem style={{ border: "none" }}>
        <AccordionItemHeading>
          <AccordionItemButton>{props.header}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {props.subheaders.map((subheader, index) => (
            <div className="subitem" key={index}>
              <HashLink
                to={`${props.to}#${subheader}`}
                key={index}
                className="hashlink"
              >
                {subheader}
              </HashLink>
            </div>
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    </NavLink>
  );
}

export default NavBarItem;
