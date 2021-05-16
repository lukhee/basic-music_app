import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

const PlayerControl = ({ skipSong, setIsPlaying, isPlaying }) => {
  return (
    <div className="music-control my-4">
      <button className="btn btn-light" onClick={() => skipSong(true)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="btn btn-warning mx-2"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="btn btn-light" onClick={() => skipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControl;
