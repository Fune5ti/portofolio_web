import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import history from "../../services/history";

export default function NavbarItem({ text, clickAction }) {
  return (
    <Container onClick={() => clickAction()}>
      <h2>{text}</h2>
    </Container>
  );
}

NavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
};
