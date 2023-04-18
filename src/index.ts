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
let currentPage = "homepage";
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

homeNavigation.addEventListener("click", () => {
  if (currentPage == "homepage") {
    return;
  }
  contentAttachPoint.innerHTML = "";
  contentAttachPoint.appendChild(buildHomePage());
  currentPage = "homepage";
});

menuNavigation.addEventListener("click", () => {
  if (currentPage == "menu") {
    return;
  }
  contentAttachPoint.innerHTML = "";
  contentAttachPoint.appendChild(buildMenuPage());
  currentPage = "menu";
});

contactNavigation.addEventListener("click", () => {
  if (currentPage == "contact") {
    return;
  }
  contentAttachPoint.innerHTML = "";
  contentAttachPoint.appendChild(buildContactPage());
  currentPage = "contact";
});
