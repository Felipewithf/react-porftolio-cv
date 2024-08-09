import React from 'react';

function Hashmaskers() {

  return (
    <>
      <h3 className='title'>Community Directory Website</h3>
      <p className='description'>Community focus project to enable each holder of the NFT hashmasks to creat their community profile to connect with each other.</p>
      <div className='innerGrid'  style={{ textAlign: 'center', width:'100%' }}>
      <iframe
        src="https://luxurious-cylinder-687288-efe8bcdc0.framer.app/"
        style={{ width: '400px', height: '700px', border: 'none' }}
        title="Embedded Website"
        className='border'
      />
      
        {/* <img className="border" src='img/year/2023/hashmaskers_2.png' alt='' />
        <img className="border" src='img/year/2023/hashmaskers_2.gif' alt='' />
        <img className="border" src='img/year/2023/hashmaskers_3.gif' alt='' />
        
       
        <img className="border" src='img/year/2023/hashmaskers_4.png' alt='' /> */}
        

        </div>
    </>
  );
}

export default Hashmaskers;