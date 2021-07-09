import React from 'react';
import './Cards.css';

function CardsCap() {
  return (
    <div className='cards'>
      <h2>OUR</h2>
      <h1><b>PRODUCT</b></h1>
      <h2><b>Caps</b></h2>
      <div className="caps__break"></div>
      <div className='cards__container'>
        <h2><b>Caps </b>Unicorn</h2>
        <div className='cards__wrapper'>
          <img
            className='cards__items'
            alt=""
            src='/images/unicaps-1.png'
          />
        </div>
      </div>
      <div className='cards__container'>
        <h2><b>Caps </b>Flat</h2>
        <div className='cards__wrapper'>
          <img
            className='cards__items'
            alt=""
            src='/images/flatcaps-1.png'
          />
        </div>
      </div>
    </div>
  );
}

export default CardsCap;