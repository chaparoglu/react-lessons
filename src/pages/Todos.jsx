import { useEffect, useState } from "react"
import AddTodoComponent from "../components/AddTodoComponent"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaClosedCaptioning, FaTimes } from "react-icons/fa";

function Todos() {

    const [todos, setTodos] = useState([]);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const removeItem = (itemId) => {
        const updatedTodos = todos.filter(todo => todo.id !== itemId);
        setTodos(updatedTodos);
    }

    const updateItemStatus = (itemId, status) => {
        const updatedTodos = todos.map(todo =>
            todo.id === itemId ? { ...todo, status: status } : todo
        );
        setTodos(updatedTodos);
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
                                                <button className="btn btn-sm btn-info text-white me-2" onClick={() => updateItemStatus(item.id, 1)}>
                                                    <FaArrowAltCircleRight />
                                                </button>
                                                <button className="btn btn-sm btn-danger text-white" onClick={() => removeItem(item.id)}>
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
                                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                            <p>
                                                {item.subject}
                                            </p>
                                            <div>
                                                <button className="btn btn-sm btn-warning text-white me-2" onClick={() => updateItemStatus(item.id, 0)}>
                                                    <FaArrowAltCircleLeft />
                                                </button>
                                                <button className="btn btn-sm btn-info text-white me-2" onClick={() => updateItemStatus(item.id, 2)}>
                                                    <FaArrowAltCircleRight />
                                                </button>
                                                <button className="btn btn-sm btn-danger text-white" onClick={() => removeItem(item.id)}>
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
                                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                            <p>
                                                {item.subject}
                                            </p>
                                            <div>
                                                <button className="btn btn-sm btn-info text-white me-2" onClick={() => updateItemStatus(item.id, 1)}>
                                                    <FaArrowAltCircleLeft />
                                                </button>
                                                <button className="btn btn-sm btn-danger text-white" onClick={() => removeItem(item.id)}>
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
            <div className="alert alert-info mt-4">
                <div className="row">
                    <div className="col-md-4">
                    Görüləcək işlər: <strong>{pendingTodos.length}</strong>
                    </div>
                    <div className="col-md-4">
                    Davam edən: <strong>{inProgressTodos.length}</strong>
                    </div>
                    <div className="col-md-4">
                    Tamamlanmış: <strong>{doneTodos.length}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos