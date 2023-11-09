const {Country}=require("../models");

const insert=async (req,res)=>{
    Country.create({
        Country_code:req.body.Country_code,
        Country_name:req.body.Country_name
    }).catch(err=>{
        console.log(err)
       return res.json(err);
    })
    return res.json("success");
}
const getCountry=async (req,res)=>{
    Country.findAll().then((r)=>{
        res.status(200).json(r)
    }).catch((err)=>{
        return res.json("err");

    })
}




module.exports={insert,getCountry}
