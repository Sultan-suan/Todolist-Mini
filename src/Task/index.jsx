export const Task = ({task, tasks, setTasks, index, dark}) => {
    const handleComplete = (e) => {
        e.preventDefault()
        let newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }
    const saveToLocal = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    }
    const handleRemove = (e) => {
        e.preventDefault()
        let newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
        saveToLocal("myTodoTask", newTasks);
    }
    return (
        
    )
}