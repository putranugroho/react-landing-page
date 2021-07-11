import React from 'react';
import './Cards.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function CardsCap() {
  const unicornCaps = [
    'images/caps/unicorn/CAPS_UNI-1.png',
    'images/caps/unicorn/CAPS_UNI-2.png',
    'images/caps/unicorn/CAPS_UNI-3.png',
    'images/caps/unicorn/CAPS_UNI-3_RGB.png',
    'images/caps/unicorn/CAPS_UNI-3_POPG.png',
    'images/caps/unicorn/CAPS_UNI-4.png',
    'images/caps/unicorn/CAPS_UNI-POP.png',
    'images/caps/unicorn/CAPS_UNI-RYG.png'
  ];

  const flatCaps = [
    'images/caps/flat/Flat_1.png',
    'images/caps/flat/Flat_2.png',
    'images/caps/flat/Flat_3.png',
    'images/caps/flat/Flat_4.png'
  ];

  return (
    <div className='cards'>
      <img
        className='cards__header'
        alt=""
        src='/images/our-product-caps.png'
      />
      <div className="caps__break"></div>
      <div className='cards__container'>
        <img
          className='cards__title'
          alt=""
          src='/images/caps-unicorn.png'
        />
      </div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[2]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[3]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[4]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[5]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[6]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={unicornCaps[7]} />
            </div>
          </div>
        </Fade>
      </div>
      <div className='cards__container'>
        <img
          className='cards__title'
          alt=""
          src='/images/caps-flat.png'
        />
      </div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={flatCaps[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={flatCaps[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={flatCaps[2]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={flatCaps[3]} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default CardsCap;