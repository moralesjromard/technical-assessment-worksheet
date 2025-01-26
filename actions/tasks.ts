"use server";

import { createClient } from "@/utils/supabase/server";

export const getTasksByUserId = async (userId: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createTask = async ({
  content,
  userId,
}: {
  content: string;
  userId: string;
}) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tasks")
    .insert([{ content, user_id: userId }]);

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
    message: "Task has been added!",
  };
};

export const deleteTask = async ({ id }: { id: string }) => {
  const supabase = await createClient();

  const { error } = await supabase.from("tasks").delete().match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
    message: "Task has been deleted!",
  };
};

export const updateTaskCompletion = async (isDone: boolean, id: string) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from("tasks")
    .update({ is_done: !isDone })
    .match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
    message: "Task status has been updated",
  };
};
