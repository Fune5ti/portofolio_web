import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, Content } from "./styles";
import SelectorItem from "../SelectorItem/index";

export default function Selector({
  elements,
  currentElementId,
  selectorIconShowing,
  selectorIconNotShowing,
  elementClickAction,
  isSmall,
}) {
  const [showItems, setShowItems] = useState(false);

  return (
    <Container
      onMouseEnter={() => setShowItems(true)}
      onMouseLeave={() => setShowItems(false)}
      smSize={isSmall}
    >
      {showItems && (
        <Content
          onMouseLeave={() => setShowItems(false)}
          onMouseEnter={() => setShowItems(true)}
        >
          {elements
            .filter((element) => element.id !== currentElementId)
            .map((element) => (
              <SelectorItem
                element={element}
                clickAction={(element) => {
                  elementClickAction(element);
                  setShowItems(false);
                }}
                currentElementId={currentElementId}
                isSmall={isSmall}
              />
            ))}
        </Content>
      )}
      <span>
        <img
          src={
            elements.find((element) => element.id === currentElementId)?.icon
          }
        />
        {!isSmall && (
          <strong>
            {elements.find((element) => element.id === currentElementId)?.name}
          </strong>
        )}
      </span>
      {selectorIconShowing && selectorIconNotShowing && (
        <img
          src={showItems ? selectorIconShowing : selectorIconNotShowing}
          alt={showItems ? "up" : "down"}
        />
      )}
    </Container>
  );
}

Selector.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  currentElementId: PropTypes.string.isRequired,
  selectorIconShowing: PropTypes.string.string,
  selectorIconNotShowing: PropTypes.string.string,
  elementClickAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
};

Selector.defaultProps = {
  selectorIconShowing: null,
  selectorIconNotShowing: null,
  isSmall: false,
};
