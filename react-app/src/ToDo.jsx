import { useEffect, useState } from "react"
import TaskDisplay from "./taskDisplay";

export default function ToDo(){

    const [toDoList, setToDoList] = useState([]);
    const [name, setName] = useState("");
    const [task, setTask] = useState("");

    function addData()
    {
        setToDoList( (prevItems) => [...prevItems, {name: name, task: task}]);
        setName("");
        setTask("");
    }

    function submitHandler(e)
    {
        e.preventDefault();
        if (name === "" || task === ""){
            return;
        }
        addData();
    }

    return(
        <div >
            <form className="to-do-form">
                <input  className="to-do-input" type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="votre nom"/>
                <input  className="to-do-input" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="votre tâche ici"/>
                <button className="submit-btn" onClick={submitHandler}>valider</button>
            </form>
            <TaskDisplay taskList={toDoList}/>
        </div>
        
    )

}