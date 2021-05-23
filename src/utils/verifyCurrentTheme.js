import { darkTheme } from "../theme/colors";

export default function verifyCurrentTheme() {
  if (!localStorage.getItem("theme")) {
    return "dark";
  }
  const currentTheme = JSON.parse(localStorage.getItem("theme"));
  if (darkTheme.backgroundPrimary === currentTheme.backgroundPrimary) {
    return "dark";
  } else {
    return "light";
  }
}
