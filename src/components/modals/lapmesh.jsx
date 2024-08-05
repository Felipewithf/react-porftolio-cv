import React from 'react';

function LapMesh() {

  return (
    <>
      <h3 className='title'>AI Explanability Through Visual Layering</h3>
      <p className='description'>Collaborate with AI researchers at a medtech company to visualize the results of live AI algorithms that analyze and describe events during laparoscopic procedures. Explainable AI is crucial for assessing the quality of new AI models as it bridges the knowledge gap between physicians and AI outputs. These visualizations, created in After Effects using real video data and expected AI model outputs, were presented at conferences and used for internal alignment and discussions on the future of the AI models.</p>
      <div className='innerGrid'>
      <p className='description'>AI models can recognize tools, organs, and their interactions during specific parts of the procedure, while also assigning a score to these interactions.</p>
        <video
          src="img/year/2020/lapmesh_1.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
<p className='description'>Using computer vision, the computer can perform faster, more accurate, and simultaneous visual searches for events of interest during procedures. In this case, the computer is able to detect Methylene Blue, indicating that the anastomosis is not sufficiently closed.</p>
        <video
          src="img/year/2020/lapmesh_2.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
<p className='description'>AI algorithms provide scores based on completed tasks, remaining tasks, and their corresponding severity and delay in completion. The goal is to offer visual feedback on how these scores vary during the procedure.</p>
        <video
          src="img/year/2020/lapmesh_3.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
        <p className='description'>Compilation video use for marketing and conference presentations.</p>
         <video
          src="img/year/2020/lapmesh_4.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
        </div>
    </>
  );
}

export default LapMesh;