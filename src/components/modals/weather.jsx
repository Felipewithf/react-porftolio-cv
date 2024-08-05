import React from 'react';

function Weather() {
  const redirectToPixoku = () => {
    window.open("https://felipewithf.github.io/WeatherApp/", "_blank");
  };
  return (
    <>
      <h3 className='title'>Anime Weather Dashboard</h3>
      <p className='description'>I coded my personalized weather dashboard using APIs from OpenWeather and AI-generated imagery. Each city displays a background image that matches the weather in an anime style.</p>
     
      <div className='innerGrid'>
        <img src='img/year/2023/weather_1.png' alt='' />
        <img src='img/year/2023/weather_2.png' alt='' />
        <img src='img/year/2023/weather_3.png' alt='' />
        <img src='img/year/2023/weather_4.png' alt='' />
 
        <img src='https://github.com/Felipewithf/WeatherApp/raw/main/assets/img/s18.png' alt='' />
        <button onClick={redirectToPixoku} className="redirect-button">
           <h4>Visit Live Website</h4>
         </button>

      </div>
    </>
  );
}

export default Weather;