import { useState, useEffect } from "react";

export default function Countdown({title, percent, caption, subtitle, endDate}) {
    // Convert endDate to miliseconds
  const end = new Date(endDate).getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
    /**
     *  Update time every second
     */ 
  useEffect(() => {
    const interval = setInterval(() => {
      const time = end - new Date().getTime();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((time % (1000 * 60)) / 1000));
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [end]);
  
    /**
     * Return component.
     */
    return (
        <div className='row justify-content-around gutter-vr-30px'>
            <div className='col-sm-4 col-md-6 col-lg-4 col-xl-5'>
          <div className='status-info'>
            <h6 className='title title-xxs tc-default status-title ttu'>{title}</h6>
            <h3 className='fz-3 fw-3 status-percent'>{percent}</h3>
            <div className='fz-8'>{caption}</div>
          </div>
        </div>
            <div className='col-sm-8 col-md-6 col-lg-7 col-xl-7'>
                <div className='status-countdown float-sm-end'>
              <h6 className='title title-xxs tc-default status-title ttu'>{subtitle}</h6>
              <div
                className='countdown justify-content-center justify-content-sm-start countdown-s3 countdown-s3-alt'
                data-date={endDate}
              >
                <div className='countdown-item'>
                  <span className='countdown-time'>{days < 0 ? '00' : days < 10 ? '0' + days : days}</span>
                  <span className='countdown-text'>Days</span>
                </div>
                <div className='countdown-item'>
                  <span className='countdown-time'>{hours < 0 ? '00' : hours < 10 ? '0' + hours : hours}</span>
                  <span className='countdown-text'>Hours</span>
                </div>
                <div className='countdown-item'>
                  <span className='countdown-time'>{minutes < 0 ? '00' : minutes < 10 ? '0' + minutes : minutes}</span>
                  <span className='countdown-text'>Minutes</span>
                </div>
                <div className='countdown-item'>
                  <span className='countdown-time countdown-time-last'>
                    {seconds < 0 ? '00' : seconds < 10 ? '0' + seconds : seconds}
                  </span>
                  <span className='countdown-text'>Seconds</span>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
  };