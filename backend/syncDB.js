import { sequelize } from "./config.js";
import { Teachers } from "./models/teachers.js";

async function runSync(){
    await sequelize.sync();
}

await runSync();