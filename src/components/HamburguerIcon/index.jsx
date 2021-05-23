import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Hamburger({ open }) {
  return (
    <Container open={open}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
}

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Hamburger;
