import React from 'react';
import { BACKGROUNG_IMG_URL } from '../utils/constants';

const BackgroundImg = () => {
  return (
    <div className=''>
      <img
        className="w-full h-full object-cover "
        // className="w-full h-lvh object-cover hidden sm:block"
        alt="Background"
        src={BACKGROUNG_IMG_URL}
      />
    </div>
  );
}

export default BackgroundImg;
