const {State,Country}=require("../models");

const insert=async (req,res)=>{
    let code="";
    await Country.findOne({
        where:{Country_name:req.body.Country_name}
    }).then((resu)=>{
        code=resu.Country_code;
    })
    await State.findOne({where:{State_code:req.body.State_code}}).then((record)=>{
        if(!record){
            State.create({
                Country_code:code,
                State_code:req.body.State_code,
                State_name:req.body.State_name
            }).catch(err=>{
               return res.json("record not created");
            })
        }
        else{
            let sn=req.body.State_name;
            let rsn=record.State_name;
            if(sn!==rsn){
                let values={
                    State_name:sn
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
    State.findOne({
        where:{State_code:req.body.State_code}
    }).then((record)=>{
        if(!record){
            return res.status(404).json("not found")
        }
        let values={
            State_name:req.body.State_name
        }
        record.update(values).then(updatedRecord=>{
            res.status(200).json(updatedRecord)
        })
    })
    .catch((err)=>{
    return res.status(400).json("failed");

    })
}


const getState=async (req,res)=>{
    State.findAll().then((r)=>{
        res.status(200).json(r)
    }).catch((err)=>{
        return res.json("err");

    })
}


module.exports = {insert,getState,update};
