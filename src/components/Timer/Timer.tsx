import React, { useState, useEffect } from "react";

type TimerProps = {
  seconds: number;
};

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (timeLeft > 0) {
      countdown = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return;
    } 
    
      setIsComplete(true);
    //   const audio = new Audio("/beep.mp3");
    //   audio.play();

    return () => clearTimeout(countdown);
  }, [timeLeft]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const timerStyle = {color: isComplete ? "red" : "black",};

  return <div style={timerStyle}>{formatTime(timeLeft)}</div>;
};

export default Timer;
