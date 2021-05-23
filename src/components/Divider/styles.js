import styled from "styled-components";

export const Container = styled.hr`
  border: 1px solid ${(props) => props.theme.flair};
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const Text = styled.strong`
  color: ${(props) => props.theme.flair};
  font-size: 20px;
  position: sticky;
  margin: -35px 0px 0px 20px;
  padding: 0;
`;
