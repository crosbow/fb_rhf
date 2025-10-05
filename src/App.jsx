import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  const [page, setPage] = useState("l"); // l -> Login & r -> Register

  return (
    <div className="min-h-screen  flex justify-center items-center flex-col ">
      <nav className="mb-5 flex gap-3">
        <button onClick={() => setPage("l")}>Login</button>
        <button onClick={() => setPage("r")}>Register</button>
      </nav>
      <div className="bg-gray-600/20 rounded-md p-6 w-[420px] shadow-md/10 flex flex-col items-center">
        {page === "l" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default App;
