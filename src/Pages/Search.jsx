import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Display from "./Display";



const Search = () => {
  const [search,setsearch] = useState("")
  const [data,setdata] = useState([])
  const navigate = useNavigate();
  const searchhandler = () =>{
    axios.get('http://localhost:5000/search/'+search)
    .then(res=>setdata(res.data))
    .catch(err=> console.log(err))
  }

  const deletehandler = (id) =>{
    axios.delete('http://localhost:5000/delete/'+id)
    .then(navigate('/'))
    .catch(err => console.log(err))
  }
  return (
    <>
      <div className="search">
        <input type="text" value={search} onChange={(e) =>setsearch(e.target.value)}/>
        <button className="search-button" onClick={searchhandler}>Search</button>
      </div>
      <Display data = {data}/>
    </>
  );
};

export default Search;
