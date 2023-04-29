const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "emp",
});

app.get("/get", (req, res) => {
  con.query("SELECT * FROM emp", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get('/search/:search',(req,res)=>{
  const search = req.params.search
  console.log(search)
  const q = "SELECT * FROM emp WHERE name LIKE ?;" 
  con.query(q,[`%${search}%`],(err,data)=>{
    if (err) throw err
    res.send(data)
  })
})

app.delete('/delete/:id',(req,res)=>{
  const q = "DELETE FROM emp where id = (?)"
  const id = req.params.id;
  con.query(q,id,(err,data)=>{
    if (err) throw err
    res.send(data)
  })
})

app.get('/put/:id',(req,res)=>{
  const id = req.params.id
  const q = "SELECT * FROM emp where id = ?"
  con.query(q,id,(err,data)=>{
    if(err) throw err
    res.send(data)
  })
})

app.put('/put/:id',(req,res)=>{
  const id = req.params.id
  const data = [
    req.body.name,
    req.body.role,
    req.body.salary,
    req.body.joined
]
  const q = "UPDATE emp SET name= ?, role = ? , salary = ? , joined = ? where id = ?"

  con.query(q,[...data,id],(err,data)=>{
    if (err) throw err
    res.send(data)
  })
})

app.post('/send',(req,res)=>{
    const q = "INSERT INTO emp (name,role,salary,joined) VALUES (?)"
    const value = [
        req.body.name,
        req.body.role,
        req.body.salary,
        req.body.joined
    ]
    con.query(q,[value],(err,data)=>{
        if (err) throw err
        res.send(data)    
    })
})

app.listen("5000", console.log("Started"));
