import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  font-size: 0.8rem;
  opacity: 80%;
  :hover,
  :focus {
    transition: all 0.3s ease;
    background-color: ${(props) => props.theme.highlight};
    h2 {
      color: ${(props) => props.theme.backgroundSecondary};
      transition: 1s;
    }
  }
  h2 {
    padding: 0;
    margin: 0;
    font-weight: 900;
    color: ${(props) => props.theme.flair};
  }
`;
