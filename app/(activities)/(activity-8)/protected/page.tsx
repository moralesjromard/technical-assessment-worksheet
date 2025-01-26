import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";

import { createClient } from "@/utils/supabase/server";
import { logout } from "@/actions/auth";
import TodoList from "@/components/TodoList";

const ProtectedPage = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="w-full h-full flex justify-center items-center p-6">
      <div className="flex justify-center items-center flex-col gap-6 max-w-screen-lg w-full">
        <header className="flex justify-between items-center gap-4 w-full">
          <p className="text-lg font-medium">{data?.user?.email}</p>
          <button
            onClick={logout}
            className="flex p-3 rounded-xl bg-red-500/40 hover:bg-red-500/30 transition justify-center items-center"
          >
            <LogOut className="size-5 mr-2" />
            Log out
          </button>
        </header>

        <TodoList user={data?.user} />
      </div>
    </main>
  );
};

export default ProtectedPage;
