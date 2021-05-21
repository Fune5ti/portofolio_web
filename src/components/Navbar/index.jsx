import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import NavbarItem from "../NavbarItem";
import D from "../../assets/d.svg";
import ThemeSelector from "../ThemeSelector";

export default function NavBar({
  navbarItems,
  themeSelectorAction,
  currentThemeState,
}) {
  return (
    <Container>
      <div>
        {navbarItems.map((item, index) => (
          <NavbarItem
            key={Date.now() + index}
            text={item.text}
            clickAction={item.clickAction}
          />
        ))}
      </div>
      <span>
        <h2>{currentThemeState ? "Dark" : "Light"}</h2>
        <ThemeSelector
          changeState={themeSelectorAction}
          currentState={currentThemeState}
          scale={0.5}
        />
      </span>
    </Container>
  );
}

NavBar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      navigationLink: PropTypes.string,
    })
  ).isRequired,
};
