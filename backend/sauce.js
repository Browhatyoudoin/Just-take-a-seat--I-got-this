import { Teachers } from "./models/teachers.js";
import { Periods } from "./models/periods.js";
import { Students } from "./models/students.js";

export async function createTeacher(username, password){
    return await Teachers.create({username : username, password: password});
}

