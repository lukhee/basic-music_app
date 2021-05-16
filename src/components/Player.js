import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlayerDetails from './PlayerDetail';
import PlayerControl from './PlayerControl';

const Player = ({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
  nextSongIndex,
}) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (farwards = true) => {
    if (farwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="card text-center col-md-3 col-xs-12 mt-4 bg-secondary text-white m-auto">
      <div className="row g-0">
        <audio src={songs[currentSongIndex].music_src} ref={audioEl}></audio>
        <h4 className="py-2"> Playing Now</h4>
        <PlayerDetails song={songs[currentSongIndex]} />
        <PlayerControl
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          skipSong={skipSong}
        />
        <p className="p-3">
          <strong> NEXT UP:</strong> {songs[nextSongIndex].title} by
          {songs[nextSongIndex].artist}
        </p>
      </div>
    </div>
  );
};

Player.propTypes = {
  songs: PropTypes.array,
  currentSongIndex: PropTypes.number,
  nextSongIndex: PropTypes.number,
  setCurrentSongIndex: PropTypes.func,
};

export default Player;
