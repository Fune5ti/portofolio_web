import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.flair};
  width: 100%;
  padding: 0 10px;
  position: fixed;
  background: ${(props) => props.theme.backgroundPrimary};
  z-index: 9995;
  top: 0;

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
  }
  img {
    margin: 0.25rem 2rem;
    height: 3rem;
    width: 3rem;
    object-fit: contain;
  }
`;
export const NavBarButtonItemsContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;

  > button {
    background: none;
    margin: none;
    outline: none;
    padding: none;
    border: none;
    height: 50px;
    width: 50px;
  }
`;
export const NavBarDropDown = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 9999;
  top: 81px;
  width: 100vw;
  left: 0;
  background-color: ${(props) => props.theme.backgroundSecondary};
  opacity: 0;
  transform-origin: top;
  transform: scaleY(0);
  transition: all 0.4s ease;
  ${(props) =>
    props.open &&
    css`
      transform: scaleY(1);
      opacity: 1;
    `}
`;
