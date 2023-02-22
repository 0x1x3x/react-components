import "./style.css";
import React, { useState, useRef, useEffect } from "react";
import { FaBackward, FaPlay, FaPause, FaForward } from "react-icons/fa";

import { tracksData } from "./tracks.jsx";

const Player = () => {
  //state
  const [tracks] = useState(tracksData);
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const [CurrentTime] = useState(0);

  //ref
  const audioPlayer = useRef(); // audio component
  const progressBar = useRef(); // progress bar

  //effect
  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);
        setTimeRemaining(_duration);
        setTimeElapsed(_elapsed);
      }, 100);
    }
  }, [isPlaying]);

  function calcTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);
      return `${minutes}:${seconds}`;
    } else {
      return "00:00";
    }
  }

  //control buttons
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [isPlaying]);

  const nextTrack = () => {
    const index = tracks.findIndex((x) => x.title === currentTrack.title);
    if (index === tracks.length - 1) {
      setCurrentTrack(tracks[0]);
    } else {
      setCurrentTrack(tracks[index + 1]);
    }
    audioPlayer.current.currentTime = 0;
  };

  const prevTrack = () => {
    const index = tracks.findIndex((x) => x.title === currentTrack.title);
    if (index === 0) {
      setCurrentTrack(tracks[tracks.length - 1]);
    } else {
      setCurrentTrack(tracks[index - 1]);
    }
    audioPlayer.current.currentTime = 0;
  };

  //progress bar
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / timeRemaining) * 100}%`
    );
    CurrentTime(progressBar.current.value);
  };

  return (
    <>
      <div class="player">
        <audio src={currentTrack.url} ref={audioPlayer} id="audio"></audio>
        <div class="cover">
          <img src={currentTrack.image} alt="Tracks Cover" />
        </div>
        <h1 class="text-center font-bold text-[21px]">{currentTrack.title}</h1>
        <p class="text-center">{currentTrack.artist}</p>
        <div class="slider">
          <input
            type="range"
            class="bar"
            value={timeElapsed}
            max={timeRemaining}
            ref={progressBar}
            onChange={changeRange}
          />
          <span class="text-xs">{calcTime(timeElapsed)}</span>
          <span class="text-xs absolute right-0">
            {calcTime(timeRemaining - timeElapsed)}
          </span>
        </div>
        <div class="w-[60%] flex justify-between items-center m-auto mt-5">
          <button class="btn">
            <FaBackward class="text-[#575857]" onClick={prevTrack} />
          </button>
          <button class="play">
            {!isPlaying ? (
              <FaPlay onClick={togglePlayPause} />
            ) : (
              <FaPause onClick={togglePlayPause} />
            )}
          </button>
          <button class="btn">
            <FaForward class="text-[#575857]" onClick={nextTrack} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Player;
