import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./App.css";

import themeData from "./projects";

function App() {
  // State to track the hovered image's data-header and the corresponding year
  const [hoveredInfo, setHoveredInfo] = useState({ year: null, header: "" });
  const [modalData, setModalData] = useState({ isOpen: false, imageSrc: "" });
  const [themeFilter, setThemeFilter] = useState(true);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = (header, identifier) => {
    if (themeFilter) {
      setHoveredInfo({ theme: identifier, header });
    } else {
      setHoveredInfo({ year: identifier, header });
    }
  };
  const handleMouseLeave = () => {
    setHoveredInfo({ year: null, theme: null, header: "" });
  };

  const openModal = (name, content) => {
    document.body.classList.add("no-scroll");
    setModalData({ isOpen: true, content });
    const hashName = name.toLowerCase().replace(/[^a-z]/g, "");
    window.history.pushState(null, "", `#${hashName}`);
  };

  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    setModalData({ isOpen: false, imageSrc: "" });
    window.history.pushState(null, "", window.location.pathname);
  };

  // Check for hash in the URL when the page loads and open the corresponding modal
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    // Only run if there's a hash in the URL
    if (window.location.hash && hash) {
      const cleanHash = hash.toLowerCase().replace(/[^a-z]/g, "");

      // Only proceed if themeData is defined and not empty
      if (cleanHash && themeData && themeData.length > 0) {
        if (cleanHash) {
          // Iterate over each artwork in the current theme
          for (let j = 0; j < themeData[0].artworks.length; j++) {
            const { name, component } = themeData[0].artworks[j];
            const cleanName = name.toLowerCase().replace(/[^a-z]/g, ""); // clean the name
            // Check if the cleaned name matches the hash
            if (cleanName === cleanHash) {
              openModal(name, component);
              return; // Exit once a match is found
            }
          }
        }
      }
    }
  }, [themeData]);

  return (
    <>
      <div className="row">
        <div className="col-md-3" id="introduction">
          <div className="sticky-column">
            <img src="felipe_logo.svg" alt="Felipe Sarmiento's logo" />

            <div>
              <h1 style={{ paddingBottom: "5px", paddingTop: "15px" }}>
                Art Director & <br></br> Design Leader
              </h1>
              <p>
                Empowering teams to create innovative and objective experiences through
                physical events and digital products.
              </p>
            </div>
            <div className="socials">
              <a href="https://github.com/Felipewithf" target="_blank">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="24"
                >
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/felipewithf/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="28"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8" id="static_projects">
          <div className="sp_masterHolder">
            {themeFilter ? (
              // Theme work
              themeData.map(({ theme, artworks }) => (
                <div className="yearholder" id={theme} key={theme}>
                  <div className="year-header">
                    <div className="dividerLine"></div>
                    <div className="yearholder-headertext">
                      <p className="header-only-text">
                        {hoveredInfo.theme === theme ? hoveredInfo.header : ""}
                      </p>
                      <p>{theme}</p>
                    </div>
                    <div className="dividerLine"></div>
                  </div>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3, 1200: 3 }}
                    className="artwork-group"
                  >
                    <Masonry gutter="10px">
                      {artworks
                        .filter((artwork) => artwork.selected)
                        .map(({ name, component, cover_img, alt }) => (
                          <img
                            src={cover_img}
                            alt={alt}
                            key={name}
                            onMouseEnter={() => handleMouseEnter(name, theme)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => openModal(name, component)}
                          />
                          // <ImageComponent src={cover_img} alt={alt} component={component} key={name} theme={theme} mouse={handleMouseEnter}/>
                        ))}
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              ))
            ) : (
              // End of theme work
              <div>
                <p>To display data chronologically ... </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* modal */}
      {modalData.isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              CLOSE
            </span>
            {modalData.content}
          </div>
        </div>
      )}
      {/* Stamp */}
      <img className="icon" src="felipe_icon.png" alt="Felipe's stamp icon" />
    </>
  );
}

export default App;
