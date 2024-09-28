import { sequelize } from "../config.js";
import { Teachers } from "./teachers.js";
import { Students } from "./students.js";
import DataTypes from 'sequelize';

const Periods = sequelize.define(
    'Periods',
    {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        classType: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }

);

Periods.hasMany(Students);
Students.belongsTo(Periods);


export { Periods }