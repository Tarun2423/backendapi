// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const Log=sequelize.define("Log",{
        Tablename:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        fieldname:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        oldvalue:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
        updatedvalue:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        }
    })
    return Log;
}
