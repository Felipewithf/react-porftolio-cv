import React from 'react';

function RoundViews() {
  return (
    <>
      <h3 className='title'>Stereographic Projections</h3>
      <p className='description'>Exploration using multiple exposures; each photo is a compilation of over a dozen photos taken from a single pivot point.</p>
      <div className='innerGrid'>
        <img className='halfwidth p-5' src='img/year/2014/roundviews_5.png' alt='roundview photo5' />
        <img className='halfwidth p-5' src='img/year/2014/roundviews_1.png' alt='roundview photo1' />
        <img className='halfwidth p-5' src='img/year/2014/roundviews_2.png' alt='roundview photo2' />
        <img className='halfwidth p-5' src='img/year/2014/roundviews_3.png' alt='roundview photo3' />
        <img className='halfwidth p-5' src='img/year/2014/roundviews_4.png' alt='roundview photo4' />
        
      </div>
    </>
  );
}

export default RoundViews;