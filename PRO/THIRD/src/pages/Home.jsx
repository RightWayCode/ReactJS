import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished,setShowFinished] = useState(false);
    const saveToLS = (data) => {
        localStorage.setItem("todos", JSON.stringify(data));
    }
    useEffect(() => {
        let isTodos = localStorage.getItem("todos");
        if (isTodos) {
            let getTodos = JSON.parse(localStorage.getItem("todos"));
            setTodos(getTodos)
        }
    }, [])
    useEffect(()=>{
        if (todos.length!=0) {
            saveToLS(todos);
        }
    },[todos])

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleEdit = (e) => {
        const id = e;
        const getTodo = todos.find(i => i.id === id);
        setTodo(getTodo.todo);
        handleDelete(id);
    }
    const handleDelete = (e) => {
        const id = e;
        const newArr = todos.filter(key => key.id !== id);
        setTodos(newArr);
    }
    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        setTodo("")
    }

    const handleCheckBox = (e) => {
        const id = e;
        const index = todos.findIndex(key => key.id === id);
        const updatedTodos = [...todos];
        updatedTodos[index] = { ...updatedTodos[index], isCompleted: !updatedTodos[index].isCompleted }
        setTodos(updatedTodos);
    }
    const handleShowFinished = () => {
      setShowFinished(!showFinished)
    }
    

    useEffect(() => {
    }, [showFinished])
    


    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="container mx-auto py-6 select-none">
                <div className="md:w-1/2 space-y-2 bg-emerald-400 mx-auto rounded-3xl p-6">
                    <h1 className="text-3xl">iTask - Manage your todos at one place.</h1>
                    <div className="space-y-2">
                        <div className="text-2xl">Add a todo</div>
                        <div className="flex gap-3">
                            <input type="text" onChange={handleChange} value={todo} className="bg-white px-2 text-lg w-5/6 rounded-xl" id="todo" />
                            <button onClick={handleAdd} disabled={todo.length<=3} className="p-2 cursor-pointer disabled:bg-gray-400 disabled:hover:shadow-none disabled:hover:scale-none hover:scale-110 transform  hover:shadow-blue-800 hover:shadow-md duration-100 w-1/6 font-bold bg-blue-500 text-white rounded-xl">Save</button>
                        </div>
                    </div>
                    <div className="py-2">
                        <label htmlFor="showFinished" className="flex gap-2">
                            <input type="checkbox" checked={showFinished} onChange={handleShowFinished} name="" id="showFinished" />
                            <span>Show finished</span>
                        </label>
                    </div>
                    <hr className="w-5/6 mx-auto border-1" />
                    <div className="space-y-2">
                        <h2 className="text-2xl">Your Todos</h2>
                        <div className="todos space-y-2 max-h-60 overflow-y-auto">
                            {todos.length == 0 && <div>There is no todo yet</div>}
                            {todos.map(item => {
                                return (showFinished || !item.isCompleted) && (
                                    <div key={item.id} className="todo bg-white/70 items-center rounded-xl flex gap-2 justify-between p-2">
                                        <div className="content space-x-2 flex">
                                            <input type="checkbox" checked={item.isCompleted?"checked":""} onClick={() => handleCheckBox(item.id)} />
                                            <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                                        </div>
                                        <div className="action space-x-2">
                                            <button onClick={() => handleEdit(item.id)} className="py-1 px-2 rounded-lg text-white font-bold cursor-pointer bg-blue-500">
                                                <FaEdit />
                                            </button>
                                            <button onClick={() => handleDelete(item.id)} className="py-1 px-2 rounded-lg text-white font-bold cursor-pointer bg-yellow-500">
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
