import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 3rem 2rem;
  justify-content: center;
  align-items: center;
  min-width: 350px;
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
`;

export const Tab = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.row ? "row wrap" : "column wrap")};

  flex-wrap: wrap;
  width: 80%;
  height: auto;
  margin-top: 30px;
  padding-bottom: 20px;
  scroll-margin-top: 80px;

  p {
    padding: 10px 50px;
  }
`;
export const TabRow = styled.div`
  display: flex;
  flex-flow: row;
  width: 80%;
  height: auto;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  span {
    margin: 10px;
  }
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.addSpacing ? "180px" : "0px")};
  transition: all 0.2s ease;
`;
export const TabInfoText = styled.p`
  color: ${(props) => props.theme.fontSecondary};
  font-size: 25px;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 30px;
`;
export const Languages = styled.span`
  position: fixed;
  z-index: 9999;
  top: 20px;
`;

export const Contact = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  button {
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 80px;
    font-size: 20px;
    color: ${(props) => props.theme.fontPrimary};
    background-color: ${(props) => props.theme.backgroundSecondary};
    :hover {
      background-color: ${(props) => props.theme.flair};
      transition: all 0.5s ease-in-out;
    }
    :focus {
      transform: scale(0.9);
      transition: all 0.5s ease-in-out;
    }
  }
`;
