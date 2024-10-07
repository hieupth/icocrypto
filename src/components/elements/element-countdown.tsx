import React, { useState, useEffect } from "react";

interface CountdownProps {
  title: string;
  percent: string;
  caption: string;
  subtitle: string;
  endDate: string; 
}

const Countdown: React.FC<CountdownProps> = ({ title, percent, caption, subtitle, endDate }) => {
  const end = new Date(endDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const time = end - now;

      if (time < 0) {
        clearInterval(interval); 
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((time % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className="row justify-content-around gutter-vr-30px">
      <div className="col-sm-4 col-md-6 col-lg-4 col-xl-5">
        <div className="status-info">
          <h6 className="title title-xxs tc-default status-title ttu">{title}</h6>
          <h3 className="fz-3 fw-3 status-percent">{percent}</h3>
          <div className="fz-8">{caption}</div>
        </div>
      </div>
      <div className="col-sm-8 col-md-6 col-lg-7 col-xl-7">
        <div className="status-countdown float-sm-end">
          <h6 className="title title-xxs tc-default status-title ttu">{subtitle}</h6>
          <div className="countdown justify-content-center justify-content-sm-start countdown-s3 countdown-s3-alt" data-date={endDate}>
            <div className="countdown-item">
              <span className="countdown-time">{timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days}</span>
              <span className="countdown-text">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-time">{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</span>
              <span className="countdown-text">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-time">{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</span>
              <span className="countdown-text">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-time countdown-time-last">{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</span>
              <span className="countdown-text">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
