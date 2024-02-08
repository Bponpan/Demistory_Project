import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationDTO } from './notification.dto';
import { ComplaintNotification } from './notification.entity';



@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(ComplaintNotification)
    private readonly notificationRepository: Repository<ComplaintNotification>,
  ) {

  }

  findAll() : Promise<ComplaintNotification[]> {
    return this.notificationRepository.find();
  }


}