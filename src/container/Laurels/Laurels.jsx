import React from 'react';
import { images } from '../../constants';

import './Laurels.css';

const Laurels = () => (
  <div className='app_laurels app__bg'>
    <div className='app_laurels-overlay'>
      <img className='app__laurels-logo' src={images.logo} alt="logo_image" />
      <div className='app__laurels-wrapper'>
        <div className='app__laurels-left'>
          <div className='app_laurels-top'>
            <p>Awards & recognition</p>
            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_479-167646)">
            <path d="M33.5016 9.5C37.0849 9.5 40 7.48129 40 4.99995C40 2.51861 37.0849 0.5 33.5016 0.5C30.1122 0.5 27.3221 2.30637 27.03 4.6018H22.3529V3.6552L0 3.6552V6.34446L22.353 6.34446V5.39798H27.0301C27.3223 7.69352 30.1122 9.5 33.5016 9.5ZM21.4898 5.54839L0.863293 5.54839V4.45161H21.4898V5.54839ZM27.8662 4.99995C27.8662 2.95778 30.3944 1.2964 33.5017 1.2964C36.6091 1.2964 39.1372 2.95778 39.1372 4.99995C39.1372 7.04222 36.6091 8.7037 33.5017 8.7037C30.3944 8.7037 27.8662 7.04222 27.8662 4.99995Z" fill="#DCCA87"/>
            </g>
            <defs>
            <clipPath id="clip0_0_479-167646">
            <rect width="40" height="9" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
            </svg>
            <h2>Our Laurels</h2>
          </div>
        </div>
        <div className='app__laurels-right'>
          <img className='app__laurels-g' src={images.laurels} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Laurels;
