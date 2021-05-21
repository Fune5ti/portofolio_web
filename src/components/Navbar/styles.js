import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.flair};
  width: 100%;
  span {
    display: flex;
    align-items: center;
    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme.flair};
    }
  }
  div {
    display: flex;
    padding: 0 2rem;
  }
  img {
    margin: 0.25rem 2rem;
    height: 3rem;
    width: 3rem;
    object-fit: contain;
  }
`;
