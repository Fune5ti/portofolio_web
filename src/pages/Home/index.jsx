import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeRequest } from "../../store/Theme/actions";
import { getSkillsRequest } from "../../store/Skills/actions";
import { getProjectsRequest } from "../../store/Projects/actions";
import { darkTheme, lightTheme } from "../../theme/colors";
import {
  Container,
  Tab,
  Layout,
  Content,
  TabRow,
  TabInfoText,
  Skills,
  Languages,
  Contact,
} from "./styles";
import { useTranslation } from "react-i18next";
import { withTheme } from "styled-components";

import i18n from "../../i18n";
import WebDev from "../../assets/web-development.svg";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar/index";
import Selector from "../../components/Selector/index";
import LoadingBox from "../../components/Loading";

import PTFlag from "../../assets/flags/098-portugal.svg";
import ENFlag from "../../assets/flags/121-england.svg";
import UpArrow from "../../assets/up-arrow.svg";
import DownArrow from "../../assets/down-arrow.svg";
import Facebook from "./assets/facebook";
import Linkedin from "./assets/linkedin";

import Divider from "../../components/Divider";
import verifyCurrentTheme from "../../utils/verifyCurrentTheme";
import CardWithPercentage from "../../components/CardWithPercentage";

function Home({ theme }) {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const skills = useSelector((state) => state.skills.items);
  const projects = useSelector((state) => state.projects.items);

  const skillsLoading = useSelector((state) => state.skills.loading);
  const projectsLoading = useSelector((state) => state.projects.loading);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const languages = [
    { id: "en", name: t("languageName.en"), icon: ENFlag },
    { id: "pt", name: t("languageName.pt"), icon: PTFlag },
  ];
  function setTheme() {
    dispatch(
      changeThemeRequest(
        verifyCurrentTheme() === "dark" ? lightTheme : darkTheme
      )
    );
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
    const extraOffset = showMenuItems ? 350 : 150;
    const topOfElement = itemRef.current.offsetTop - extraOffset;
    window.scroll({
      top: topOfElement,
      behavior: "smooth",
    });
  }

  const changeLanguage = (lng) => {
    localStorage.setItem("lng", lng);
    i18n.changeLanguage(lng);
  };

  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <Layout addSpacing={showMenuItems}>
      <Languages>
        <Selector
          elements={languages}
          text="Select a language"
          elementClickAction={(element) => changeLanguage(element.id)}
          currentElementId={localStorage.getItem("lng") || "en"}
          selectorIconShowing={UpArrow}
          selectorIconNotShowing={DownArrow}
          isSmall={windowSize <= 450}
        />
      </Languages>
      <Navbar
        themeSelectorAction={() => setTheme()}
        currentThemeState={verifyCurrentTheme() === "dark"}
        showMenuItems={showMenuItems}
        setShowMenuItems={setShowMenuItems}
        navbarItems={[
          {
            text: t("navbar.home"),
            clickAction: () => navigateToNavbarItem(homeRef),
          },
          {
            text: t("navbar.about"),
            clickAction: () => navigateToNavbarItem(aboutRef),
          },
          {
            text: t("navbar.skills"),
            clickAction: () => navigateToNavbarItem(skillsRef),
          },
          {
            text: t("navbar.projects"),
            clickAction: () => navigateToNavbarItem(projectsRef),
          },
          {
            text: t("navbar.contact"),
            clickAction: () => navigateToNavbarItem(contactRef),
          },
        ]}
      />

      <Container>
        <TabRow ref={homeRef}>
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
        </TabRow>
      </Container>
      <Tab ref={aboutRef}>
        <Divider text={t("about.title")} />
        <TabInfoText>{t("about.description")}</TabInfoText>
      </Tab>

      <Tab row ref={skillsRef}>
        <Divider text={t("skills.title")} />
        {skillsLoading ? (
          <Skills>
            <LoadingBox color={theme.flair} />
          </Skills>
        ) : (
          <Skills>
            {skills?.map((skill) => (
              <CardWithPercentage
                key={skill._id}
                skill={skill}
                backgroundColor={theme.flair}
                foregroundColor={theme.highlight}
                textColor={theme.fontSecondary}
              />
            ))}
          </Skills>
        )}
      </Tab>
      <Tab ref={projectsRef}>
        <Divider text={t("project.title")} />
        <Content>
          {projectsLoading ? (
            <LoadingBox color={theme.flair} />
          ) : (
            projects?.map((project) => (
              <span>
                <Card
                  key={`${project.name}"+"${project.year}`}
                  title={project.name}
                  year={project.year}
                  description={
                    localStorage.getItem("lng") === "en" ||
                    localStorage.getItem("lng") === undefined
                      ? project.description
                      : project.descriptionPT
                  }
                  technologies={project.technologies}
                />
              </span>
            ))
          )}
        </Content>
      </Tab>
      <Tab ref={contactRef}>
        <Divider text={t("contact.title")} />
        <Contact>
          <strong>danipires9@hotmail.com</strong>
          <button onClick={() => history.push("mailto:danipires9@hotmail.com")}>
            {t("contact.title")}
          </button>
          <span>
            <a href="https://web.facebook.com/daniel.jorge.777" target="_blank">
              <Facebook color={theme.flair} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-pires-0852311b4/"
              target="_blank"
            >
              <Linkedin color={theme.flair} />
            </a>
          </span>
        </Contact>
      </Tab>
    </Layout>
  );
}
export default withTheme(Home);
