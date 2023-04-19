import "./style.css";
import {
  buildHomePage,
  buildMenuPage,
  buildContactPage,
} from "./pages/index.js";

function verifyNotNull<T>(p: null | T): T {
  if (p === null) {
    throw "Should not be null!";
  }
  return p;
}

const contentAttachPoint = verifyNotNull(document.querySelector(".content"));
const homepageMain = buildHomePage();
let currentPage: "homepage" | "menu" | "contact" = "homepage";
contentAttachPoint.appendChild(homepageMain);
console.log("added homepage content");

const homeNavigation = verifyNotNull(
  document.querySelector(".page-buttons .home")
);
const menuNavigation = verifyNotNull(
  document.querySelector(".page-buttons .menu")
);
const contactNavigation = verifyNotNull(
  document.querySelector(".page-buttons .contact")
);

const mapping = [
  [homeNavigation, "homepage", buildHomePage],
  [menuNavigation, "menu", buildMenuPage],
  [contactNavigation, "contact", buildContactPage],
] as const;

mapping.forEach((element) => {
  const [pageElement, identifier, buildFunction] = element;
  pageElement.addEventListener("click", () => {
    if (currentPage === identifier) {
      return;
    }
    contentAttachPoint.innerHTML = "";
    contentAttachPoint.appendChild(buildFunction());
    currentPage = identifier;
  });
});
