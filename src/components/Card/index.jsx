import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardBody, Button, CardContent } from "./styles";

import image from "../../assets/download.jpeg";
import returnRespectiveTechnologyIcon from "../../utils/getTechnologyIcon";

function CardItem({ title, description, technologies, year }) {
  return (
    <Card image={image}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <strong>{year}</strong>
        <CardBody>{description}</CardBody>
        <Button>
          {technologies.map((technology) => (
            <img src={returnRespectiveTechnologyIcon(technology)} />
          ))}
        </Button>
      </CardContent>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default CardItem;
