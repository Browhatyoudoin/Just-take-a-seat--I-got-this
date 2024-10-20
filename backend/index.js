import express from 'express';
import { createTeacher } from "./sauce.js";

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

createTeacher("Ms. Choi", "password");