import React from 'react';
import './SocialMedia.css';
import InstagramEmbed from 'react-instagram-embed';

function SocialMedia() {
  return (
    <div id="social" className='socialmedia'>
      <a href='https://www.instagram.com/trahsingokaryan.id/'>
        <img
          className='social__header'
          alt=""
          src='/images/instagram-title.png'
        />
      </a>
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
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;