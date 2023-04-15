import Pipe from "./Discharge_pipe.jpg";

function buildStripes(): HTMLDivElement {
  const stripes = document.createElement("div");
  stripes.classList.add("stripes");

  return stripes;
}

function buildHomePageTitle(): HTMLSpanElement {
  const homepageTitle = document.createElement("span");
  homepageTitle.classList.add("homepage-title");
  homepageTitle.textContent = "Embrace it!";

  return homepageTitle;
}

function buildHomePageText(): HTMLDivElement {
  const homepageText = document.createElement("div");
  homepageText.classList.add("homepage-text");

  const firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "We're all ingesting garbage and microplastics anyway.";

  const secondParagraph = document.createElement("p");
  secondParagraph.innerHTML =
    "Instead of worrying about cancer (*yawn*), we at <strong>MaestroPlastique</strong> choose to focus on what we <em>can</em> control:";

  homepageText.append(firstParagraph, secondParagraph);
  return homepageText;
}

function buildHomePageTaste(): HTMLParagraphElement {
  const paragraph = document.createElement("p");
  paragraph.classList.add("homepage-taste");
  paragraph.textContent = "The taste";

  return paragraph;
}

function buildHomePageImageWrapper(): HTMLDivElement {
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("homepage-image-wrapper");

  const image = document.createElement("img");
  image.classList.add("homepage-pipe");
  image.src = Pipe;
  image.alt = "Wastewater pipe";

  imageWrapper.appendChild(image);
  return imageWrapper;
}

function buildGradientBackground(): HTMLDivElement {
  const gradientDiv = document.createElement("div");
  gradientDiv.classList.add("gradient-bg");
  return gradientDiv;
}

export default function buildHomePage(): HTMLElement {
  const mainElement = document.createElement("main");
  mainElement.classList.add(
    "homepage-main",
    "width-constrained",
    "margin-centered"
  );

  const stripes = buildStripes();
  const homepageTitle = buildHomePageTitle();
  const homepageText = buildHomePageText();
  const homepageTaste = buildHomePageTaste();
  const homepageImageWrapper = buildHomePageImageWrapper();
  const gradientBackground = buildGradientBackground();

  mainElement.append(
    stripes,
    homepageTitle,
    homepageText,
    homepageTaste,
    homepageImageWrapper,
    gradientBackground
  );

  return mainElement;
}
