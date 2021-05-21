import ReactIcon from "../assets/technologies/react.svg";
import JSIcon from "../assets/technologies/js.svg";
import NodejsIcon from "../assets/technologies/nodejs.svg";
import JavaIcon from "../assets/technologies/java.svg";
import CsharpIcon from "../assets/technologies/csharp.svg";
import Kubernetes from "../assets/technologies/k8s.svg";

const TECHNOLOGY_TO_ICON_MAP = {
  react: ReactIcon,
  js: JSIcon,
  nodejs: NodejsIcon,
  java: JavaIcon,
  csharp: CsharpIcon,
  kubernetes: Kubernetes,
};

export default function returnRespectiveTechnologyIcon(technologyName) {
  return TECHNOLOGY_TO_ICON_MAP[technologyName.toLowerCase()];
}
