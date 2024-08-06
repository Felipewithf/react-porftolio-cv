import React from 'react';

function Pixoku() {
  const redirectToPixoku = () => {
    window.open("https://pixoku.fun", "_blank");
  };

  return (
    <>
      <h3 className='title'>Pixoku: A New Twist On Sudoku</h3>
      <p className='description'>I created Pixoku, a Sudoku-like game, from scratch using a MySQL database, Node.js, and Express.js. For the front end, I utilized Handlebars and Bootstrap for the CSS library. The design draws inspiration from flat papercutout aesthetics combined with the theme of ancient Greek warriors and mythology. This is reflected in the vibrant colors and typography, as well as the iconography and tone of the text messages. My goal in developing Pixoku was to break away from the monotonous design of typical web interfaces and game dynamics, offering a fresh, engaging experience that merges classical themes with modern design principles.</p>
     
      <div className='innerGrid'>
        <img src='img/year/2024/pixoku_1.png' alt='' />
        <img src='img/year/2024/pixoku_2.png' alt='' />
        <img className='fullwidth' src='img/year/2024/pixoku_7.gif' alt='' />
        <p className='description'>The profile page was designed to reflect ancient greek structures; the mirror mirror page is my take on the leaderboard of common games, with the twist that would only know who is better than you rather than seen all the players in the leaderboard, perhaphs this will entice more players to find an attenianble rival to surpass.</p>
        
        <img src='img/year/2024/pixoku_3.png' alt='' />
        <img src='img/year/2024/pixoku_4.png' alt='' />
       
        <p className='description'>Practice mode allows you to test the game functionalities without recording your time score, the game provides an intuitive interface that warns you if there are conflicting pieces in the board, practice mode only sets 5 missing pieces while the main game is 36 pieces missing.</p>
        <img className='fullwidth' src='img/year/2024/pixoku_8.gif' alt='' /> 
           
         <button onClick={redirectToPixoku} className="redirect-button">
           <h4>Visit Live Website</h4>
         </button>
        
        </div>
    </>
  );
}

export default Pixoku;