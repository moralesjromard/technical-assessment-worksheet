import { login, signup } from "@/actions/auth";

const LoginPage = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-2xl">
      <form className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-800/70 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-200"
          >
            Password
          </label>
          <input
            className="w-full bg-gray-800/70 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="space-y-4">
          <button
            formAction={login}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-600/80 text-white font-medium rounded-lg transition duration-200 shadow-lg"
          >
            Log in
          </button>

          <button
            formAction={signup}
            className="w-full py-3 px-4 bg-transparent hover:bg-gray-700/50 text-white font-medium rounded-lg border border-white/10 transition duration-200"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
