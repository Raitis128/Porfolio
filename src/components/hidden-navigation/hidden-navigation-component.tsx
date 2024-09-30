import { ReactNode } from "react";
import { HiddenNav } from "./hidden-navigation-styles";
import PropTypes from "prop-types";

interface Props {
  display: string;
  links: string[];
  addLinks: (links: string[]) => ReactNode;
}

const HiddenNavigation = ({ display, addLinks, links }: Props) => {
  return (
    <HiddenNav id="hiddenNav" style={{ display: display }}>
      {addLinks(links)}
    </HiddenNav>
  );
};

HiddenNavigation.propTypes = {
  addLinks: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  display: PropTypes.string.isRequired,
};

export default HiddenNavigation;
