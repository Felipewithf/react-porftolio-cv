import React from "react";

// modal data
import RoundViews from "./components/modals/roundviews";
import FutureForum from "./components/modals/futureforum";
import Kroger from "./components/modals/kroger";
import Mitsubishi from "./components/modals/mitsubishi";
import Alibaba from "./components/modals/alibaba";
import Ps4 from "./components/modals/ps4";
import XboxOne from "./components/modals/xbox";
import Dolphins from "./components/modals/dolphins";
import KineticTypo from "./components/modals/kinetictypo";
import Pixoku from "./components/modals/pixoku";
import Faceless from "./components/modals/faceless";
import Hashmaskers from "./components/modals/hashmaskers";
import HashTimeline from "./components/modals/hashtimeline";
import LapMesh from "./components/modals/lapmesh";
import UIforAI from "./components/modals/uiforai";
import SaaSRedesign from "./components/modals/saasredesign";
import Weather from "./components/modals/weather";
import Hunny from "./components/modals/hunny";
import Heroes from "./components/modals/heroes";
import Hospitals from "./components/modals/hospitals";
import FifaFilter from "./components/modals/fifafilter";
import Stadiums from "./components/modals/stadiums";

// add theme to the variables for each artwork, and change the logic so it can be filter by year, and theme
const themeData = [
  {
    theme: "Selected Projects",
    artworks: [
      {
        name: "Art Direction: FIFA & Modex ",
        component: <Stadiums />,
        cover_img: "img/year/2024/stadiums_cover.png",
        alt: "",
        year: "2024",
        selected: true,
      },
      {
        name: "Hospital Illustrations",
        component: <Hospitals />,
        cover_img: "img/year/2020/hospitals.png",
        alt: "",
        year: "2020",
        selected: true,
      },
      {
        name: "Product Design: Pixoku",
        component: <Pixoku />,
        cover_img: "img/year/2024/pixoku_cover.png",
        alt: "",
        year: "2024",
        selected: true,
      },
      {
        name: "Product Design: Saas Redesign",
        component: <SaaSRedesign />,
        cover_img: "img/year/2022/saasredesign_cover.png",
        alt: "",
        year: "2021",
        selected: true,
      },
      {
        name: "Motion Graphics: Conceptual UI",
        component: <UIforAI />,
        cover_img: "img/year/2020/uiforai_cover.png",
        alt: "",
        year: "2020",
        selected: true,
      },
      {
        name: "Motion Graphics: Explainable AI",
        component: <LapMesh />,
        cover_img: "img/year/2020/lapmesh_cover.png",
        alt: "",
        year: "2020",
        selected: true,
      },
      {
        name: "Product Design: Filter Menu Redesign",
        component: <FifaFilter />,
        cover_img: "img/year/2024/fifafilter_cover.png",
        alt: "",
        year: "2024",
        selected: true,
      },
      {
        name: "Brand Experience: Souest & Mitsubishi",
        component: <Mitsubishi />,
        cover_img: "img/year/2016/mitsubishi_cover.jpg",
        alt: "",
        year: "2016",
        selected: true,
      },
      {
        name: "Brand Experience: XboxOne",
        component: <XboxOne />,
        cover_img: "img/year/2015/xboxone_cover.jpg",
        alt: "",
        year: "2015",
        selected: true,
      },
      {
        name: "Future Forum Conference",
        component: <FutureForum />,
        cover_img: "img/year/2017/futureforum_cover.png",
        alt: "",
        year: "2017",
        selected: true,
      },
      {
        name: "Brand Experience: PS4",
        component: <Ps4 />,
        cover_img: "img/year/2014/ps4_cover.jpg",
        alt: "",
        year: "2014",
        selected: true,
      },
      {
        name: "Alibaba Computing Conference",
        component: <Alibaba />,
        cover_img: "img/year/2016/alibaba_cover.png",
        alt: "",
        year: "2016",
        selected: true,
      },

      {
        name: "Brand Experience: Kroger Leadership Summit",
        component: <Kroger />,
        cover_img: "img/year/2015/kroger_cover.png",
        alt: "",
        year: "2015",
        selected: true,
      },
      {
        name: "3D Rendering: Hunny Pot",
        component: <Hunny />,
        cover_img: "img/year/2017/hunny_cover.png",
        alt: "",
        year: "2017",
        selected: true,
      },
      {
        name: "Data Visualization",
        component: <Dolphins />,
        cover_img: "img/year/2015/dolphins_cover.png",
        alt: "",
        year: "2015",
        selected: true,
      },
      {
        name: "Stereographic Projections",
        component: <RoundViews />,
        cover_img: "img/year/2014/roundviews_cover.png",
        alt: "photography experiment using 360 globe effect",
        year: "2014",
        selected: true,
      },
      {
        name: "Illustration: Heroes del Futbol",
        component: <Heroes />,
        cover_img: "img/year/2020/heroes_cover.png",
        alt: "",
        year: "2020",
        selected: true,
      },
      {
        name: "Website Design: Hashmaskers",
        component: <Hashmaskers />,
        cover_img: "img/year/2023/hashmaskers_cover.png",
        alt: "",
        year: "2023",
        selected: true,
      },
      {
        name: "Kinetic Typography",
        component: <KineticTypo />,
        cover_img: "img/year/2021/kinetictypo_cover.png",
        alt: "",
        year: "2021",
        selected: true,
      },
      {
        name: "Creative Coding: Weather Dashboard",
        component: <Weather />,
        cover_img: "img/year/2023/weather_cover.png",
        alt: "",
        year: "2023",
        selected: true,
      },
      {
        name: "Promotional Video: Hashmasks",
        component: <HashTimeline />,
        cover_img: "img/year/2023/hashtimeline_cover.png",
        alt: "",
        year: "2023",
        selected: true,
      },
      {
        name: "Website Design: Faceless",
        component: <Faceless />,
        cover_img: "img/year/2023/faceless_cover.png",
        alt: "",
        year: "2023",
        selected: true,
      },
    ],
  },
];

export default themeData;
