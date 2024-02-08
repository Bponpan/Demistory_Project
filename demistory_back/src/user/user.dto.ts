import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { RoomDTO } from 'src/room/room.dto';

export class UserDTO {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsNumber()
  phonenumber : number;

  @IsString()
  password : string;

  @IsArray()
  @ValidateNested({ each: true })
  rooms: RoomDTO[]; 
}