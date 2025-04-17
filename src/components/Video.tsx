"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import AccentPeople from '../../public/image/accent-people.avif';
import ImgCover from '../../public/image/bg-video.avif';

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
        setIsStarted(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Called when the YouTube player is ready
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target);
  };

  // YouTube player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,         // Do not auto-play on load
      // controls: 0,         // Hide default controls
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="2xl:h-[500px] md:h-[475px] h-[300px] w-full mt-10 m-auto relative o">
      {/* Cover overlay until the video is started */}
      {!isStarted && (
        <div
          className="w-full h-full cursor-pointer  absolute top-0 left-0"
          onClick={togglePlayPause}
        >
          <Image 
            src={ImgCover} 
            alt='Image Banner' 
            width={300} 
            height={200} 
            priority
            className='absolute w-full h-full object-cover object-bottom rounded-md transition-opacity duration-500'/>

          <Image src={AccentPeople} alt='Accent' width={200} height={50} className='absolute -right-6 md:bottom-24 bottom-12 z-30'/>
          <div className="h-full w-full flex items-center justify-center">
            <button
              className="pulse-button z-10 flex items-center gap-4 text-white text-xl font-poppins bg-white rounded-full sm:p-5 p-2 outline outline-1 outline-offset-4"
              id="playButton"
              onClick={togglePlayPause}
              aria-label='button'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[35px] w-[25px]" viewBox="0 0 24 24">
                <path d="M7 6v12l10-6z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* YouTube player */}
      <YouTube
        videoId="iaOv2pNFdEA"
        opts={opts}
        onReady={onPlayerReady}
        className="w-full h-full max-h-[600px] object-cover rounded-md overflow-hidden"
      />
    
    </section>
  );
};

export default Video;
