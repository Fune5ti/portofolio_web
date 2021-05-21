import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  font-size: 0.8rem;

  :hover {
    border-bottom: 0.35rem solid ${(props) => props.theme.highlight};
    transition: all 0.3s ease;
    h2 {
      color: ${(props) => props.theme.highlight};
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
