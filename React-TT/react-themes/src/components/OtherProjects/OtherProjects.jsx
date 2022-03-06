import { useEffect, useState } from 'react'
import '../OtherProjects/OtherProjects.css'
import {CountDown} from './allProjects/Countdown'
import Mars from './allProjects/Mars'
import TaskTracker from './allProjects/TaskTracker'
import { TodoList } from './allProjects/TodoList'


{/* <JapaneseBreakdown/> TODO */}

export default function OtherProjects(){
    const [project, setProject] = useState()
    const [isMounted, setIsMounted] = useState(true)
    const [title,setTitle] = useState(true)

    function handleMount(index){
        setProject(index)
        setTitle(false)
    }
    function handleTransition(){
        setProject()
        setIsMounted(true)
    }

    function Project(props){
        const list = ['Simple Countdown', 'Mars Photos', 'Task Tracker']
        switch(props.project){
            case 0:
                return(
                    <>
                        <CountDown/>
                    </>
                )
            case 1:
                return(
                    <>
                        <Mars/>
                    </>
                )
          
            case 2:
                return(
                    <>
                        <TaskTracker/>
                    </>
                )
            default:
                return(
                    <div className='project-list load'style={{transition: '1.5s ease'}}>
                        {list.map((p, idx)=>{
                            return(
                                <div onClick={()=>handleMount(idx)} className='projectItem'>
                                    {p}
                                </div>
                            )
                        })}
                    </div>
                )
        }
    }

    return(
        <div className='otherprojects-temp-container'>

        <div className='other-projects-container'>
            <h1 style={isMounted === false ? {color: 'gray',opacity: 0, transition: '1.5s ease'}: {color: 'gray'}} onTransitionEnd={()=> setTitle(true)}  className='coming-soon'>{title === true ?'Select a Project' : 'Back To Projects Overview'}</h1>
            <button style={title === true ? {opacity: '0' , transition: '1s ease', pointerEvents:'none'} : {opacity: '1'}} className='back-btn' onClick={()=>setIsMounted(false)}>Back</button>
        </div>
        <div style={isMounted === false ? {opacity: 0, transition: '1.5s ease'}: null}
           onTransitionEnd={isMounted=== false? ()=> handleTransition(): null} 
        >
        <Project project={project}/>
        </div>
        </div>
    )
}
// 