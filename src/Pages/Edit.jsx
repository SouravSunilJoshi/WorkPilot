import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [update, setupdate] = useState({
    name: "",
    role: "",
    salary: "",
    joined: "",
  });
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    axios
      .get("http://localhost:5000/put/" + id)
      .then((res) => {
        setdata(res.data), setupdate(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const changehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setupdate({ ...update, [name]: value });
  };

  const updatehandler = () => {
    if (update.name == '' || update.role == '' || update.salary == '' || update.joined == ''){
      alert("Please Enter values")
    }
    else{
      axios.put("http://localhost:5000/put/" + id, update).then(navigate("/"));
    }
    
  };

  return (
    <>
      <div className="container main">
        {data.map((item) => {
          return (
            <>
              <div className="row">
                <div className="col-md-4">
                  <h3>Name: </h3>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    name="name"
                    value={update.name}
                    onChange={changehandler}
                  />
                </div>
                <div className="col-md-4">
                <h3>Role: </h3>
                </div>
                <div className="col-md-8">
                <input
                      type="text"
                      name="role"
                      value={update.role}
                      onChange={changehandler}
                    />
                </div>
                <div className="col-md-4">
                <h3>Salary: </h3>
                </div>
                <div className="col-md-8">
                <input
                  type="text"
                  name="salary"
                  value={update.salary}
                  onChange={changehandler}
                />
                </div>
                <div className="col-md-4">
                <h3>Joined Date: </h3>
                </div>
                <div className="col-md-8">
                <input
                  type="text"
                  name="joined"
                  value={update.joined}
                  onChange={changehandler}
                />
                </div>
                <div className="col-md-12 text-center">
                <button className="update-btn" onClick={() => updatehandler()}>Update</button>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-6">
                  <h3>Name: </h3>
                  <h3>Role: </h3>
                  <h3>Salary: </h3>
                  <h3>Joined Date: </h3>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={update.name}
                    onChange={changehandler}
                  />
                  <div>
                    <input
                      type="text"
                      name="role"
                      value={update.role}
                      onChange={changehandler}
                    />
                  </div>
                </div> */}

              {/* <div className="one">
                <h3>Name: </h3>
                <input
                  type="text"
                  name="name"
                  value={update.name}
                  onChange={changehandler}
                />
              </div>
              <div className="one">
                <h3>Role: </h3>
                <input
                  type="text"
                  name="role"
                  value={update.role}
                  onChange={changehandler}
                />
              </div>
              <div className="one">
                <h3>Salary: </h3>
                <input
                  type="text"
                  name="salary"
                  value={update.salary}
                  onChange={changehandler}
                />
              </div>
              <div className="one">
                <h3>Joined Date: </h3>
                <input
                  type="text"
                  name="joined"
                  value={update.joined}
                  onChange={changehandler}
                />
              </div>
              <div className="col-md-12">
                <button className="update-btn" onClick={() => updatehandler()}>Update</button>
              </div> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Edit;
