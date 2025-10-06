import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./App.css";

import masterProjects from "./projects";

function App() {
  // State to track the hovered image's data-header and the corresponding year
  const [hoveredInfo, setHoveredInfo] = useState({ year: null, header: "" });
  const [modalData, setModalData] = useState({ isOpen: false, imageSrc: "" });
  const [topicFilter, setTopicFilter] = useState(null);
  const [view, setView] = useState("portfolio");

  let displayProjects = masterProjects;

  if (topicFilter) {
    displayProjects = masterProjects.filter((project) =>
      project.topic.includes(topicFilter)
    );
  }

  // Event handlers for mouse enter and leave
  const handleMouseEnter = (header) => {
    setHoveredInfo({ year: null, header });
  };
  const handleMouseLeave = () => {
    setHoveredInfo({ year: null, header: "" });
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
    // First, handle the modal hash (if any) from the URL
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (hash) {
      const cleanedHash = hash.replace(/[^a-z]/g, ""); // Clean the hash value
      for (let j = 0; j < masterProjects.length; j++) {
        const { name, component } = masterProjects[j];
        const cleanedName = name.toLowerCase().replace(/[^a-z]/g, ""); // Clean the name
        if (cleanedHash === cleanedName) {
          openModal(name, component);
          break;
        }
      }
    } else {
      // If no hash is present, then handle the filter query
      const urlParams = new URLSearchParams(window.location.search);
      const filter = urlParams.get("f"); // Get 'f' parameter

      if (filter) {
        setTopicFilter(filter); // Set the filter in the state
        // Remove the filter query from the URL (no page reload)
        const urlWithoutFilter = window.location.href.split("?")[0];
        window.history.replaceState({}, "", urlWithoutFilter);
      }
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-3" id="introduction">
          <div className="sticky-column">
            <img src="felipe_logo.svg" alt="Felipe Sarmiento's logo" />

            <div>
              {/* <h1 style={{ paddingBottom: "5px", paddingTop: "15px" }}>
                Art Director & <br></br> Design Leader
              </h1> */}
              <p>
                Empowering teams to create innovative and objective experiences
                through physical events and digital products.
              </p>
              <ul className="nav-list">
                <li
                  className={view === "portfolio" ? "active" : ""}
                  onClick={() => setView("portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className={view === "values" ? "active" : ""}
                  onClick={() => setView("values")}
                >
                  Core Values
                </li>
              </ul>
            </div>
            <div className="socials">
              {/* <a href="https://github.com/Felipewithf" target="_blank">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="24"
                >
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
              </a> */}
              <a
                href="https://www.linkedin.com/in/felipewithf/"
                target="_blank"
              >
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
            {view === "portfolio" && (
              <div className="yearholder">
                <div className="year-header">
                  <div className="dividerLine"></div>
                  <div className="yearholder-headertext">
                    <p className="header-only-text">{hoveredInfo.header}</p>
                    <p>Selected {topicFilter} Projects</p>
                  </div>
                  <div className="dividerLine"></div>
                </div>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{
                    350: 2,
                    750: 3,
                    900: 3,
                    1200: 3,
                  }}
                  className="artwork-group"
                >
                  <Masonry gutter="10px">
                    {displayProjects
                      // .filter((artwork) => artwork.selected)
                      .map(({ name, component, cover_img, alt }) => (
                        <img
                          src={cover_img}
                          alt={alt}
                          key={name}
                          onMouseEnter={() => handleMouseEnter(name)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => openModal(name, component)}
                        />
                        // <ImageComponent src={cover_img} alt={alt} component={component} key={name} theme={theme} mouse={handleMouseEnter}/>
                      ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            )}
            {view === "values" && (
              <div className="yearholder">
                <div className="year-header">
                  <div className="dividerLine"></div>
                  <div className="yearholder-headertext">
                    <p className="header-only-text">Cover Values</p>
                  </div>
                  <div className="dividerLine"></div>
                  <div className="core-values-container">
                    <div className="core-value-box">
                      <p>Creativity</p>
                      <description>
                        Cross-pollinating ideas from one domain to another is
                        one of my strongest assets. During my Master’s, I
                        combined techniques from design research, accessibility,
                        and sports to create a toolkit for deafblind sport
                        spectators. I have found creativity inspires others by
                        showing there is always a new way forward.
                      </description>
                      <quote>“What if we do it this way?”</quote>
                    </div>
                    <div className="core-value-box">
                      <p>Compassion</p>
                      <description>
                        In the health-tech sector, I helped build AI-powered
                        tools, there I came to recognize that surgeons and
                        hospital administrators weren’t just “end users” they
                        carry fears, doubts, and responsibilities. Compassion
                        for their concerns helped me design experiences that
                        built trust and meaningful change.
                      </description>
                      <quote>
                        “Have empathy for different lived experiences.”
                      </quote>
                    </div>
                    <div className="core-value-box">
                      <p>Curiosity</p>
                      <description>
                        Technology evolves quickly, and I make it a point to
                        keep up by experimenting with new tools and approaches.
                        From blockchain to AI, sports to art, healthcare to
                        education. This willingness to dive into the unknown
                        keeps me ready to apply the latest knowledge to solve
                        challenges in meaningful ways.
                      </description>
                      <quote>
                        “The more I learn, the more I realize how much more
                        there is to explore.”
                      </quote>
                    </div>
                    <div className="core-value-box">
                      <p>Justice</p>
                      <description>
                        I am passionate about finding ways to balance power
                        dynamics and ensure fairness for everyone involved. In
                        sports, that means thinking about how athletes can be
                        valued at all stages of their careers even after
                        retirement so they can continue to contribute to the
                        sport ecosystem. Even outside of sports, I have always
                        asked how power and opportunity can be distributed more
                        fairly.
                      </description>
                      <quote>
                        “Are we giving fair value to all the stakeholders?”
                      </quote>
                    </div>
                    <div className="core-value-box">
                      <p>Change</p>
                      <description>
                        Change brings disruption, but also opportunities. Moving
                        to different countries,learning a new tool, going back
                        to school on multiple occasions. These actions show my
                        willingness to step into change to find new
                        opportunities. If I want to drive change, I need to
                        change myself, be ok with disruption, and be ready to
                        embrace the opportunities that reveal themselves.
                      </description>
                      <quote>“Change is inevitable.”</quote>
                    </div>
                    <div className="core-value-box">
                      <p>Fun</p>
                      <description>
                        Fun is the value that keeps my other values grounded. I
                        consider this close to my life philosophy. It’s a way of
                        approaching challenges. Chaos, disruption, or tough
                        changes can be reframed as part of the “game” of life.
                        Fun is always the spark and the glue altogether: it
                        keeps me energized and this energy is contagious to the
                        people around me.
                      </description>
                      <quote>
                        “Life is meant to be enjoyed, not just endured”
                      </quote>
                    </div>
                    <div className="tldr-container">
                      <h3>TL;DR</h3>
                      <description>
                        I lead with <strong>creativity</strong>, solving
                        challenges in unexpected ways.{" "}
                      </description>
                      <description>
                        I act with <strong>compassion</strong>, designing
                        solutions that are inclusive.{" "}
                      </description>
                      <description>
                        I stay <strong>curious</strong>, ready to relearn as the
                        world evolves.{" "}
                      </description>
                      <description>
                        I pursue <strong>justice</strong>, so every stakeholder
                        has a voice and value.{" "}
                      </description>
                      <description>
                        I embrace <strong>change</strong>, as a space for growth
                        and transformation.
                      </description>
                      <description>
                        I infuse <strong>fun</strong>, because it breaks
                        barriers and connects us.
                      </description>
                    </div>
                  </div>
                </div>
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
