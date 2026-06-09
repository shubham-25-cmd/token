import mongoose from"mongoose"
import {IUser} from "@/types/user.types"
import bcrypt from "bcrypt"
import { NextRequest,NextResponse } from "next/server"

interface UserDocument extends Omit<IUser,'_id'>,Document{
  comparePass(candidatePassword:string):boolean
}

const userSchema = new mongoose.Schema<UserDocument>({
  name:{
    types:String,
    required:[true, "name is required"],
    trim:true
  },
  email:{
    types:String,
    trim:true,
    unique:true,
    required:[true,"email is required"]

  },
  password:{
    types:String,
    required:[true,"password is required"],
    minlength:[6,"min 6 character is required"]
  },
  mobile:{
    type:String,
    minlength:[10,"min 10 character is required"],
    maxlength:[10,"max 10 character is required"]
  }

},{
  timestamps:true
})

userSchema.pre('save',function():void{
  if(!this.isModified('password')) return
  this.password= bcrypt.hashSync(this.password,10)
})
userSchema.methods.comparePass = function(candidatePassword:string):boolean{
  return bcrypt.compareSync(candidatePassword,this.password)
}
const userModel = mongoose.model('User',userSchema)
export default userModel