import { useEffect, useState } from "react";
import "../allProjects/AllProjects.css";
import "../allProjects/TaskTracker.css";
import {DayTimer} from "./SimpleTimer";

export default function TaskTracker(props) {


  const [task, setTask] = useState('');
  const [taskItem, setTaskItem] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [addBlockInfo, setaddBlockInfo] = useState([{Task: '', Block: ''}])
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const hourblocks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  
  
  function setValues(v1, v2){
    setVal1(v1);
    setVal2(v2);
  }

  const addToList = (Item) => {
    setTaskList([...taskList,{Task : Item, Index: ''}])
   
}
// replace todo with list
  const List = taskList.map((tsk,indx) => {
    tsk.Index = indx
    return(
    <div id={`${tsk.Task}${tsk.Index}`} className="todo">
        <li className="todo-item">
            {tsk.Task}
        </li>
        <button onClick={()=> taskToCurrentBlk(tsk.Task, tsk.Index)} className="check-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={()=>removeFromList(tsk.Task, tsk.Index)} className="remove-btn"> 
          <i className="fas fa-trash"></i>
        </button>
      </div>)
  })
  useEffect(()=>{
    // console.log(taskList)
    console.log(addBlockInfo)
  }, [taskList, addBlockInfo])
  
  const blocks = hourblocks.map((blk, index) =>{
    const blocktime = 24 - val1;
    const blocktime2 = 60 - val2;
    const blockpercent = (blocktime2 / 60) * 100;

    
    
    return(
      blocktime === blk ? 
      <div  key={index}id={`blocktive`} className={'blocks pulse'}>
        <p  className="block-act" style={{background : `linear-gradient(to top, white ${blockpercent}%, transparent 0%)`}}>
          {blk}
          {addBlockInfo[0].Task !== '' ?<p>{addBlockInfo[0].Task}</p>: null}
          
        </p>
      </div>
      :
      <div key={index} className={blocktime < blk ? "blocks" : "blocks-full"}>
        {blk}
      </div>
    ) 
  })

  
  return (
    <div className="Task-Tracker-container load">

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
      <div className="task-list-container">
        <p style={{color: 'gray', flexDirection : 'column'}}>{taskList.Task}</p>
      </div>
        
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
  
  addBlockInfo[0].Task === '' && addBlockInfo[0].Block === '' ? setaddBlockInfo([{Task: task, Block: blk}]) : setaddBlockInfo([...addBlockInfo, {Task: task, Block: blk}])
  
  const block = document.getElementById(`blocktive`)
  block.style.background = `gold`
  
  
}
function tasktoclickedblock(task, blk){

}

function removeFromList(Item, idx){
  const Index = taskList.findIndex(tl => tl.Task === Item)
  setTaskList(taskList.filter(tskl => { return tskl.Index !== Index && tskl.Task !== Item}))
  // console.log(Item,Index, taskList.filter(tskl => { return tskl.Index !== idx && tskl.Task !== Item}), taskList)
 
}
}
