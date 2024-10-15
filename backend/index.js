import express from 'express';
import { createTeacher, createPeriod, createStudent, assignTeacher, assignPeriod, getTeacher, getPeriod, getStudent } from "./sauce.js";
import cors from 'cors';



const app = express();
const PORT = 3000;


app.use(express.json());

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

// var corsOptions = {
//   origin: "http://localhost:5500",
//   optionSuccessStatus: 200
// }


app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

app.get('/getTeacher/:teacherName', async (req, res) =>{
  const { teacherName } = req.params;
  res.json(await getTeacher(teacherName))
})

app.get('/getPeriod/:periodName', async (req, res) =>{
  const { periodName } = req.params;
  res.json(await getPeriod(periodName));
})

app.get('/getStudent/:studentId', async (req, res) =>{
  const { studentId } = req.params;
  res.json(await getStudent(studentId))
})

app.post('createTeacher/:teacherName', async (req, res) => {
  console.log(req.body);
})


