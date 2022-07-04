import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.INTEGER,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
