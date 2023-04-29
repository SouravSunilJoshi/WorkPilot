import axios from "axios";
import React, { useEffect, useState } from "react";
import Display from "./Display";

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <Display data = {data}/>
    </>
  );
};

export default Home;
