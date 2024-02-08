import { IsString,IsNumber } from 'class-validator';

export class ComplaintDTO {
  @IsNumber()
  id: number;

  @IsString()
  description: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  complaintStatusId: number;
}


