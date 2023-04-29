import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Send = () => {
  const navigate = useNavigate();
    const [data,setdata] = useState({
        name:'',
        role:'',
        salary:'',
        joined:''
    })
    const inputhandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setdata({...data,[name]:value})
    }
    const submithandler = (e) =>{
        e.preventDefault();
        if (data.name == '' || data.role == '' || data.salary == '' || data.joined == ''){
          alert("Please Enter values")
        }
        else{
          axios.post('http://localhost:5000/send',data)
          .then(navigate('/'))
          .catch(err => console.log(err))
        }
    }
  return (
    <>
    <form onSubmit={submithandler}>
    <div className="container main row">
                <div className="col-md-4">
                  <h3>Name: </h3>
                </div>
                <div className="col-md-8">
                <input type="text" value={data.name} name='name' onChange={inputhandler}/>
                </div>
                <div className="col-md-4">
                <h3>Role: </h3>
                </div>
                <div className="col-md-8">
                <input type="text" value={data.role} name='role' onChange={inputhandler}/>
                </div>
                <div className="col-md-4">
                <h3>Salary: </h3>
                </div>
                <div className="col-md-8">
                <input type="text" value={data.salary} name='salary' onChange={inputhandler}/>
                </div>
                <div className="col-md-4">
                <h3>Joined Date: </h3>
                </div>
                <div className="col-md-8">
                <input type="text" value={data.joined} name='joined' onChange={inputhandler}/> <br />
                </div>
                <div className="col-md-12 text-center">
                <button className="update-btn">Submit</button>
                </div>
              </div>
              </form>
    </>
  )
}

export default Send
