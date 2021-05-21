import styled from "styled-components";
import { lighten } from "polished";

export const Card = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.fontPrimary};
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 30ch;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 500ms ease;
  :focus-within {
    div {
      > *:not(h2) {
        opacity: 1;
        transition-delay: 600ms;
      }
      transition-duration: 0ms;
    }
  }
  :hover,
  :focus-within {
    transform: scale(1.05);

    h2 {
      :after {
        transform: scale(1);
      }
    }
    div {
      > *:not(h2) {
        opacity: 1;
        transition-delay: 600ms;
      }
      transform: translateY(0);
      transition-delay: 500ms;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      transition-delay: 0ms !important;
    }
  }
`;
export const CardContent = styled.div`
  --padding: 1.5rem;
  padding: var(--padding);
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.2) 10%,
    hsl(0 0% 0% / 1)
  );
  transform: translateY(60%);
  transition: transform 500ms ease;
  > *:not(h2) {
    opacity: 0;
    transition: opacity 500ms linear;
  }
  strong {
    color: ${(props) => props.theme.flair};
  }
`;
export const CardTitle = styled.h2`
  position: relative;
  width: max-content;

  :after {
    content: "";
    position: absolute;
    height: 4px;
    left: calc(var(--padding) * -1);
    bottom: -2px;
    width: calc(100% + var(--padding));
    background: ${(props) => props.theme.flair};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }
`;
export const CardBody = styled.p`
  color: ${(props) => lighten(0.6, props.theme.fontSecondary)};
`;
export const Button = styled.span`
  margin-left: 55%;
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.fontSecondary};
  img {
    height: 30px;
    width: 30px;
    object-fit: contain;
    margin: 0.5px;
  }
`;
