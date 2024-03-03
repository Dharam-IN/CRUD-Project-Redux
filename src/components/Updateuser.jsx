import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { updateUser } from '../Reducer/UserReducer'

const Updateuser = () => {

    const {id} = useParams()
    
    const users = useSelector(state => state.users)
    console.log(users)

    const existinguser = users.filter(fil => fil.id == id)
    
    const {name, email} = existinguser[0];
    console.log(name, email)

    const [uname, setUname] = useState(name)
    const [uemail, setUemail] = useState(email)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))

        navigate("/")

    }
    

  return (
    <>
        <div className="container mx-auto max-w-4xl mt-5">
        <div>
          <h3 className="text-3xl font-bold my-5">Update User</h3>
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
              value={uname}
              onChange={(e) => setUname(e.target.value)}
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
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Updateuser