import { IsNumber, IsArray, ValidateNested } from 'class-validator';
import { UserDTO } from 'src/user/user.dto';

export class RoomDTO {
  @IsNumber()
  id: number;

  @IsArray()
  @ValidateNested({ each: true })
  users: UserDTO[]; 
}
