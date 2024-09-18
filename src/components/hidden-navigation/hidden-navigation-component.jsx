import { HiddenNav } from "./hidden-navigation-styles";
import PropTypes from "prop-types";

const HiddenNavigation = (props) => {
  return <HiddenNav>{props.addLinks(props.links)}</HiddenNav>;
};

HiddenNavigation.propTypes = {
  addLinks: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HiddenNavigation;
