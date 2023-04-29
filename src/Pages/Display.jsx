import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Display = ({ data }) => {
    const navigate = useNavigate();
  const deletehandler = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then(window.location.reload(false))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="show">
            <div className="card" key={item.id}>
              <div className="card-body">
                <div className="titlechanage">
                  <h3 className="card-title">
                    {item.id}.{item.name}
                  </h3>
                </div>
                <h4 className="card-subtitle my-2">Role: {item.role}</h4>
                <h4 className="card-subtitle my-2">Salary: {item.salary}</h4>
                <h4 className="card-subtitle my-2">
                  Joined date:{item.joined}
                </h4>
                <Link to={`/edit/${item.id}`}>
                  <button className="card-btn left">Edit{" "}</button>
                </Link>

                  <button
                    className="card-btn"
                    onClick={() => deletehandler(item.id)}
                  >
                    {" "}
                    Delete
                  </button>
              </div>
            </div>

            {/* <h2>{item.id} {item.name} {item.role} {item.joined} <button onClick={() =>deletehandler(item.id)}>X</button> <Link to={`/edit/${item.id}`}> <button>Edit</button> </Link> </h2> */}
          </div>
        );
      })}
    </>
  );
};

export default Display;
