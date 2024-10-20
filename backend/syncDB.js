import { sequelize } from "./config.js";
import { Teachers } from "./models/teachers.js";
import { Students } from "./models/students.js";
import { Periods } from "./models/periods.js";

async function runSync(){
    await sequelize.sync();
}

await runSync();