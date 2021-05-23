import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardBody, Button, CardContent } from "./styles";

import Image from "../../assets/projects.jpeg";
import returnRespectiveTechnologyIcon from "../../utils/getTechnologyIcon";

function CardItem({ title, description, technologies, year }) {
  return (
    <Card image={Image}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <strong>{year}</strong>
        <CardBody>{description}</CardBody>
        <Button>
          {technologies.map((technology) => (
            <img
              src={returnRespectiveTechnologyIcon(technology)}
              key={technology}
            />
          ))}
        </Button>
      </CardContent>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number,
};
Card.defaultProps = {
  title: null,
  description: null,
  technologies: null,
  year: null,
};
export default CardItem;
