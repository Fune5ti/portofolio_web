import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles.js";

function ThemeSelector({ changeState, currentState, scale }) {
  return (
    <Container scale={scale}>
      <input
        type="checkbox"
        value={currentState}
        onChange={() => changeState()}
      />
      <span className="slider round" />
    </Container>
  );
}

ThemeSelector.propTypes = {
  changeState: PropTypes.func.isRequired,
  currentState: PropTypes.bool.isRequired,
  scale: PropTypes.number.isRequired,
};

export default ThemeSelector;
