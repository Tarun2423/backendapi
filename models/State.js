// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const State=sequelize.define("State",{
        Country_code:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        State_code:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        State_name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        }
    })
    return State;
}
