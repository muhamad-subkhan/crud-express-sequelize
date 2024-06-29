const { DataTypes } = require('sequelize');
const sequelize = require('../connect_db');


const Daftar = sequelize.define(
    'Daftar',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            
        },
        nim: {
            type: DataTypes.INTEGER,
        },
        jurusan: {
            type: DataTypes.STRING,
        },
        fakultas: {
            type: DataTypes.STRING
        }, 
        totalsks: {
            type: DataTypes.INTEGER,
        },
        ipk: {
            type: DataTypes.FLOAT
        }
    });

    sequelize.sync({ force: false }).then(()=>{
        console.log('Table Daftar Synced');
    })

    module.exports = Daftar;