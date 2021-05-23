import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.smSize ? "50px" : "200px")};
  position: relative;
  padding: 10px;
  background: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.fontPrimary};
  border-radius: 4px;
  opacity: 80%;
  transition: all 0.4s ease;

  span {
    display: flex;
    align-items: center;
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: ${(props) => (!props.smSize ? "20px" : "0px")};
    transition: 0.5s;
  }
  :hover,
  :focus {
    > div {
      transform: scaleY(1);
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s ease;
  position: absolute;
  left: 0px;
  top: 42px;
  width: 95%;
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: 4px;

  div {
    :not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.backgroundPrimary};
    }
    :first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    :last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
