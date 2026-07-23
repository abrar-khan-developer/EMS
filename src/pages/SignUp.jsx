import { useState } from "react";

const SignUp = () => {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now().toString(),
      firstName,
      email,
      password,
      taskCount: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    };


    setFirstName("");
    setEmail("");
    setPassword("");
  };

  return (
    
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="md:border-2 border-emerald-600 p-10 md:p-16 rounded-xl w-[90%] max-w-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="w-full text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"
            type="text"
            placeholder="Enter your name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="w-full mt-4 text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full mt-4 text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="mt-6 mb-4 w-full bg-emerald-600 text-white py-4 rounded-full hover:cursor-pointer active:bg-emerald-400 transition">
            Sign Up
          </button>
             <p className="mt-4 text-gray-600">
                    Already have an account?
                  <span
                    // to="/signup"
                    className="inline-block mt-4 md:mt-0 ml-2 cursor-pointer rounded-full border border-emerald-600 px-3 py-1 font-medium text-emerald-600 transition-all duration-200 hover:bg-emerald-600 hover:text-white"
                  >
                    Sign In
                  </span>
              </p>

        </form>
      </div>
    </div>
  );
};

export default SignUp;