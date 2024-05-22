//rfec -> crea  la estructura de un componente de manera rapida
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskList( ) {
  const {tasks} = useContext(TaskContext);


  if (tasks.length === 0) {
    return <div>
      <h1 className="text-white text-4xl font-bold text-center"  > No hay tarea
      </h1>
      </div>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
