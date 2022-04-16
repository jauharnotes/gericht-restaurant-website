import React from 'react';
import video from '../../assets/video-thumbnail.mp4';

import './Intro.css';

const Intro = () => (
  <div className='i__video'>
    <video width='100%' autoPlay={true} controls="controls">
      <source src={video} type='video/mp4' />
      Your browser not support the video tag.
    </video>
  </div>
);

export default Intro;
