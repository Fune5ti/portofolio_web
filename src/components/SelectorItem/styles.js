import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme.backgroundSecondary};
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.smSize ? "90%" : "100%")};
  height: 40px;
  padding: 2px 0px 2px 10px;
  span {
    display: flex;
    align-items: center;
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: ${(props) => !props.smSize && "20px"};
    transition: 0.5s;
  }
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.flair};
    transition: 0.5s;
  }
`;
