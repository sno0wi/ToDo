import './App.css'
import TodoList from "./components/TodoList.tsx";
import AddTodoForm from "./components/AddTodoForm.tsx";

const App = () => {
    return (
        <div className="app_wrapper">
            <div>
                <header className="header">
                    <h3>ToDo App</h3>
                </header>
            </div>
            <TodoList/>
            <AddTodoForm/>
        </div>
    )
}

export default App;
