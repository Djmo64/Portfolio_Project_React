import '../OtherProjects/OtherProjects.css'
import CountDown from './allProjects/Countdown'
import TaskTracker from './allProjects/TaskTracker'



export default function OtherProjects(){
    return(
        <div className='otherprojects-temp-container'>

        <div className='other-projects-container'>
            {/* snapshots of projects */}
            <h1 style={{color:'gray'}} className='coming-soon'>Coming Soon!</h1>
        </div>
        <div className='project-temp-container'>
            {/* <CountDown/> */}
            {/* <JapaneseBreakdown/> */}
            <TaskTracker/>
        </div>
        </div>
    )
}