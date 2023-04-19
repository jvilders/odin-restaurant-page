interface IOpeningHours {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  openingHour: number;
  closingHour: number;
}

const openingHours: IOpeningHours[] = [
  {
    day: "Monday",
    openingHour: 9,
    closingHour: 16,
  },
  {
    day: "Tuesday",
    openingHour: 13,
    closingHour: 14,
  },
  {
    day: "Wednesday",
    openingHour: 5,
    closingHour: 23,
  },
  {
    day: "Thursday",
    openingHour: 7,
    closingHour: 9,
  },
  {
    day: "Friday",
    openingHour: 15,
    closingHour: 16,
  },
  {
    day: "Saturday",
    openingHour: 12,
    closingHour: 19,
  },
  {
    day: "Sunday",
    openingHour: 10,
    closingHour: 15,
  },
];

export default openingHours;
