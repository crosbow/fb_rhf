function App() {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <form className="bg-gray-600/20 rounded-md p-6 w-[420px] shadow-md/10 flex flex-col items-center">
        <input
          type="email"
          placeholder="Email Address or Phone number"
          className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full mt-3"
        />
        <button className="w-full py-2 bg-myBlue mt-3 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-600/95 cursor-pointer">
          Log in
        </button>
        <a
          href="#"
          className="text-center text-myBlue my-3 block border-b pb-3 border-gray-300 w-full hover:underline"
        >
          Forgotten Password
        </a>
        <button className="px-4 mx-auto py-2 bg-green-600 mt-3 text-white font-semibold rounded-md cursor-pointer">
          Create New Account
        </button>
      </form>
    </div>
  );
}

export default App;
