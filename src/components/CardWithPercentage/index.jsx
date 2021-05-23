import React from "react";
import PropTypes from "prop-types";
import { Container, Text } from "./styles";

import ProgressCircle from "../ProgressCircle";

function CardWithPercentage({
  skill,
  backgroundColor,
  foregroundColor,
  textColor,
}) {
  return (
    <Container>
      <ProgressCircle
        percentage={skill.rating}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        textColor={textColor}
      />
      <Text>{skill.name}</Text>
    </Container>
  );
}

CardWithPercentage.propTypes = {};

export default CardWithPercentage;
