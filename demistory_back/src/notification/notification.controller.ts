import { Controller, Get, Param, Req } from '@nestjs/common';
import { NotificationDTO } from './notification.dto';
import { NotificationService } from './notification.service';
import { ComplaintNotification } from './notification.entity';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {

  }

  @Get()
  getIndex(@Req() request : Request) : Promise<ComplaintNotification[]> {
    return this.notificationService.findAll();
  }
  
}