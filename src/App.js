import './App.css'
import {useEffect, useState} from "react";
import Switch from "react-switch";
import { BsSunFill, BsMoonStarsFill } from 'react-icon/bs';
import {TaskContainer} from "./TaskContainer/index.jsx";


function App() {
    const [tasks, setTasks] = useState([])
    const [dark, setDark] = useState(true)

    useEffect(() => {
        let myTodo = localStorage.getItem('myTodoTasks');
        if (myTodo) {
            setTasks(JSON.parse(myTodo))
        }
    }, [])

    return (
        <div className={`${dark ? 'darkMode-App' : "lightMode-App"} App`}>
            <div
                className={`${dark ? 'darkMode-app-title-container' : "lightMode-app-title-container"} app-title-container`}>
                <h1 className="app-title"> Todo-Mini</h1>
            </div>

            <Switch
                checked={dark}
                onChange={() => setDark(!dark)}
                unCheckedIcon={<div className='check-sun-btn'><BsSunFill size={18}/></div>}
                checkedIcon={<div className='check-moon-btn'>
                    <BsFillMoonStarsFill size={18}/></div>}/>
            <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark}/>
        </div>
    );
}

export default App
