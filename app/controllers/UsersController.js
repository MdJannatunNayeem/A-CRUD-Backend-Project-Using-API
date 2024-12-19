import UsersModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";

export const Registration=async(req,res)=>{
    try {
        let reqBody=req.body;
        await UsersModel.create(reqBody)
        return res.json({status:"success","Message":"User registered successfully Done"})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}

//I am login with just phoneNumber and password for practice not using any username or email
export const Login=async(req,res)=>{

    try {
        let reqBody=req.body;
        let data=await UsersModel.findOne(reqBody)
        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else {
            // Login Success Token Encode
            let token=TokenEncode(data['email'],data['_id'])
            return res.json({status:"success",Token:token,"Message":"User Login successfully Done"})
        }

    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}


export const ProfileDetails=async(req,res)=>{
    try {
        let user_id=req.headers['user_id'];
        let data=await UsersModel.findOne({"_id":user_id})
        return res.json({status:"success","Message":"User ProfileDetails successfully Done",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}

export const ProfileUpdate=async(req,res)=>{

    try {
        let user_id=req.headers['user_id'];
        let data=await UsersModel.updateOne(
            {"_id": user_id },
            {
                $set: req.body
            })
        let data2=await UsersModel.findOne({"_id":user_id})
        return res.json({status:"success","Message":"User Profile Update successfully Done",data:data2})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}


export const AllProfileDetails=async(req,res)=>{
    try {

        let data=await UsersModel.find({ })
        return res.json({status:"success","Message":"User All ProfileDetails successfully Done",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}

export const DeleteProfiles=async(req,res)=>{
    try {
        let user_id=req.headers['user_id'];
        let data=await UsersModel.deleteOne({"_id":user_id})
        return res.json({status:"success","Message":"User Delete successfully Done",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}



