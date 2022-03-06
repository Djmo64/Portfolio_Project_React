import './Task'


export function TodoList(){
    return(
        <div>
            <h2>TODO LIST</h2>
    <form>
        <input type="text" class="todo-input"/>
        <button class="todo-btn" type="submit">
            <i class="fas fa-plus-square"></i>
        </button>
    </form>
    <div class="todo-container">
        <ul class="todo-list">
            
        </ul>
    </div>
        </div>
    )
}