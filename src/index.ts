import "./style.css";
import { buildHomePage } from "./pages/index.js";

const homepageMain = buildHomePage();
document.querySelector(".content")?.appendChild(homepageMain);
console.log("added homepage content");
