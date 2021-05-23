import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import Tick from "../../assets/tick.svg";

export default function SelectorItem({ element, clickAction, isSmall }) {
  return (
    <Container
      key={element.id}
      onClick={() => clickAction(element)}
      smSize={isSmall}
    >
      <span>
        {element.icon !== null && <img src={element.icon} alt={element.name} />}
        {!isSmall && <strong>{element.name}</strong>}
      </span>
    </Container>
  );
}

SelectorItem.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  currentElementId: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
  isSmall: PropTypes.bool,
};

SelectorItem.defaultProps = {
  element: { icon: null },
  isSmall: false,
};
