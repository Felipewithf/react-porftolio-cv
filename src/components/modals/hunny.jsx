import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Hunny() {

  return (
    <>
      <h3 className='title'>3D Rendering: Winnie the Pooh Hunny Pot</h3>
      <p className='description'>Created from scratch all the 3D assets to recreate the iconic honey pot "hunny pot" from Winnie the Pooh. This was a personal project to practice my 3D skills using only Blender -v2.78.</p>
      
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