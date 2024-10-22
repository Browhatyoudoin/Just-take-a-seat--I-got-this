import { sequelize } from "../config.js";
import { Teachers } from "./teachers.js";
import { Periods } from "./periods.js";
import DataTypes from 'sequelize';

const Students = sequelize.define(
    'Students',
    {
        StudentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        First: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Last:{
            type: DataTypes.STRING,
            allowNull:false
        },
        Grade: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        Gender:{
            type: DataTypes.STRING,
            allowNull: false   
        },
        groupNumber:{
            type: DataTypes.INTEGER,
            allowNull: true
        }



    }

);




export { Students }
