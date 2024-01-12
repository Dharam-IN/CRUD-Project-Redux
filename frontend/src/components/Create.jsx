import React, { useState } from 'react'

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const [error, setError] = useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const addUser = {name, email, age}

        const response = await fetch("http://localhost:5000/createuser", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers:{
                "Content-Type": "application/json"
            },
        });
        const result = await response.json();

        if(!response.ok){
            console.log(result.error)
            setError(result.error)
        }

        if(response.ok){
            console.log(result)
            setError("")
            setName("")
            setEmail("")
            setAge("")
        }

    }


    return (
        <>
            <div className="container">
                {error && <div className="alert alert-danger">{error}</div>}
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputAge1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="exampleInputAge1" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Create