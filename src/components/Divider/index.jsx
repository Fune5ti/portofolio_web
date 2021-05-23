import React from "react";
import PropTypes from "prop-types";

import { Container, Text } from "./styles";

function Divider({ text }) {
  return (
    <>
      <Container />
      {text !== null && <Text>{text}</Text>}
    </>
  );
}

Divider.propTypes = {
  text: PropTypes.string,
};
Divider.defaultProps = {
  text: null,
};

export default Divider;
