import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import {
  Container,
  NavBarDropDown,
  NavBarButtonItemsContainer,
} from "./styles";
import NavbarItem from "../NavbarItem";
import Hamburger from "../../components/HamburguerIcon";
import ThemeSelector from "../ThemeSelector";

function NavBar({
  navbarItems,
  themeSelectorAction,
  currentThemeState,
  showMenuItems,
  setShowMenuItems,
  theme,
}) {
  const navbarDropDownRef = useRef();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMenuItems(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(navbarDropDownRef);

  return (
    <Container>
      <NavBarButtonItemsContainer ref={navbarDropDownRef}>
        <button onClick={() => setShowMenuItems(!showMenuItems)}>
          <Hamburger open={showMenuItems} />
        </button>
        {showMenuItems && (
          <NavBarDropDown open={showMenuItems}>
            {navbarItems.map((item, index) => (
              <NavbarItem
                key={Date.now() + index}
                text={item.text}
                clickAction={() => {
                  item.clickAction();
                  setShowMenuItems(false);
                }}
              />
            ))}
          </NavBarDropDown>
        )}
      </NavBarButtonItemsContainer>
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

export default withTheme(NavBar);
NavBar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      navigationLink: PropTypes.string,
    })
  ).isRequired,
};
