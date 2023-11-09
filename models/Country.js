
module.exports=(sequelize,DataTypes)=>{
    const Country=sequelize.define("Country",{
        Country_code:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        },
       
        Country_name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            }
        }
    })
    return Country;
}