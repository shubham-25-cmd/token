import { generateToken } from "@/lib/generatetoken";
import { connectdb } from "@/lib/mongodb";
import userModel from "@/Models/userModel";
import { RegisterBody } from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";

async function POST(req:NextRequest){
  try{
    await connectdb()
    const body :RegisterBody= await req.json()

    const{name,email,mobile,password}=body;
    if(!name||!email||!password){
      return NextResponse.json<ApiResponse>({
        success:false,message:"all fields are required"
      }),{
        status:400
      }
    };
    const isExisted = userModel.findOne({email})
    if(isExisted)return NextResponse.json<ApiResponse>({
        success:false,message:"all fields are required"
      }),{
        status:409
      }
      const newUser = await userModel.create({
        name,email,password,mobile
      })
      const token = generateToken({userID:isExisted._id.toString()})
      const response = NextResponse.json<ApiResponse>({
        success:true,message:"user registered sucessfully",data:{
          user:{
            _id:newUser._id,
            name:newUser.name,
            email:newUser.email,
          }
        }
      },{status:201})
      response.cookies.set('token',token,{
        httpOnly:true,
        sameSite:'lax',
        maxAge: 60*60*1000
      })
      return response
  }catch(error){
    console.log("error in register api",error)
    return NextResponse.json({
      success:false,message:"something went wrong",error:error
    },{status:500})
  }
}