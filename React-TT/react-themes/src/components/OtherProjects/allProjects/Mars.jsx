import { useState } from "react";
import { MarsData } from "./MarsData";
import './Mars.css'


export default function Mars() {
    const [cam, setCam] = useState(null)
    const [date, setDate] = useState(null)

  return (
    <div className="Mars-container load">
        <nav className ='nav-bar'><h1><b>NASA MARS PHOTOS</b></h1></nav>
        <div className='date-filter'>
            {/* <input onChange={(e)=>setDate(e.target.value)} type='date' min='2011-11-26'/> */}
        </div>
      <div className="Mars-data-container">
        <div className="Mars-filter-container">
          <ul className="filter-items">
            <li onClick={()=>setCam('FHAZ')}>Front Hazard Avoidance</li>
            <li onClick={()=>setCam('RHAZ')}> Rear Hazard Avoidance</li>
            <li onClick={()=>setCam('MAST')}>Mast</li>
            <li onClick={()=>setCam('NAVCAM')}>Navigation Cameras</li>
          </ul>
        </div>
        <div className="Mars-main-data">
          <MarsData cam={cam} date={date} />
        </div>
      </div>
    </div>
  );
}
