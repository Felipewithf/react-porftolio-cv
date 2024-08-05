import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function SaaSRedesign() {

  return (
    <>
      <h3 className='title'>Product Redesign</h3>
      <p className='description'>The previous product (MVP), designed by a team of developers, focused on functionality. The next iteration needed to emphasize user experience and forecast product growth. I led this redesign, working with developers, designers and domain experts. <br /><br /> The designs were created in Figma, along with various Adobe products to produce unique and bespoke assets.</p>
      <div className='innerGrid comparisonSliders'>
          <p className='title'>landing page</p>
            <div className='labels'>
              <p>before</p>
              <p>after</p>
            </div>
            
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/year/2022/saasredesign_1a.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/year/2022/saasredesign_1b.png" alt="Image two" />}
            style={{
              width: '100%',
            flexGrow: 1,
            backgroundColor: 'white',
            }}
            />

            <p className='title'>product overview</p>
              <div className='labels'>
                <p>before</p>
                <p>after</p>
              </div>
              
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/year/2022/saasredesign_2a.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/year/2022/saasredesign_2b.png" alt="Image two" />}
            style={{
              width: '100%',
            flexGrow: 1,
            backgroundColor: 'white',
            }}
            />

            <p className='title'>detail product view</p>
              <div className='labels'>
                <p>before</p>
                <p>after</p>
              </div>
              
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/year/2022/saasredesign_3a.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/year/2022/saasredesign_3b.png" alt="Image two" />}
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

export default SaaSRedesign;