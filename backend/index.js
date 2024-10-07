import express from 'express';
import { createTeacher, createPeriod, createStudent, assignTeacher, assignPeriod, getTeacher, getPeriod, getStudent } from "./sauce.js";

const app = express();
const PORT = 3001;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
  addStudent();
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

app.get('/getTeacher/:teacherName', async (req, res) =>{
  const { teacherName } = req.params;
  res.json(await getTeacher(teacherName))
})



//createTeacher("MsChoi", "password");
//createPeriod("choi1","ApLang");
//assignTeacher("MsChoi", "Lang1");
//createStudent(420693,"Isaac Shin", "A");
assignPeriod("Lang1",420693);