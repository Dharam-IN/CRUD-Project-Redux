import React from "react";
import { useSelector } from "react-redux";

const Home = () => {

  const users = useSelector(state => state.users)
  console.log(users)

  return (
    <>
      <div className="container mx-auto max-w-4xl mt-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-end mb-4">
          Create +
        </button>
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
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2">
                      Delete
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                      Update
                    </button>
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
