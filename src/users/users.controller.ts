import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}



  // get body data from HTML form Field in <body>...</body> 

  // Singup : Date enter : Form
  @Post('/register')
 async signup(@Body() {email, password, dob}:CreateUserDto){

    if(!email){
      // throw new NotFoundException("email not found")  // 404 Error
      // throw new UnauthorizedException("email not found")  // unAuthorized 401
      throw new BadRequestException("email not found")  // bad request 
    }
    if(!password){
      throw new BadRequestException("password not found")
    }
    const getUser= await this.usersService.signUp(email, password, dob);
    return getUser
  }




    // SignIn : Date enter : Validate
    @Post('/login')
    async signn(@Body() loginUserDto: LoginUserDto){
      
        const getUser= await this.usersService.signIn(loginUserDto);
        return getUser
      }



















  // there is 2 @Post : so it called only 1  : Top one




  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
