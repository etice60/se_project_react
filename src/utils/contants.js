export const latitude = 3.2;
export const longitude = -73.22;
export const APIkey = "423f1a97b26491be201d23867741eed9";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  { url: require("../images/Day/Sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/Day/Fog.svg").default, day: true, type: "fog" },
  { url: require("../images/Day/Rain.svg").default, day: true, type: "rain" },
  { url: require("../images/Day/Snow.svg").default, day: true, type: "snow" },
  { url: require("../images/Day/Storm.svg").default, day: true, type: "storm" },
  {
    url: require("../images/Night/CloudyNight.svg").default,
    day: false,
    type: "cloudynight",
  },
  {
    url: require("../images/Night/ClearNight.svg").default,
    day: false,
    type: "clearnight",
  },
  {
    url: require("../images/Night/FoggyNight.svg").default,
    day: false,
    type: "foggynight",
  },
  {
    url: require("../images/Night/RainyNight.svg").default,
    day: false,
    type: "rainynight",
  },
  {
    url: require("../images/Night/SnowyNight.svg").default,
    day: false,
    type: "snowynight",
  },
  {
    url: require("../images/Night/StormyNight.svg").default,
    day: false,
    type: "stormynight",
  },
];
