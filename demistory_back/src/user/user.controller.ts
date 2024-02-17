import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import { request } from 'http';
import { User } from './user.entity';

interface registerDto{
  name : string;
  phonenumber : number;
  roomnumber : number;
  password : string
}

@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService){

  }

  @Get()
  getIndex(@Req() request : Request) : Promise<User[]> {
    return this.userService.findAll();
  }

  @Get("id")
  getUserById(@Param('id') id : number) : Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  postCreate(@Body() createUserDTO : registerDto) :any {
    return this.userService.createUser(createUserDTO)
  }

  

  @Delete(":id")
  deleteUserById(@Param('id') id: number): { message: string } {
  this.userService.deleteById(id);
  return { message: "User deleted successfully" };
}
  
}