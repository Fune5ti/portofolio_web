import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  transform: scale(0.5);

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: ${(props) => props.theme.flair};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    :nth-child(1) {
      top: 0px;
    }

    :nth-child(2) {
      top: 18px;
    }

    :nth-child(3) {
      top: 36px;
    }
  }

  ${(props) =>
    props.open &&
    css`
      span:nth-child(1) {
        top: 18px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      span:nth-child(3) {
        top: 18px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    `}
`;
