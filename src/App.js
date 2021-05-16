import React, { useState, useEffect } from 'react';
import Player from './components/Player';
import './App.scss';

function App() {
  const [songs] = useState([
    {
      title: 'Holiday',
      artist: 'Wizkid',
      img_src: './images/music_images/wizkid2.jpeg',
      music_src: './music/holiday.mp3',
    },
    {
      title: 'Davido',
      artist: '1 Milli',
      img_src: './images/music_images/davido3.jpg',
      music_src: './music/1_milli.mp3',
    },
    {
      title: 'Wizkid',
      artist: 'Joro x Photo (DJ Pakx remix',
      img_src: './images/music_images/wizkid3.webp',
      music_src: './music/joro_photo.mp3',
    },
    {
      title: 'Sekkle Down (feat. J Hus)',
      artist: 'Burna Boy',
      img_src: './images/music_images/burna_boy.jpg',
      music_src: './music/sekkle_down.mp3',
    },
    {
      title: 'Master Groove',
      artist: 'Wizkid',
      img_src: './images/music_images/wizkid.webp',
      music_src: './music/master_groove.mp3',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App container-fluid h-100 pt-3">
      <Player
        songs={songs}
        nextSongIndex={nextSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        currentSongIndex={currentSongIndex}
      />
    </div>
  );
}

export default App;
