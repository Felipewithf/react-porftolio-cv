import React, { useState, useEffect, lazy } from "react";
import SingleHospitals from "../items/single_hospitals";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import "./css/itemsStadiums.css";

function Stadiums() {
  const [video, setVideo] = useState("agma");
  const [activeCategory, setActiveCategory] = useState("agma");

  const stadiumItems = [
    "agma",
    "e-nor",
    "e-sou",
    "ikoros",
    "kalika",
    "luna",
    "marte",
    "mimas",
    "nibuz",
    "talax",
    "titan",
    "venus",
    "zend",
    "zeres",
  ];

  const swapVideo = (stadiumItem) => {
    setActiveCategory(stadiumItem);
  };

  useEffect(() => {
    setVideo(activeCategory);
  }, [activeCategory]); // Dependency array ensures effect runs when activeCategory changes

  return (
    <>
      <h3 className="title">Interstellar Stadiums</h3>
      <p className="description">
        Creative proposal selected by FIFA and the Modex team for an exciting sci-fi
        narrative project that depicts a plausible evolution of football beyond Earth!
        Alongside FIFA & Modex team, we created 14 football arenas beyond Earth—matches
        held on Mars, Venus, Asteroids, imaginary planets, etc. These sci-fi stadiums are
        now part of FIFA's digital collectible division and the first artist-driven
        digital collectible by them. What's more, collecting 12 stadiums will give you a
        chance to win Right-To-Buys for the upcoming FIFA World Cup 2026, provided
        directly from FIFA. To view the final collectibles and more information about the
        project visit:{" "}
        <a href="https://collect.fifa.com/drops/aof-stadium" target="_blank">
          The Art of Football: Stadium Edition
        </a>
      </p>

      <div className="innerGrid stadiums">
        <ul className="nav justify-content-center">
          {stadiumItems.map((stadium) => (
            <li
              key={stadium}
              className={activeCategory === stadium ? "nav-item active" : "nav-item"}
            >
              <img
                src={`img/gallery/stadiums/${stadium}.png`}
                alt={stadium}
                onClick={() => swapVideo(stadium)}
              />
            </li>
          ))}
        </ul>
        <video
          src={`img/gallery/stadiums/${video}.mp4`}
          controls
          loop
          className="video-player-full mb-5"
          loading="lazy"
        ></video>

        <img
          src="img/year/2024/stadiums_1.webp"
          alt="compilation of all Sci-Fi stadium "
        />
        <p className="description">
          Each stadium comes with its own intro cover video that were provided by the
          Modex Team, while the lore of each stadium (created by me) is highlighted
          alongside each of the stadiums digital collectibles on collec.fifa.com
        </p>
        <img
          src="img/year/2024/stadiums_2.webp"
          alt="compilation of all Sci-Fi stadium "
        />
      </div>
    </>
  );
}

export default Stadiums;
