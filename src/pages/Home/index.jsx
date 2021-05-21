import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeRequest } from "../../store/Theme/actions";
import { getSkillsRequest } from "../../store/Skills/actions";
import { getProjectsRequest } from "../../store/Projects/actions";
import { darkTheme, lightTheme } from "../../theme/colors";
import { Container, ProjectsTab, Layout } from "./styles";
import { useTranslation } from "react-i18next";

import WebDev from "../../assets/web-development.svg";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar/index";

export default function Home() {
  const skills = useSelector((state) => state.skills.items);
  const projects = useSelector((state) => state.projects.items);
  const [themeState, setThemeState] = useState(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function setTheme() {
    let currentThemeState = !themeState;
    dispatch(changeThemeRequest(currentThemeState ? darkTheme : lightTheme));
    setThemeState(currentThemeState);
  }

  useEffect(() => {
    if (skills === null) dispatch(getSkillsRequest());
  }, []);

  useEffect(() => {
    if (projects === null) dispatch(getProjectsRequest());
  }, []);

  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function navigateToNavbarItem(itemRef) {
    itemRef.current?.scrollIntoView({ scrollBehavior: "smooth" });
  }

  return (
    <Layout>
      <Navbar
        themeSelectorAction={() => setTheme()}
        currentThemeState={themeState}
        navbarItems={[
          { text: "Home", clickAction: () => navigateToNavbarItem(homeRef) },
          {
            text: "About me",
            clickAction: () => navigateToNavbarItem(aboutRef),
          },
          {
            text: "Skills",
            clickAction: () => navigateToNavbarItem(skillsRef),
          },
          {
            text: "Projects",
            clickAction: () => navigateToNavbarItem(projectsRef),
          },
          {
            text: "Contact",
            clickAction: () => navigateToNavbarItem(contactRef),
          },
        ]}
      />

      <Container ref={homeRef}>
        <img src={WebDev} alt="webdev" />
        <div>
          <h3>{t("home.greetings")}</h3>
          <h1>{t("home.name")}</h1>
          <h2>
            {t("home.subtitleStart")} <span>{t("home.subtitleMiddle")}</span>{" "}
            {t("home.subtitleEnd")}
          </h2>
          <p>{t("home.description")}</p>
        </div>
      </Container>
      <ProjectsTab>
        {projects?.map((project) => (
          <Card
            title={project.name}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </ProjectsTab>
    </Layout>
  );
}
