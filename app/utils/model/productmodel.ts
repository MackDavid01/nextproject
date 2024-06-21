import { Schema, model, models } from "mongoose";
import { iProductData } from "../types";



const productmodel = new Schema<iProductData> ({
     name:{
        type:String
     },
     image:{
        type:String,
     },
},{timestamps:true});

const productmodels = models.user || model<iProductData>("user" ,productmodel)


export default productmodels
