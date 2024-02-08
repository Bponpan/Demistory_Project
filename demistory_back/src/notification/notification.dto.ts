import { IsNumber, IsObject } from 'class-validator';
import { ComplaintStatusDTO } from 'src/complaintStatus/complaintstatus.dto';

export class NotificationDTO {
  @IsNumber()
  id: number;

  @IsObject()
  complaintStatus: ComplaintStatusDTO; 
}
