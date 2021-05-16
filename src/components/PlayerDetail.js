import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = ({ song: { title, artist, img_src } }) => {
  return (
    <>
      <div>
        <img className="img-fluid" style={{'maxHeight': '300px'}} src={img_src} alt="music Image" />
      </div>
      <h4> {title} </h4>
      <h5> {artist} </h5>
    </>
  );
};

PlayerDetail.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    img_src: PropTypes.string,
  }),
};

export default PlayerDetail;
