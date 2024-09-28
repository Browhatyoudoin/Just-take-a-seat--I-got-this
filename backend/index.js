import express from 'express';
import { createTeacher, createPeriod, assignTeacher, getTeacher} from "./sauce.js";

const app = express();
const PORT = 3000;


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


// createTeacher("MsChoi", "password");
// createPeriod(1, "ApLang");
// assignTeacher("MsChoi", 1);