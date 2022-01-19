import { useEffect, useState } from 'react';


export function DayTimer(props){
    const [timerdays, setTimerDays] = useState();
    const [timerhours, setTimerHours] = useState();
    const [timermins, setTimerMins] = useState();
    const [timersecs, setTimerSecs] = useState();

    let interval;

    const startTimer = () =>{
    const d = new Date();
    const year = d.getFullYear();
    const day = d.getDate();
    const month = d.getMonth();
 
     const currentDate = new Date(`${year}-${month + 1}-${day + 1}`).getTime();
    

     
 
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
             props.getValues(timerhours, timermins)
         }
        });
     }
 
     useEffect(() => {
         
         startTimer();
         return () => {
            clearInterval(interval)
         }
         
     })
     

     return (
         <div style={{color:'gray'}}>
            {timerhours < 10 ? '0' + timerhours : timerhours}
            : {timermins < 10 ? '0' + timermins :timermins}
            : {timersecs < 10 ? '0' + timersecs :timersecs} 
         </div>
     )

}