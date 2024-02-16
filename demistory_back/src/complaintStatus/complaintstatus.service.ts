import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComplaintStatus } from './complaintstatus.entity';
import { ComplaintStatusDTO } from './complaintstatus.dto';


@Injectable()
export class ComplaintStatusService {
  complaintStatusService: any;
  constructor(
    @InjectRepository(ComplaintStatus)
    private readonly complaintStatusRepository: Repository<ComplaintStatus>,
  ) {

  }

  findAll() : Promise<ComplaintStatus[]> {
    return this.complaintStatusRepository.find();
  }

  findOne(id : number) : Promise<ComplaintStatus|null> {
    return this.complaintStatusRepository.findOneBy({id:id});

  }

  create(complaintStatus : ComplaintStatusDTO ) : Promise<ComplaintStatus|null> {
    return this.complaintStatusRepository.save(complaintStatus);
  }


  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.complaintStatusRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}


}
