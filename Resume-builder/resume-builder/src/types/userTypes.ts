export interface IUser{
_id:string,
name:string,
email:string,
password:string,
mobile:string,
createdAt?:Date,
updatedAt?:Date
}

export interface RegisterBody{//always write with body start with any routes,like register,login
  name:string,
email:string,
password:string,
mobile:string,
}

export interface LoginBody{
  email:string,
password:string,
}
export interface JWTPayload{
  userID:string,
  email?:string
}