import React from 'react';
import { BACKGROUNG_IMG_URL } from '../utils/constants';
import Footer from './footer/Footer';

const BackgroundImg = () => {
  return (
    <div className="">
      <img
        className="w-full h-lvh object-cover hidden sm:block"
        alt="Background"
        src={BACKGROUNG_IMG_URL}
      />
    </div>
  );
}

export default BackgroundImg;
