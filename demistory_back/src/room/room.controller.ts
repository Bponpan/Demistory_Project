import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from './room.dto';
import { Room } from './room.entity';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getIndex(@Req() request : Request) : Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Get("id")
  getUserById(@Param('id') id : number) : Promise<Room> {
    return this.roomService.findOne(id);
  }

  @Post(":id")
  postCreate(@Body() createUserDTO : RoomDTO) : Promise<Room> {
    return this.roomService.create(createUserDTO)
  }

  @Put(":id")
  updateUserById(@Param('id') id: number, @Body() updateRoomDTO: Partial<RoomDTO>): Promise<Room> {
  return this.roomService.update(id, updateRoomDTO);
}

  @Delete(":id")
  deleteUserById(@Param('id') id: number): { message: string } {
  this.roomService.deleteById(id);
  return { message: "User deleted successfully" };
}
}