import React from 'react';

function HashTimeline() {

  return (
    <>
      <h3 className='title'>Hashmasks 2-Year Anniversary Video</h3>
      <p className='description'>Work alongside the Hashmask core team to storyboard and execute the 2-year anniversary video, showcasing the timeline of the events and the importance of the collection in the digital art-collectible ecosystem</p>
      <div className='innerGrid'>
        <video
          src="img/year/2023/hashtimeline_1.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
        </div>
    </>
  );
}

export default HashTimeline;