import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Reducer/UserReducer";

const Home = () => {

  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }

  console.log(users)

  return (
    <>
      <div className="container mx-auto max-w-4xl mt-5">
        <Link to={'/create'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-end mb-4">
          Create +
        </Link>
        <table className="w-full mt-5">
          <thead className="border-b border-gray-300">
            <tr className="text-left">
              <th className="w-1/4 px-4 py-2">ID</th>
              <th className="w-1/4 px-4 py-2">Name</th>
              <th className="w-1/4 px-4 py-2">Email</th>
              <th className="w-1/4 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((data, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2">{data.id}</td>
                  <td className="px-4 py-2">{data.name}</td>
                  <td className="px-4 py-2">{data.email}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleDelete(data.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2">
                      Delete
                    </button>
                    <Link to={`/update/${data.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                      Update
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
