import ReactPlayer from "react-player";

function SoccerSpectatorship() {
  const openMRPpage = () => {
    window.open("http://openresearch.ocadu.ca/id/eprint/2323/", "_blank");
  };
  return (
    <>
      <h3 className="title">
        UX Case Study & Prototype on Soccer Spectatorship
      </h3>
      <p className="description">
        Access to soccer content is achieved mostly through visual cues that
        convey spatial relations between the ball and players, supplemented by
        spoken and/or written commentary. Unfortunately, for nonvisual
        spectators who rely on spoken and written commentary alone, spatial
        information is lost. Fieldwork in Colombia was selected, designed, and
        executed in order to observe a unique tactile sign language system that
        is Co-Designed by actual soccer spectators – a sign language interpreter
        and a Deaf-Blind spectator. Two portable cameras (GoPro Hero3) were used
        to capture the live interpretation inside the stadium. Video analysis
        and field notes revealed how the loss of spatial relations between the
        ball and players is counteracted by employing a combination of props and
        gestures. Iterative prototyping through user testing was developed with
        the aim to design instructions that would teach any visual spectator how
        to interpret the game from visual to tactile modality. The mixture of
        ethnographic observations and user testing sessions exposed key
        properties needed to interpret the game of soccer without using visual
        or aural cues this work can guide designs towards new spectatorship
        experiences.
      </p>
      <div className="innerGrid" style={{ width: "100%" }}>
        <img src="img/year/2018/soccerspectatorship_1.jpg" alt="" />
        <p className="description">
          Ethnographic Fieldwork Field work in Colombia was the primary source
          of data, gathered from video recordings, observations, and informal
          conversations. Small GoPro Hero3 cameras were taken to the stadium:
          one was strapped with a harness to the abdominal area of the author,
          allowing his hands to be free to take notes. This camera was aimed at
          the interpretation, a second camera was held by the assistant from a
          moderate distance, and it was pointed directly at the interpretation.
        </p>
        <p className="title"> Video Analysis</p>
        <p className="description">
          Video Analysis was done through a triangulation of methods: the use of
          video synchronization that has proven successful in the analysis of
          surgical procedure videos (Langerman & Grantcharov, 2017),
          cross-checked with categories from Manuel Stein’s and Dominik Sacha’s
          previous works (2014; 2016; 2017) to determine the extent of the
          interpretation of the soccer game events . Lastly, the comparison of
          the video analysis with annotations captured by the author during the
          field work helped highlight areas of interest.
        </p>

        <ReactPlayer
          url="https://player.vimeo.com/video/385748415?autoplay=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479"
          controls
        />

        <p className="title"> Study of Props & Gestures</p>
        <p className="description">
          The case study observed is based on a tactile gestural system, it
          employs non-visual, non-aural techniques. This tactile system empowers
          Deaf-Blind individuals to participate as spectators at a soccer game.
          The relationship among players, game circumstance and predictive
          models can be conveyed using a gesture system with aid of tactile
          props.
        </p>
        <img src="img/year/2018/soccerspectatorship_2.jpg" alt="" />

        <p className="title"> Develop Prototype</p>
        <p className="description">
          The prototype has multiple objectives: first, it promotes reflection
          on current accessibility issues in sport spectatorship, and challenges
          the common view that soccer spectatorship is solely visual. Second, it
          uses the reiterative phase of the prototype as an inductive stage.
          Last, it develops a high-fidelity, interactive prototype where future
          participants can follow instructions so they can experience the game
          of soccer using their tactile sense.
        </p>
        <img src="img/year/2018/soccerspectatorship_3.jpg" alt="" />
        <img src="img/year/2018/soccerspectatorship_4.jpg" alt="" />

        <p className="title">Evaluation & Feedback</p>
        <p className="description">
          Feedback sessions were developed and organized, with each subsequent
          session designed to be improved upon from the comments from the one
          previous. While each session was different from the other, there were
          commonalities across all sessions, such as semi-structured interviews
          on the clarity of the instructions and their understanding of the
          interpreter-spectator role. The duration of each feedback session was
          approximately 20 to 30 minutes, with a total of 3 sessions within a 2
          week period. Each session had a working prototype of the instructions
          to interpret tactile soccer, and a physical prototype of the wood
          board that represents the boundaries of the field.
        </p>
        <img src="img/year/2018/soccerspectatorship_5.jpg" alt="" />

        <button onClick={openMRPpage} className="redirect-button">
          <h4>View Complete Research Paper</h4>
        </button>
      </div>
    </>
  );
}

export default SoccerSpectatorship;
