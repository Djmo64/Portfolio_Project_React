import { useEffect, useState } from "react";
import "../allProjects/AllProjects.css";
import "../allProjects/TaskTracker.css";
import {DayTimer} from "./SimpleTimer";

export default function TaskTracker(props) {


  const [task, setTask] = useState('');
  const [taskItem, setTaskItem] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const hourblocks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const [blockTasks, setblockTasks] = useState([])
  const blocktime = 24 - val1;
  const [blockInfo, setBlockInfo] = useState([{Task: [],Display : '' }])
  const [isOpen, setisOpen] = useState(false)
  const [modalTaskArr, setmodalTaskArr] = useState([])

  useEffect(()=>{
    if(blockTasks.length === 0){
      setblockTasks(array())
      console.log('added!')
    }
    console.log(modalTaskArr)
  }, [taskList,modalTaskArr])


  const array = () =>{
     const arr = []
    for(let x = 0; x < 25; x++){
    arr.push({Task: [], Index: x})
  } 
  return arr
}

function addmodalTaskActions(tsk){
  if(modalTaskArr.length > 0){
  modalTaskArr.map((t)=>{
    if(t === tsk){
     const modalTasks = modalTaskArr.filter((currentTask) => {return currentTask !== t})
     setmodalTaskArr(modalTasks)
    }else{
     setmodalTaskArr([...modalTaskArr, tsk])
    }
    return modalTaskArr
  }
  )
} else setmodalTaskArr([...modalTaskArr, tsk])
  
}

const modalTasks = taskList.map((tsk, idx) =>{

    return(
      <li onClick={()=>addmodalTaskActions(tsk.Task)}>{tsk.Task}</li>
    )
})

  function TaskModal(props){
    
    switch(props.option){
      case 'add':
        return(
          <div className="modal-background">
               <div className="modal-container">
                 <p onClick={()=> setisOpen(!isOpen)} className="modal-close">
                   X
                 </p>
                 <h2>Select Task(s) to add to Time Block:</h2>
                 <div className="modal-tasks">
                   <ul>{modalTasks}</ul>
                   <button>Add</button>
                 </div>
               </div>
             </div>
        )
      case 'remove':
        return(
          <div className="modal-background">
         <div className="modal-container">
           <p className="modal-close">
             X
           </p>
         </div>
       </div>
        )
        case 'confirm':
          return(
            <div className="modal-background">
            <div className="modal-container">
              <p onClick={()=> setisOpen(!isOpen)} className="modal-close">
                X
              </p>
              <h2>You Sure?</h2>
              <div className="modal-tasks">
                <button>Yes</button>
                <button>No</button>
              </div>
            </div>
          </div>
          )
        default : console.log('none')
    }
    
    // return(
      
    //  props.option === 'add' ? 
    //   <div className="modal-background">
    //     <div className="modal-container">
    //       <p onClick={()=> setisOpen(!isOpen)} className="modal-close">
    //         X
    //       </p>
    //       <h2>Select Task(s) to add to Time Block:</h2>
    //       <div className="modal-tasks">
    //         <ul>{modalTasks}</ul>
    //         <button>Add</button>
    //       </div>
    //     </div>
    //   </div>
    //   :
    //   <div className="modal-background">
    //     <div className="modal-container">
    //       <p className="modal-close">
    //         X
    //       </p>
    //     </div>
    //   </div>
    // )
  }

  function setValues(v1, v2){
    setVal1(v1);
    setVal2(v2);
  }

  const addToList = (Item) => {
    setTaskList([...taskList,{Task : Item, Index: ''}])
   
}
// replace todo with list
  const List = taskList.map((tsk,indx) => {
    // const blocktime = 24 - val1;
    tsk.Index = indx
    return(
    <div id={`${tsk.Task}${tsk.Index}`} className="todo">
        <li className="todo-item">
            {tsk.Task}
        </li>
        <button onClick={()=> taskToCurrentBlk(tsk.Task, blocktime)} className="check-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={()=>removeFromList(tsk.Task, tsk.Index)} className="remove-btn"> 
          <i className="fas fa-trash"></i>
        </button>
      </div>)
  })
 
  
  const blocks = hourblocks.map((blk, index) =>{
    // const blocktime = 24 - val1;
    const blocktime2 = 60 - val2;
    const blockpercent = (blocktime2 / 60) * 100;

    
    
    return(
      blocktime === blk  ? 
      <div onClick={()=> showTasks(blk)}  key={index}id={`blocktive`} className={'blocks pulse'}>
        <p  className="block-act" style={{background : `linear-gradient(to top, white ${blockpercent}%, transparent 0%)`}}>
          {blk}
            {blockTasks[blk].Task.length > 0 ? 'yes' : null}
          
        </p>
      </div>
      :
      <div onClick={()=> showTasks(blk)} key={index} className={blocktime < blk ? "blocks" : "blocks-full"}>
        {blk}
        {blockTasks.length > 0 ?
          blockTasks[blk].Task.length > 0 ? 1 : null
        : null}
        {/* style={blockTasks[blk].Task.length > 0 ? {background: 'gold'}: {background: 'transparent'} } */}
      </div>
    ) 
  })

  
  return (
    <div className="Task-Tracker-container load">
      {isOpen === true ?  <TaskModal option='add'></TaskModal> : null}
      <div className="todo-list-container">
        <form>
          <input type="text" className="todo-input" value={taskItem} onChange={(e)=>addValues(e.target.value)}/>
          <button className="todo-btn" onClick={addTodo}>
            <i className="fas fa-plus-square"></i>
          </button>
        </form>

        <div className="todo-container">
          <ul className="todo-list" onClick={listAction}>
            {List.length > 0 ? List : <li style={{color: 'gray', textAlign: 'center'}}>Add Daily Tasks!</li>}
            </ul>
        </div>
           
      </div>
      <div className="task-meter-container">
        <div className="meter-grid">
              Daily Grid
              <div className="grid-blocks">
                {blocks}
              </div>
        </div>
        <DayTimer getValues={(hours, mins) => setValues(hours, mins)}/>
      </div>
      
        {blockTasks.length > 0 ?
        <div className="blockTasks-container">
          <div className="block-tasks-and-actions">
          <div className="finished-tasks-header">Finished Tasks for hour {blockInfo[0].Display}:</div>
          <ul>
          {blockInfo[0].Task.map((tsk) => {
            return <li style={{color: 'gray', textAlign: 'start'}}>{tsk}</li>
          })}
         </ul>
         </div>
         <div className="task-action-buttons">
           <button onClick={()=>addCompTasks(taskList,blockInfo[0].Display)}>Add Completed Task</button>
           <button>Remove Task</button>
         </div>
         </div>
        : null
        }
    </div>
   
  );


  


function addTodo(e){
    e.preventDefault()
    addToList(task)
    setTaskItem('');
    
}

function listAction(e){
    const className = e.target;
    

    // if(className.classList[0] === 'remove-btn'){
    //     const parent = className.parentElement;
    //     parent.classList.add('vanish');
    //     parent.addEventListener('transitionend', ()=>{
    //     parent.remove();
          
        
    //     });
        
    // }
    if(className.classList[0] === 'check-btn'){
        const parent = className.parentElement;
        parent.classList.add("completed");
    } 

}
function addValues(val){
  setTask(val);
  setTaskItem(val);
}

function taskToCurrentBlk(task, blk){
  
  blockTasks[blk].Task = [...blockTasks[blk].Task, task]
  setBlockInfo([{Task: blockTasks[blk].Task, Display: blk}])
  
  const block = document.getElementById(`blocktive`)
  block.style.background = `gold`
}
function addCompTasks(tasks,idx){
  setisOpen(!isOpen)
}

function showTasks(blk){
  setBlockInfo([{Task: blockTasks[blk].Task, Display: blk}])
}
function tasktoclickedblock(task, blk){
  blockTasks[blk].Task = [...blockTasks[blk].Task, task]
  //needs modal
}

function removeFromList(Item, idx){
  const Index = taskList.findIndex(tl => tl.Task === Item)
  setTaskList(taskList.filter(tskl => { return tskl.Index !== Index && tskl.Task !== Item}))
 
}
}
