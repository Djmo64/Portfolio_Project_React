import { useEffect, useState } from 'react'
import '../OtherProjects/OtherProjects.css'
import {CountDown} from './allProjects/Countdown'
import Mars from './allProjects/Mars'
import TaskTracker from './allProjects/TaskTracker'
import { TodoList } from './allProjects/TodoList'
import ImageSlider from './ImageSlider'
import bww1 from '../../assets/photos2/BWW1.png'
import tsw1 from '../../assets/photos2/TSW1.png'
import tswa3 from '../../assets/photos2/TSWA3.png'
import rd4 from '../../assets/photos2/RD4.png'
import tskproj from '../../assets/photos2/Task.png'
import marsproj from '../../assets/photos2/Mars.png'
import cntproj from '../../assets/photos2/count.png'
import {BwwData,TswaData,TswData,RdData} from './allProjects/SliderData'


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
        const list = [  {title:'Beyond Words Workshops', img: bww1},
                        {title:'Tasweiq Digital Marketing',img: tsw1},
                        {title:'Tasweiq Analytics',img: tswa3},
                        {title:'Razing Dawn Blog',img: rd4},
                        {title:'Task Tracker',img: tskproj},
                        {title:'Mars Photos',img: marsproj},
                        {title:'Simple Countdown',img: cntproj} ]
        switch(props.project){
            case 0:
                return(
                    <>
                       <ImageSlider slides={BwwData}/>
                       <div className='proj-info'>
                        <p>Info: Screen shots from internship website created for Beyond Words workshops and retreats.</p>
                        <p>Year: 2019</p>
                        <p>Technology: HTML, CSS</p>
                        <p>Theme: Theme style based on wire frame from company.</p>   
                        </div> 
                    </>
                )
            case 1:
                return(
                    <>
                        <ImageSlider slides={TswData}/>
                        <div className='proj-info'>
                        <p>Info: Screen shots from Ecommerce site made for Taseiq start-up.</p>
                        <p>Year: 2020</p>
                        <p>Technology: React</p>
                        <p>Theme: Theme style based on wire frame from company.</p>   
                        </div>
                    </>
                )
          
            case 2:
                return(
                    <>
                        <ImageSlider slides={TswaData}/>
                        <div className='proj-info'>
                        <p>Info: Screen shots from Ecommerce analytics dashboard made for Taseiq start-up.</p>
                        <p>Year: 2020</p>
                        <p>Technology: React</p>
                        <p>Theme: Theme style based on wire frame from company.</p>   
                        </div>
                    </>
                )
            case 3:
                return(
                    <>
                        <ImageSlider slides={RdData}/>
                        <div className='proj-info'>
                        <p>Info: Screen shots from Blog site contract on Upwork made for Razing Dawn.</p>
                        <p>Year: 2021</p>
                        <p>Technology: WordPress</p>
                        <p>Theme: Theme used from Blog Pixie.</p>   
                        </div>
                    </>
                )
            case 4:
                return(
                    <>
                        <TaskTracker/>
                        <div className='proj-info'>
                        <p>Info: Task Tracker app to optimize daily activities.</p>
                        <p>Year: 2021</p>
                        <p>Technology: React</p>
                        <p>Theme: Original theme.</p>   
                        </div>
                    </>
                )
            case 5:
                return(
                    <>
                        <Mars/>
                        <div className='proj-info'>
                        <p>Info: Photos from mars pulled from NASA API.</p>
                        <p>Year: 2020</p>
                        <p>Technology: React</p>
                        <p>Theme: Original Theme.</p>   
                        </div>
                    </>
                )
            case 6:
                return(
                    <>
                        <CountDown/>
                        <div className='proj-info'>
                        <p>Info: A Simple countdown app.</p>
                        <p>Year: 2018</p>
                        <p>Technology: React</p>
                        <p>Theme: Original Theme.</p>   
                        </div>
                    </>
                )
            default:
                return(
                    <div className='project-list load'style={{transition: '1.5s ease'}}>
                        {list.map((p, idx)=>{
                            return(
                               
                                <div style={{ backgroundImage: `url(${p.img}) ` }} onClick={()=>handleMount(idx)} className='projectItem'>
                                    <h3>{p.title}</h3>
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