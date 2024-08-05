import React from 'react';

function Faceless() {

  return (
    <>
      <h3 className='title'>Faceless: A new meeting tool</h3>
      <p className='description'>Design the "coming soon" website for Faceless, a startup from Japan that uses AI to match your facial features to 2D avatars, allowing you to protect your identity online while showcasing your avatar to your friends.</p>
      <div className='innerGrid'>
        <video
          src="img/year/2023/faceless_3.mov"
          controls
          loop
          className="video-player-full"
        ></video>
        <p className='description pb-4'>The design uses smooth animations to transition between the three key offerings on both desktop and mobile. A responsive design was implemented for the mobile version, replacing static hover effects with carousel-style animations.</p>
        <video
          src="img/year/2023/faceless_2.mov"
          controls
          loop
          className="video-player"
        ></video>

        
        </div>
    </>
  );
}

export default Faceless;