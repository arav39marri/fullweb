import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Creat = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
const URL ='mongodb+srv://aravindmarripelli:DwaLPXc0z0acAqVc@aravind.c1xfg.mongodb.net/?retryWrites=true&w=majority&appName=Aravind';


  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://fullweb-back.vercel.app/create', {
        name,
        username,
        age,
        email,
      });
      alert("Submitted successfully");
      navigate("/");
    } catch (error) {
      alert("Submission failed");
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-full bg-[#766ce1] flex pt-10 justify-center overflow-auto">
      <div className="gap-5 flex flex-col items-center h-full md:w-[50%] w-[70%] pb-16">
        <Link to="/">
          <p>Back</p>
        </Link>
        <h1 className="text-2xl text-white">Create User</h1>
        <form
          onSubmit={submit}
          className="flex flex-col m-10 w-[100%] h-auto p-8 mb-10 rounded-2xl bg-white shadow-lg"
        >
          <label className="text-gray-700 mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            className="border p-2 rounded-md mb-4"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-gray-700 mb-2" htmlFor="age">
            Age:
          </label>
          <input
            type="text"
            id="age"
            placeholder="Enter age"
            required
            className="border p-2 rounded-md mb-4"
            onChange={(e) => setAge(e.target.value)}
          />

          <label className="text-gray-700 mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            required
            className="border p-2 rounded-md mb-4"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="text-gray-700 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            className="border p-2 rounded-md mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white text-center p-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Creat;
