import express from 'express';
import { createTeacher, createPeriod, createStudent, assignTeacher, assignPeriod, getTeacher, getPeriod, getStudent } from "./sauce.js";

const app = express();
const PORT = 3000;


app.use(express.json());

app.get("/", (req, res) => {
  const dbFilePath = "./database.sqlite"; 

  res.json(dbFilePath, (err) => {
      if (err) {
          console.error("SAD", err);
          res.status(500).send("PLS HeLP");
      }
  });
  
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
//assignPeriod("Lang1",420693);