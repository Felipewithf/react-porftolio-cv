import React from 'react';

function UIforAI() {

  return (
    <>
      <h3 className='title'>Conceptual UI For AI Guidance</h3>
      <p className='description'>Collaborate with AI researchers and hospital administrators to design a conceptual user interface that visualizes the impact of AI models on pre-operative and post-operative surgical safety and efficiency at the hospital.</p>
      <div className='innerGrid'>
        <p className='description'>Using AI, we can scan and analyze a long history of complex medical notes to extract key terms and concepts relevant to the current situation, such as medical history, surgical history, medications, and drug interactions.</p>
        <img src='img/year/2020/uiforai_1.png' alt='' />
        <p className='description'>AI optimizes resources by improving room availability, scheduling bookings and modifications, and selecting the ideal team to perform the surgery based on availability and covariates like urgency, probability of complications, and team familiarity.</p>
        <img src='img/year/2020/uiforai_2.png' alt='' />
        <p className='description'>At the end of the procedure, AI provides a real-time summary, suggesting the patient's probability of complications based on events observed during the procedure. Key events are saved in the patient's EMR, enhancing patient disposition accuracy and providing suggested patient orders.</p>
        <img src='img/year/2020/uiforai_4.png' alt='' />
        <img src='img/year/2020/uiforai_3.png' alt='' />
        <img src='img/year/2020/uiforai_5.png' alt='' />
        <img src='img/year/2020/uiforai_6.png' alt='' />
       
        <p className='description'>Compilation videos use for marketing and conference presentations.</p>
         <video
          src="img/year/2020/uiforai_7.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
         <video
          src="img/year/2020/uiforai_8.mp4"
          controls
          loop
          className="video-player-full"
        ></video>
        </div>
    </>
  );
}

export default UIforAI;