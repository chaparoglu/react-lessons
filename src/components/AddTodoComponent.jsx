import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddTodoComponent({onCreateTodo}) {

    const [todo, setTodo] = useState('');
    const createTodo = () => {
        if(!todo) return;
        const request = {
            'id':Math.floor(Math.random(0,100) * 999999999),
            'subject': todo,
            'status': 0
        };
        onCreateTodo(request);
        setTodo('');
    }

    return (
            <div className="row">
                <div className="col-md-9">
                    <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} className="form-control" placeholder="Tapşırıq daxil et" style={{ border: 'none', outline: 'none', borderBottom: '1px solid lightgray' }} name="" id="" />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-sm w-100" onClick={createTodo} style={{ backgroundColor: "#ffc600", height: "35px" }}>
                        <FaPlus />
                        <span className="ms-3">
                            Əlavə et
                        </span>
                    </button>
                </div>
            </div>
    );
}

export default AddTodoComponent;
