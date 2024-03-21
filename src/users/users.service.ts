import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {

  // .......... Call Schema Modal
  constructor(@InjectModel(Users.name) private model:Model<Users>)
  {

  }




  // CRUD Operation  by model.[create,find,...]

  async signUp(email:string, password:string, dob:string){
    return await this.model.create({
        email: email,
        password: password,
        dob :dob
       })
  }


  // Validate by email and password 

  async signIn(loginUserDto:LoginUserDto){
    const res=  await this.model.findOne({},{},{lean:true})

       if(res)
       {
        return {
          ...res,
          // res,
          message:"Login Successfull"

        }
      }
      return {message:"Login Failed"}
      //  throw new UnauthorizedException("Email or password not found")
  }









  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  // get all user 
  async findAll() {
    return await this.model.find()
  }


  // get user by their id 
  async findOne(id: string) {
    return await this.model.findById(id)
  }

  // Update Specifice User with their respective data 
 async update(id: string, updateUserDto: UpdateUserDto) {
    const res= await this.model.findByIdAndUpdate(id, updateUserDto,{new:true})
    return res






    // return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const res=  await this.model.findByIdAndDelete(id)
    if(res.$isDeleted){
      return "User Deleted";
      
    }
    // return (res)
  }
}
