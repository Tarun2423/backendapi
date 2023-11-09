const {State,City}=require("../models");

const insert=async (req,res)=>{
    let code="";
    await State.findOne({
        where:{State_name:req.body.State_name}
    }).then((resu)=>{
        code=resu.State_code;
    })
    await City.findOne({where:{City_code:req.body.City_code}}).then((record)=>{
        if(!record){
            City.create({
                State_code:code,
                City_code:req.body.City_code,
                City_name:req.body.City_name
            }).catch(err=>{
               return res.json("record not created");
            })
        }
        else{
            let sn=req.body.City_name;
            let rsn=record.City_name;
            if(sn!==rsn){
                let values={
                    City_name:sn
                }
                record.update(values).then(updatedRecord=>{
                    res.status(200).json(updatedRecord);
                    return;
                }).catch(err=>{
                    res.json("some err");
                    return;
                        })} 
            else{
                return res.json("already present");
                }
        }
        
    })
}


const update=async (req,res)=>{
    City.findOne({
        where:{City_code:req.body.City_code}
    }).then((record)=>{
        if(!record){
            return res.status(404).json("not found")
        }
        let values={
            City_name:req.body.City_name
        }
        record.update(values).then(updatedRecord=>{
            res.status(200).json(updatedRecord)
        })
    })
    .catch((err)=>{
    return res.status(400).json("failed");

    })
}


const getCity=async (req,res)=>{
    City.findAll().then((r)=>{
        res.status(200).json(r)
    }).catch((err)=>{
        return res.json("err");

    })
}


module.exports = {insert,getCity,update};
