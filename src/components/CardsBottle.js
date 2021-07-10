import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsBottle() {

  const dragToUnicorn = () => {
    const unicorn = document.getElementById('unicorn')
    if(unicorn) {
      window.scroll({
        top: unicorn.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  const dragToFlat = () => {
    const flat = document.getElementById('flat')
    if(flat) {
      window.scroll({
        top: flat.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div id="product" className='cards'>
      <h2>OUR</h2>
      <h1><b>PRODUCT</b></h1>
      <h2><b>Bottle</b></h2>
      <div className="cards__banner">
        <img
          className='cards__product'
          alt=""
          onClick={dragToUnicorn}
          src='/images/unicorn-1.svg'
        />
        <img
          className='cards__product'
          alt=""
          onClick={dragToFlat}
          src='/images/flat-1.svg'
        />
      </div>
      <div id="unicorn" className='cards__container'>
        <h2>Unicorn Bottle</h2>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src='images/img-9.jpg'
              text='30 ml'
            />
            <CardItem
              // src='images/img-2.jpg'
              text='60 ml Short'
            />
            <CardItem
              // src='images/img-3.jpg'
              text='60 ml'
            />
            <CardItem
              // src='images/img-3.jpg'
              text='100 ml'
            />
          </ul>
        </div>
      </div>
      <div id="flat" className='cards__container'>
        <h2>Flat Bottle</h2>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src='images/img-9.jpg'
              text='30 ml'
            />
            <CardItem
              // src='images/img-2.jpg'
              text='60 ml Short'
            />
            <CardItem
              // src='images/img-3.jpg'
              text='60 ml'
            />
            <CardItem
              // src='images/img-3.jpg'
              text='100 ml'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsBottle;