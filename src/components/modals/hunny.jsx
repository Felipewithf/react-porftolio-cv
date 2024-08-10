import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Hunny() {

  return (
    <>
      <h3 className='title'>3D Rendering: Hunny Pot</h3>
      <p className='description'>Designed and developed a detailed 3D model of the iconic 'Hunny Pot' from <em>Winnie the Pooh</em> entirely from scratch. This project was a personal initiative to refine my 3D modeling skills, utilizing Blender v2.78 exclusively. The process involved creating high-quality assets that faithfully capture the charm and nostalgia of the original with a photorealism twist, showcasing my ability to recreate recognizable objects with precision.</p>
      
      <div className='innerGrid'>
      <img src='img/year/2017/hunny_cover.png' alt='' />
      <img src='img/year/2017/hunny_12.jpg' alt='' />
      <img src='img/year/2017/hunny_13.jpg' alt='' />
      <img src='img/year/2017/hunny_14.jpg' alt='' />
      </div>

      <div className='innerGrid comparisonSliders'>
      <p className='title'>Process Work</p>
            <div className='labels'>
              <p>wireframe</p>
              <p>planes</p>
            </div>
            
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/year/2017/hunny_1.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/year/2017/hunny_2.png" alt="Image two" />}
            style={{
              width: '100%',
            flexGrow: 1,
            backgroundColor: 'white',
            }}
            />

            <div className='labels pt-5'>
              <p>texture mapping</p>
              <p>scenic lighting</p>
            </div>
            
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/year/2017/hunny_3.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/year/2017/hunny_4.png" alt="Image two" />}
            style={{
              width: '100%',
            flexGrow: 1,
            backgroundColor: 'white',
            }}
            />

<div className='labels pt-5'>
              <p>planes</p>
              <p>pre-rendering</p>
            </div>
            
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/year/2017/hunny_2.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/year/2017/hunny_5.png" alt="Image two" />}
            style={{
              width: '100%',
            flexGrow: 1,
            backgroundColor: 'white',
            }}
            />            
        </div>
    </>
  );
}

export default Hunny;