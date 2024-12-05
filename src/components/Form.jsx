import { useState } from "react";
import { addPost } from "../services/api";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    setIsLoading(true);
    addPost(data)
      .catch((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="relative flex flex-col rounded-xl bg-transparent">
      <h4 className="block text-xl font-medium text-slate-800">Tambah User</h4>
      <p className="text-slate-500 font-light">Form untuk menambahkan user</p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <div className="w-full max-w-sm min-w-[200px]">
            <label htmlFor="name" className="block mb-2 text-sm text-slate-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Name User"
              required
            />
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-slate-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Email User"
              required
            />
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-slate-600"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Message"
              required
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Tambah User
        </button>
      </form>
    </div>
  );
};

export default Form;
