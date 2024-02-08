import { IsNumber, IsString } from 'class-validator';

export class UserTypeDTO {
  @IsNumber()
  id: number;

  @IsString()
  status: string;
}