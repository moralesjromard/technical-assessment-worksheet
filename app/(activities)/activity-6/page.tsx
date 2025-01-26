"use client";

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

interface User {
  id: number;
  avatar: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  employment: {
    title: string;
  };
}

const Activity6Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await fetch(
        "https://random-data-api.com/api/users/random_user?size=20"
      );
      const userData = await res.json();
      setUsers(userData);
      setIsLoading(false);
      console.log(userData);
    } catch (error) {
      console.log("Failed to fetch users:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-y-auto">
      <div className="flex flex-col max-w-screen-xl">
        <div className="flex flex-wrap gap-4 justify-center p-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full md:max-w-sm bg-gray-800/30 rounded-lg overflow-hidden shadow-lg transform border border-white/10"
            >
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-400">@{user.username}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {user.employment.title}
                </p>
                <p className="text-sm text-gray-400 mt-1">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
        {isLoading && (
          <div className="h-full w-full flex justify-center items-center">
            <Loader className="size-10 text-blue-500 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Activity6Page;
