import './AddTodoForm.css'

const AddTodoForm = () => {
    return (
        <div className="addTodoForm">
            <div>
                <textarea/>
                <div>
                    <button>Add</button>
                    <button>Clear local todos</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodoForm;
