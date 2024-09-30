import { ReactNode } from "react";
import { HiddenNav } from "./hidden-navigation-styles";
import PropTypes from "prop-types";

interface Props {
  isVisible: boolean;
  links: string[];
  addLinks: (links: string[]) => ReactNode;
}

const HiddenNavigation = ({ isVisible, addLinks, links }: Props) => {
  return (
    <HiddenNav id="hiddenNav" className={isVisible ? "visible" : "hidden"}>
      {addLinks(links)}
    </HiddenNav>
  );
};

HiddenNavigation.propTypes = {
  addLinks: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default HiddenNavigation;
