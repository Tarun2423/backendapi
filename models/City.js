// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const City=sequelize.define("City",{
        State_code:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        City_code:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        City_name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        }
    })
    return City;
}
