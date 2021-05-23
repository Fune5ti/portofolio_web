import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${(props) => props.theme.backgroundSecondary};
  width: 300px;
  height: 300px;
  margin: 10px;
`;
export const Text = styled.strong`
  font-size: 25px;
  color: ${(props) => props.theme.highlight};
  font-weight: bolder;
`;
