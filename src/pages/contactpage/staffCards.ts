import CashImage from "./cash.svg";
import StinkImage from "./scent.svg";
import SunImage from "./sun-clock-outline.svg";

export interface IStaffCard {
  image: string;
  name: string;
  title: string;
  blurb: string;
}

export const staffCards: IStaffCard[] = [
  {
    image: CashImage,
    name: "Thomas Jefferson",
    title: "Venture Capitalist",
    blurb:
      "I slipped on some garbage and thought 'this could be a meal'. If it doesn't work out I can always ask dad to wire more money, so what the hell!",
  },
  {
    image: StinkImage,
    name: "Stinky Pete",
    title: "Head Chef",
    blurb:
      "I make the same meals as always, but now young folk line up to pay me for it. I don't get it, but I'm not complaining.",
  },
  {
    image: SunImage,
    name: "Sarah Elberson",
    title: "Sous chef",
    blurb: "I just needed a summer job, please don't put this on the site.",
  },
];
