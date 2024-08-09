import React from 'react';

function KineticTypo() {
  return (
    <>
      <h3 className='title'>Vaporwave Poems</h3>
      <p className='description'>Kinetic typography using a vaporwave style (glitch effects, grid patterns, and lowtech references). All pieces were created in Adobe After Effects.</p>
      <div className='innerGrid'>
      <div className="video-container">
      <video
          src="img/year/2021/kinetictypo_7.mp4"
          controls
          loop
          className="video-player"
        ></video>
        <video
          src="img/year/2021/kinetictypo_1.mp4"
          controls
          loop
          className="video-player"
        ></video>
        <video
          src="img/year/2021/kinetictypo_3.mp4"
          controls
          loop
          className="video-player"
        ></video>
        <video
          src="img/year/2021/kinetictypo_5.mp4"
          controls
          loop
          className="video-player"
        ></video>
        
         <video
          src="img/year/2021/kinetictypo_9.mp4"
          controls
          loop
          className="video-player"
        ></video>
        <video
          src="img/year/2021/kinetictypo_10.mp4"
          controls
          loop
          className="video-player"
        ></video>
        </div>
        <p className='title'>Sonic Editions 🔈</p>
        <p className='description text-center'>Ensure to turn up the volume to experience this versions as intended</p>
        <video
          src="img/year/2021/kinetictypo_music_1.mp4"
          controls
          loop
          className="video-player-full mb-5"
        ></video>
         <video
          src="img/year/2021/kinetictypo_music_2.mp4"
          controls
          loop
          className="video-player-full mb-5"
        ></video>
        <video
          src="img/year/2021/kinetictypo_music_3.mp4"
          controls
          loop
          className="video-player-full mb-5"
        ></video>
         <video
          src="img/year/2021/kinetictypo_music_4.mp4"
          controls
          loop
          className="video-player-full mb-5"
        ></video>
        <video
          src="img/year/2021/kinetictypo_music_5.mp4"
          controls
          loop
          className="video-player-full mb-5"
        ></video>
      
      </div>
    </>
  );
}

export default KineticTypo;