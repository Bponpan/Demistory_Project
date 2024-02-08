import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Complaint } from './complaint/complaint.entity';
import { Repository } from 'typeorm';
import { ComplaintDTO } from './complaint/complaint.dto';

@Injectable()
export class AppService {
  
}



