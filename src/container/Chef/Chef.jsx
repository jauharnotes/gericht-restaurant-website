import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_img c__wrapper_img">
      <img src={images.chef} alt="header_img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className="app__header-h1">What we believe in</h1>
      <div className='c__quote'>
        <svg width="47" height="41" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9137 23.3571C15.3163 23.3571 17.2183 24.1592 18.6198 25.7632C20.1214 27.2669 20.8722 29.2719 20.8722 31.7782C20.8722 34.485 19.9712 36.6404 18.1693 38.2444C16.4675 39.7481 14.115 40.5 11.1118 40.5C7.60809 40.5 4.85517 39.1466 2.85304 36.4399C0.951012 33.7331 0 29.8734 0 24.8609C0 20.3496 1.00107 16.1892 3.00319 12.3797C5.00533 8.46992 8.00852 4.56015 12.0128 0.650374C12.1129 0.550125 12.263 0.5 12.4633 0.5C12.7636 0.5 13.0138 0.650374 13.2141 0.951122C13.4143 1.25188 13.4143 1.5025 13.2141 1.703C8.30884 6.71553 5.85623 12.6303 5.85623 19.4474C5.85623 22.2544 6.35676 24.3095 7.35783 25.6128C8.25879 24.109 10.1108 23.3571 12.9137 23.3571ZM39.0415 23.3571C41.4441 23.3571 43.3461 24.1592 44.7476 25.7632C46.2492 27.2669 47 29.2719 47 31.7782C47 34.485 46.099 36.6404 44.2971 38.2444C42.5953 39.7481 40.2428 40.5 37.2396 40.5C33.7359 40.5 30.983 39.1466 28.9808 36.4399C27.0788 33.7331 26.1278 29.8734 26.1278 24.8609C26.1278 20.3496 27.1289 16.1892 29.131 12.3797C31.1331 8.46992 34.1363 4.56015 38.1406 0.650374C38.2407 0.550125 38.3908 0.5 38.5911 0.5C38.8914 0.5 39.1416 0.650374 39.3419 0.951122C39.5421 1.25188 39.5421 1.5025 39.3419 1.703C34.4366 6.71553 31.984 12.6303 31.984 19.4474C31.984 22.2544 32.4846 24.3095 33.4856 25.6128C34.3866 24.109 36.2386 23.3571 39.0415 23.3571Z" fill="white"/>
        </svg>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.nulla lobortis </p>
      </div>
      <p className="p__opensans" style={{ margin: '0 0 2rem 0' }}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      <h1 className='c__name'>Kevin Luo</h1>
      <p className='c__title'>Chef & Founder</p>
      <img className='c__paraf' src={images.KevinLuo} alt="paraf" />
    </div>
  </div>
);

export default Chef;
