import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Reducer/UserReducer";
import { useNavigate } from "react-router";

const CreateUser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const users = useSelector(state => state.users)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id + 1 ,name, email}))
        navigate("/")
    }

  return (
    <>
      <div className="container mx-auto max-w-4xl mt-5">
        <div>
          <h3 className="text-3xl font-bold my-5">Add New User</h3>
        </div>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
