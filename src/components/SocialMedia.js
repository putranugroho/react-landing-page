import React from 'react';
import './SocialMedia.css';

function SocialMedia() {
  return (
    <div id="social" className='socialmedia'>
      <h2>Instagram</h2>
      <h1><b>@Trahsingokaryan.id</b></h1>
      <div className='socialmedia__container'>
        <div className='socialmedia__wrapper'>
          <div className="socialmedia__images">
            <img
              className='socialmedia__image'
              alt=""
              src='images/mask-group-1.svg'
            />
            <img
              className='socialmedia__image'
              alt=""
              src='images/mask-group-2.svg'
            />
            <img
              className='socialmedia__image'
              alt=""
              src='images/mask-group-3.svg'
            />
          </div>
          <div className="socialmedia__images">
            <img
              className='socialmedia__image'
              alt=""
              src='images/mask-group-4.svg'
            />
            <img
              className='socialmedia__image'
              alt=""
              src='images/mask-group-5.svg'
            />
            <img
              className='socialmedia__image'
              alt=""
              src='images/mask-group-6.svg'
            />
          </div>
          {/* <ul className='socialmedia__items'>
            <CardItem
              src='images/mask-group-1.svg'
              text='30 ml'
            />
            <CardItem
              src='images/mask-group-2.svg'
              text='60 ml Short'
            />
            <CardItem
              src='images/mask-group-3.svg'
              text='60 ml'
            />
          </ul>
          <ul className='socialmedia__items'>
            <CardItem
              src='images/mask-group-4.svg'
              text='30 ml'
            />
            <CardItem
              src='images/mask-group-5.svg'
              text='60 ml Short'
            />
            <CardItem
              src='images/mask-group-6.svg'
              text='60 ml'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;