"use client";

import { FormEvent, useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import {
  createTask,
  deleteTask,
  getTasksByUserId,
  updateTaskCompletion,
} from "@/actions/task";

interface User {
  id: string;
  app_metadata: {
    provider?: string;
    providers?: string[];
  };
  user_metadata: {
    [key: string]: any;
  };
  aud: string;
  created_at: string;
  email?: string;
  phone?: string;
  role?: string;
  updated_at?: string;
}

interface Task {
  id: string;
  content: string;
  user_id: string;
  is_done: boolean;
}

interface TodoListProps {
  user: User;
}

const TodoList = ({ user }: TodoListProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const getTasks = async () => {
    try {
      const data = await getTasksByUserId(user.id);
      setTasks(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleCreateTask = async (
    e: FormEvent,
    content: string,
    userId: string
  ) => {
    e.preventDefault();
    try {
      const newTask = await createTask({ content, userId });

      if (!newTask.success) {
        throw new Error("Task not created");
      }

      setTask("");
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      const deletedTask = await deleteTask({ id: taskId });

      if (!deletedTask) {
        throw new Error("Task not deleted");
      }

      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskCompletion = async (isDone: boolean, taskId: string) => {
    try {
      const updatedTask = await updateTaskCompletion(isDone, taskId);
      if (!updatedTask) {
        throw new Error("Task not updated");
      }

      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, is_done: !isDone } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();

    return () => {
      setTasks([]);
    };
  }, [user]);

  return (
    <div className="w-full bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 overflow-hidden">
      <div className="bg-gray-800/50 p-5 border-b border-white/10">
        <h1 className="text-2xl font-semibold text-white">To-Do List</h1>
      </div>

      <form
        onSubmit={(e) => handleCreateTask(e, task, user.id)}
        className="flex p-5 gap-4 justify-center items-center border-b border-white/10"
      >
        <input
          type="text"
          className="w-full bg-gray-800/50 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
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
            ${task.is_done && "line-through"}
            `}
          >
            <div className="flex items-center gap-6">
              <input
                type="checkbox"
                checked={task.is_done}
                onChange={() => toggleTaskCompletion(task.is_done, task.id)}
                className="w-5 h-5 text-blue-500 border-gray-600 rounded focus:ring-blue-500"
              />
              <p>{task.content}</p>
            </div>
            <button
              type="button"
              onClick={() => handleDeleteTask(task.id)}
              className="p-2 rounded-xl hover:bg-red-500/10 transition border-none shadow-none"
            >
              <Trash2 className="size-6 text-red-500/60" />
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <div className="flex justify-center items-center p-5">
          <p className="text-gray-400 text-sm italic">🎉 No task yet!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
