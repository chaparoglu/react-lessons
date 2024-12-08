import { useState } from "react"
import AddTodoComponent from "../components/AddTodoComponent"
import { FaArrowAltCircleRight, FaClosedCaptioning, FaTimes } from "react-icons/fa";

function Todos() {

    const [todos, setTodos] = useState([]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const removeItem = (itemId) =>{
        console.log(itemId);
    }

    const updateItemStatus = (itemId) => {
        const updatedTodos = [...todos];
        const updatedTodoItem = updatedTodos.findIndex(todo => todo.id == itemIt);
        
        
    }

    const pendingTodos = todos.filter((todo) => todo.status == 0);
    const inProgressTodos = todos.filter((todo) => todo.status == 1);
    const doneTodos = todos.filter((todo) => todo.status == 2);


    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <h3 className="text-success">Görüləcək işlər</h3>
            </div>
            <div className="col-md-12">
                <AddTodoComponent onCreateTodo={createTodo} />
            </div>
            <div className="col-md-12 mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            {
                                pendingTodos.length > 0 ?
                                    pendingTodos.map((item, index) => (
                                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                            <p>
                                                {item.subject}
                                            </p>
                                            <div>
                                                <button className="btn btn-sm btn-info text-white me-2" onClick={()=>updateItemStatus(item.id)}>
                                                    <FaArrowAltCircleRight />
                                                </button>
                                                <button className="btn btn-sm btn-danger text-white" onClick={()=>removeItem(item.id)}>
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                    :
                                    <li className="list-group-item">
                                        <strong className="text-danger">Tapşırıq əlavə edilməyib</strong>
                                    </li>
                            }
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            {
                                inProgressTodos.length > 0 ?
                                    inProgressTodos.map((item, index) => (
                                        <li className="list-group-item" key={index}>
                                            <p>
                                                {item.subject}
                                            </p>
                                            <div>
                                                <button className="btn btn-sm btn-info text-white me-2">
                                                    <FaArrowAltCircleRight />
                                                </button>
                                                <button className="btn btn-sm btn-danger text-white">
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                    :
                                    <li className="list-group-item">
                                        <strong className="text-info">Tapşırıq əlavə edilməyib</strong>
                                    </li>
                            }
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            {
                                doneTodos.length > 0 ?
                                    doneTodos.map((item, index) => (
                                        <li className="list-group-item" key={index}>
                                            <p>
                                                {item.subject}
                                            </p>
                                            <div>
                                                <button className="btn btn-sm btn-info text-white me-2">
                                                    <FaArrowAltCircleRight />
                                                </button>
                                                <button className="btn btn-sm btn-danger text-white">
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                    :
                                    <li className="list-group-item">
                                        <strong className="text-success">Tapşırıq əlavə edilməyib</strong>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos