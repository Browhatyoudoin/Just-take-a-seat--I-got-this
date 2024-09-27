import { sequelize } from "../config.js";
import { Teachers } from "./teachers.js";
import { Periods } from "./periods.js";
import DataTypes from 'sequelize';

const Students = sequelize.define(
    'Students',
    {
        StudentID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Grade: {
            type: DataTypes.STRING,
            allowNull: false, 
        }

    }

);

export { Students }