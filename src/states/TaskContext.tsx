import { useState , useContext } from 'react'
import taskContext from './tasks'

// type of React Prop
export type reactProp = {
  children : React.ReactNode
}

// type of ToDo
export type Task = {
  id:string,
  task:string,
  completed : boolean,
  createdAt: Date
}

// Type of ToDO context
export type TaskContext = {
  TASK: Task[];
  handleAddTask:(task:string)=>void,
  handleToggleTask:(id:string)=>void,
  deleteTask:(id:string)=>void,
  deleteAll():void
}

const TaskContext = ({children}:reactProp) => {

  const [TASK, setTask] = useState<Task[]>(()=>{
    const data = localStorage.getItem("tasks") || "[]"
    return JSON.parse(data)
  })

  const handleAddTask = (task:string)=>{
  setTask((prev)=>{
    const newTask:Task[] = [
      {
        id:Math.random().toString(),
        task,
        completed:false,
        createdAt: new Date()
      },
      ...prev
    ]
    localStorage.setItem("tasks",JSON.stringify(newTask))
    return newTask
    })
  } 

  const handleToggleTask = (id:string) =>{
     setTask((prev)=>{
      const newTask = prev.map((taks)=>{
        if(task.id === id){
          return {...task,completed : !task.completed}
        }
        return task
      })
      localStorage.setItem("tasks",JSON.stringify(newTask))
      return newTask
     })
    }
    
    const deleteTask = (id:string) =>{
      setTask((prev)=>{
        const newTask = prev.filter((task)=>task.id !== id)
        localStorage.setItem("task",JSON.stringify(newTask))
      return newTask
    })
  }

  const deleteAll = () =>{
    setTask([])
    localStorage.removeItem("task")
  }


  return (
    <taskContext.Provider value={{TASK,handleAddTask,handleToggleTask,deleteTask,deleteAll}}
    >
      {children}
    </taskContext.Provider>
  ) 
}

export default TaskContext

// eslint-disable-next-line react-refresh/only-export-components
export const useToDos = () =>{
  const todosConsumer = useContext(taskContext);
  if(!todosConsumer){
    throw new Error ("useTodos used outside of Provider")
  }
  return todosConsumer
}