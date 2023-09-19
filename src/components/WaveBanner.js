import React from 'react';

const BannerWave = ({ image, topWave, bottomWave, meet, top, imageStyle = {} }) => (
  <section
    className={`meetting ${top ? 'meeting-top' : 'meeting-bottom'}`}
    alt={meet}
    style={{
      backgroundImage: `url(${image})`,
      ...imageStyle
    }}
  >
    {topWave && <img alt="wave" className="top-wave md:hidden" src={topWave} />}
    {bottomWave && <img alt="wave" className="bottom-wave md:hidden" src={bottomWave} />}
  </section>
);

export default BannerWave;
