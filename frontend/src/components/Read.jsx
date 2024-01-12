import React, { useEffect, useState } from 'react'

const Read = () => {

    const [data, setData] = useState()

    async function getData(){
        const response = await fetch("http://localhost:5000/showall");

        const result = await response.json();

        if(!response.ok){
            console.log(result.error)
        }

        if(response.ok){
            setData(result);
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    console.log(data)

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center my-4">All Data</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Email</h6>
                            <p className="card-text">Age</p>
                            <a href="#" className="card-link">Delete</a>
                            <a href="#" className="card-link">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Read