import React, { useRef, useState } from "react";
import './player.css'

const AudioPlayer = ({audioSrc}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");

    const togglePlay = () => {
        if (isPlaying) {
        audioRef.current.pause();
        } else {
        audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        const current = audio.currentTime;
        const total = audio.duration;

        setProgress((current / total) * 100);
        setCurrentTime(formatTime(current));
        if (!isNaN(total)) {
        setDuration(formatTime(total));
        }
    };

    const handleProgressClick = (e) => {
        const barWidth = e.target.offsetWidth;
        const clickX = e.nativeEvent.offsetX;
        const audio = audioRef.current;
        const newTime = (clickX / barWidth) * audio.duration;
        audio.currentTime = newTime;
    };

    const skipTime = (seconds) => {
        const audio = audioRef.current;
        audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="audio-player">
            <audio
                ref={audioRef}
                src={audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => setDuration(formatTime(audioRef.current.duration))}/>
            
            <div className="progress-bar" onClick={handleProgressClick}>
                <div className="progress" style={{ width: `${progress}%` }}></div>
                <div className="circle-progress" style={{left: `${progress}%`}} ></div>
            </div>
            
            <div className="time-info">
                <span id="current">{currentTime}</span>
                <span id="duration">{duration}</span>
            </div>

            <div className="controls">
                <button onClick={() => skipTime(-10)} className="skip-btn">-10s</button>
                <button onClick={togglePlay} className="play-btn">
                {isPlaying ? <i className="ri-pause-circle-line"></i> : <i className="ri-play-circle-line"></i>}
                </button>
                <button onClick={() => skipTime(10)} className="skip-btn">+10s</button>
            </div>
        </div>
    );
    };

export default AudioPlayer;
