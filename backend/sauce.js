import { Teachers } from "./models/teachers.js";
import { Periods } from "./models/periods.js";
import { Students } from "./models/students.js";

export async function createTeacher(username, password){
    return await Teachers.create({username : username, password: password});
}

export async function createPeriod(number, classType){
    return await Periods.create({number : number, classType : classType});
}

export async function createStudent(StudentID, Name, Grade){
    return await Students.create({StudentID: StudentID, Name: Name, Grade: Grade});
}

export async function assignTeacher(username, period){
    const per = await Periods.findByPk(period);
    const teach = await Teachers.findByPk(username);
    await teach.addPeriods(per);
}

export async function assignPeriod(period, StudentID){
    const stu = await Students.findByPk(StudentID);
    const per = await Periods.findByPk(period);
    console.log(per);
    console.log(stu);
    await per.addStudents(stu);
}

export async function getTeacher(username){
    const teach = await Teachers.findByPk(username); 
    return teach;
}

export async function getPeriod(id){
    const per = await Periods.findByPk(id);
    return per;
}

export async function getStudent(StudentID){
    const stu = Students.findByPk(StudentID);
    return await stu;
}

