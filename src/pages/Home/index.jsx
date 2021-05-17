import React, { useState } from "react";
import ThemeSelector from "../../components/ThemeSelector/index";
import { useDispatch } from "react-redux";
import { changeThemeRequest } from "../../store/Theme/actions";
import { darkTheme, lightTheme } from "../../theme/colors";
import { Container } from "./styles";
export default function Home() {
  const [test, setTest] = useState(true);
  const dispatch = useDispatch();

  function setTheme() {
    let testing = !test;
    dispatch(changeThemeRequest(testing ? darkTheme : lightTheme));
    setTest(testing);
  }

  return (
    <Container>
      {/* <ThemeSelector
        currentState={test}
        changeState={() => setTheme()}
        backgroundColor="#3EFFDB"
        scale={0.7}
      />
      <h1>Hi Portofolio</h1> */}
      <h2>Hi, my name is</h2>
    </Container>
  );
}
