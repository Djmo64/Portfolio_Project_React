import "../allProjects/AllProjects.css";
import "../allProjects/Task";

export default function TaskTracker(props) {

  return (
    <div className="Task-Tracker-container">

      <div className="todo-list-container">
        <form>
          <input type="text" class="todo-input" />
          <button class="todo-btn" type="submit">
            <i class="fas fa-plus-square"></i>
          </button>
        </form>

        <div class="todo-container">
          <ul class="todo-list"></ul>
        </div>

      </div>
      
    </div>
  );
}
