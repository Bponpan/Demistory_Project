import { UserTypeDTO } from './usertype.dto';
import { Body, Controller, Delete, Get, Param, Post, Req, Put } from '@nestjs/common';
import { UserTypeService } from './usertype.service';
import { UserType } from './usertype.entity';

@Controller('usertypes')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  @Get()
  getIndex(@Req() request : Request) : Promise<UserType[]> {
    return this.userTypeService.findAll();
  }
  
  @Get("id")
  getUserById(@Param('id') id : number) : Promise<UserType> {
    return this.userTypeService.findOne(id);
  }

  @Post(":id")
  postCreate(@Body() createUserDTO : UserTypeDTO) : Promise<UserType> {
    return this.userTypeService.create(createUserDTO)
  }

  @Put(":id")
  updateUserById(@Param('id') id: number, @Body() updateUserTypeDTO: Partial<UserTypeDTO>): Promise<UserType> {
  return this.userTypeService.update(id, updateUserTypeDTO);
}

  @Delete(":id")
  deleteUserById(@Param('id') id: number): { message: string } {
  this.userTypeService.deleteById(id);
  return { message: "User deleted successfully" };
}
}