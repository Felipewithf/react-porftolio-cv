import React from 'react';

function Dolphins() {
  const handleImageClick = () => {
    const pdfWindow = window.open('', '_blank', 'width=900,height=650');
    pdfWindow.document.write(`
      <html>
        <head>
          <title>View PDF</title>
        </head>
        <body>
          <iframe
            src="img/year/2015/dolphins.pdf"
            width="100%"
            height="100%"
            frameBorder="0"
            style="border: none;"
          ></iframe>
        </body>
      </html>
    `);
  };

  return (
    <>
      <h3 className='title'>Social Network Visualization of 62 Dolphins</h3>
      <p className='description'>Data visualization project based on the academic paper by David Lusseau and company, where studies of a bottlenose dolphin community featured long-lasting associations.</p>
     
      <div className='innerGrid'>
      <img className="p-5" src='img/year/2015/dolphins_1.svg' alt='' />
      <p className='description'>The paper describes a small, closed population of bottlenose dolphins living in large, mixed-sex groups in which no permanent emigration/immigration has been observed over the past 7 years.</p>
      <img className="p-5 halfwidth" src='img/year/2015/dolphins_3.svg' alt='' />
      <p className='description'>Both male–male and female–female networks of preferred associates are present, as are long-lasting associations across sexes.All members within the community are relatively closely associated. Fjords are low-productivity systems in which survival may easily require a greater level of co-operation, and hence group stability.Grin's data was the highest recorded observations, where an individual interacted with multiple individuals (from different sexes) during the study</p>
      <img className="p-5 " src='img/year/2015/dolphins_4.svg' alt='' />
      <div className='pdfportal-container' onClick={handleImageClick}>
        <img src='img/year/2015/dolphins_2.png' alt='' />
        <div className='overlay-text'>View Fullscale PDF</div>
      </div> 
  
      </div>
    </>
  );
}

export default Dolphins;