import { useState } from "react";
import "../allProjects/AllProjects.css";
import "../allProjects/TaskTracker.css";
import {DayTimer} from "./SimpleTimer";

export default function TaskTracker(props) {


  const [todoList,setTodoList] = useState([]);
  const [task, setTask] = useState('');
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  
  
  function setValues(v1, v2){
    setVal1(v1);
    setVal2(v2);
  }
  

  return (
    <div className="Task-Tracker-container load">

      <div className="todo-list-container">
        <form>
          <input type="text" class="todo-input" value={task} onChange={(e)=>setTask(e.target.value)}/>
          <button class="todo-btn" onClick={addTodo}>
            <i class="fas fa-plus-square"></i>
          </button>
        </form>

        <div class="todo-container">
          <ul class="todo-list" onClick={listAction}>
            {todoList.length > 0 ? todoList : <li style={{color: 'gray', textAlign: 'center'}}>Add Daily Tasks!</li>}
            </ul>
        </div>
           
      </div>
      <div className="task-meter-container">
        <div className="meter-grid">
              Daily Grid
              <div className="grid-blocks">

              </div>
        </div>
        <DayTimer getValues={(hours, mins) => setValues(hours, mins)}/>
      </div>
      
        
    </div>
   
  );


  


function addTodo(e){
    e.preventDefault()

    const todo = (
      <div className="todo">
        <li className="todo-item">
            {task}
        </li>
        <button className="check-btn">
          <i className="fas fa-check"></i>
        </button>
        <button className="remove-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    )
    setTodoList([...todoList,todo]);
    setTask('')
}

function listAction(e){
    const className = e.target;

    if(className.classList[0] === 'remove-btn'){
        const parent = className.parentElement;
        parent.classList.add('vanish');
        parent.addEventListener('transitionend', ()=>{
        parent.remove();
        });
        
    }
    if(className.classList[0] === 'check-btn'){
        const parent = className.parentElement;
        parent.classList.toggle("completed");
    } 

}
}
