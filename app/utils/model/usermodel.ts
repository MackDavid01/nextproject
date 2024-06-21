import { Schema, model, models } from "mongoose";
import { iUserData } from "../types";



const usermodel = new Schema<iUserData> ({
     name:{
        type:String
     },
     email:{
        type:String,
        unique : true
     },
     password:{
        type:String,
     },
},{timestamps:true});

const usermodels = models.user || model<iUserData>("user" ,usermodel)


export default usermodels
