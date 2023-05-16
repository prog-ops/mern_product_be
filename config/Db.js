import {Sequelize} from "sequelize";

export const db = new Sequelize(
    process.env.DB_DATABASE,//'produkdb',
    process.env.DB_USER,//'root',
    process.env.DB_PASSWORD,//'',
    {
      host: process.env.DB_HOST,//'localhost',
      dialect: 'mysql'
    }
)
