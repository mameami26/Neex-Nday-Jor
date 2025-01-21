import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://cheikhadim29:NeexNdayJor@neexndayjor.mot58.mongodb.net/').then(()=>console.log("DB Connected"));
   
}
