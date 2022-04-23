import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='container'>
    <div className='footer__card'>
      <div className='footer__content'>
        <div className='footer__header'>
          <p className='footer__title'>Newletter</p>
          <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z" fill="#DCCA87"/>
          </svg>
          <h2 className='footer__paraghraf'>Subscribe to Our Newsletter</h2>
          <p className='footer__desc'>And never miss latest Updates!</p>
        </div>
        <div className='footer__input'>
          <input type="text" placeholder='Email Address' />
          <button>Subcribe</button>
        </div>
      </div>
    </div>
    <div>
      test
    </div>
  </div>
);

export default Footer;
