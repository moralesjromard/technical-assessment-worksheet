"use client";

import { useState } from "react";
import { FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";

const Activity5Page = () => {
  const [tasks, setTasks] = useState([
    {
      task: "Task 1",
      isCompleted: false,
    },
  ]);
  const [task, setTask] = useState<string>("");

  const createTask = (e: FormEvent, task: string) => {
    e.preventDefault();

    setTasks([...tasks, { task, isCompleted: false }]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <main className="w-full h-full flex justify-center items-center p-6">
      <div className="w-full max-w-screen-lg bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="bg-gray-800/50 p-5 border-b border-white/10">
          <h1 className="text-2xl font-semibold text-white">To-Do List</h1>
        </div>

        <form
          onSubmit={(e) => createTask(e, task)}
          className="flex p-5 gap-4 justify-center items-center border-b border-white/10"
        >
          <input
            type="text"
            className="w-full bg-gray-800/50 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition border-white/10"
            placeholder="What needs to be done?"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button
            disabled={task.length === 0}
            type="submit"
            className="disabled:bg-blue-500/40 flex justify-center items-center bg-blue-500 p-2 rounded-lg text-base font-medium px-4 h-[45px] disabled:cursor-not-allowed hover:bg-blue-500/80 transition"
          >
            <Plus className="size-6 mr-2" /> Add
          </button>
        </form>

        <ul className="divide-y divide-white/10 max-h-[600px] scrollbar overflow-y-auto">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`
              flex justify-between items-center w-full divide-y divide-white/10 p-5
              ${task.isCompleted && "line-through"}
              `}
            >
              <div className="flex items-center gap-6">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTaskCompletion(index)}
                  className="w-5 h-5 text-blue-500 border-gray-600 rounded focus:ring-blue-500"
                />
                <p>{task.task}</p>
              </div>
              <button
                type="button"
                onClick={() => deleteTask(index)}
                className="p-2 rounded-xl hover:bg-red-500/10 transition border-none shadow-none"
              >
                <Trash2 className="size-6 text-red-500/60" />
              </button>
            </li>
          ))}
        </ul>

        {/* Empty task list */}
        {tasks.length === 0 && (
          <div className="flex justify-center items-center p-5">
            <p className="text-gray-400 text-sm italic">🎉 No task yet!</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default Activity5Page;
