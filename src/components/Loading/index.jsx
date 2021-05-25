import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import Loading from "./loading";

function LoadingBox({ color }) {
  return (
    <Container>
      <Loading color={color} />
    </Container>
  );
}

LoadingBox.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LoadingBox;
