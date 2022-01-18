import { useEffect, useState } from 'react';
import '../allProjects/AllProjects.css'


export function CountDown(props){

    
    

    const [timerdays, setTimerDays] = useState();
    const [timerhours, setTimerHours] = useState();
    const [timermins, setTimerMins] = useState();
    const [timersecs, setTimerSecs] = useState();


   let interval;

   const startTimer = () =>{

    const currentDate = new Date("Jan 1,2023").getTime();

      interval = setInterval(()=>{
          const now = new Date().getTime();

          const distance = currentDate - now;

          const days = Math.floor(distance / (24 * 60 * 60 * 1000));
          const hours = Math.floor(distance % (24 * 60 * 60 * 1000)/(1000 * 60 * 60));
          const minutes = Math.floor(distance % ( 60 * 60 * 1000)/(1000 * 60));
          const seconds = Math.floor(distance % (60 * 1000)/(1000));

        if(distance < 0 ){
            clearInterval(interval.current)
        } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMins(minutes);
            setTimerSecs(seconds);
        }
       });
    }

    useEffect(() => {
        startTimer();
    })

    return(
        <div className='countdown-container load'>
            <h1 className='cdt-title'>Count Down Timer</h1>
                <div className='countdown'>
                    
                    <div className='days' style={{textAlign: 'center'}}>
                        <p className='c-time'>
                            {timerdays}
                        </p>
                        <span className='c-title'>
                            Days{/* time title */}
                        </span>
                    </div>
                    <div className='hours' style={{textAlign: 'center'}}>
                        <p className='c-time'>
                            {timerhours}
                        </p>
                        <span className='c-title'>
                            Hours{/* time title */}
                        </span>
                    </div>
                    <div className='mins' style={{textAlign: 'center'}}>
                        <p className='c-time'>
                            {timermins}
                        </p>
                        <span className='c-title'>
                            Minutes{/* time title */}
                        </span>
                    </div>
                    <div className='secs' style={{textAlign: 'center'}}>
                        <p className='c-time'>
                            {timersecs}
                        </p>
                        <span className='c-title'>
                            Seconds{/* time title */}
                        </span>
                    </div>
                </div>
        </div>
    )
}

