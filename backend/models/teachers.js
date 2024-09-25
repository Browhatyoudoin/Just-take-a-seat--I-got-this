import { sequelize } from "../config.js";
import { Periods } from "./periods.js";
import DataTypes from 'sequelize';

const Teachers = sequelize.define(
    'Teachers',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }

);

export { Teachers }
