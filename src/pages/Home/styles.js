import styled from "styled-components";

export const Container = styled.div`
  h3 {
    color: ${(props) => props.theme.flair};
    margin: 0;
    padding: 0;
    margin-left: 10px;
    font-size: 35px;
  }
  h1 {
    font-size: 85px;
    margin: 0;
    padding: 0;
  }
  h2 {
    color: ${(props) => props.theme.fontSecondary};
    margin: 0;
    padding: 0;
    font-size: 55px;
    span {
      color: ${(props) => props.theme.flair};
    }
  }
  p {
    font-size: 25px;
  }
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  margin: 3rem 2rem;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
    width: 30%;
    margin: 2rem;
    align-self: center;
    @media (max-width: 700px) {
      display: none;
      transition: 0.3s;
    }
    @media (max-width: 1030px) {
      align-self: flex-start;
    }
  }
`;

export const ProjectsTab = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
  height: auto;
  margin: 10px;
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
