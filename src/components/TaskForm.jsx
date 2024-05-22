import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubimit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setDescription("");
    setTitle("");
  };

  return (
   <div className="max-w-md mx-auto">
     <form onSubmit={handleSubimit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="bg-gray-300 p-3 w-full mb-2"
        autoFocus
      />
      <br />

      <textarea
        placeholder="Escribe la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-gray-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-3 py-1 text-white rounded-md" >Guardar</button>
    </form>
   </div>
  );
}

export default TaskForm;
