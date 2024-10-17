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
  createTeacher(req.body.username, req.body.password);
})



app.post('/createStudent/:studentId', async (req, res) => {
  console.log(req.body);
  res.send("the function was called successfully");
  createStudent(req.body.id, req.body.name, req.body.grade); 
  //yo u gotta make another page where the beginning is a sign in page
  //depending on who signs it it give you a selection screen of what period you
  //want which will lead you to the class that you want to see
})

