import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complaint } from './complaint.entity';
import { ComplaintDTO } from './complaint.dto';
import { User } from 'src/user/user.entity';



@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(Complaint)
    private complaintRepository : Repository<Complaint>,

    @InjectRepository(User)
    private userRepository : Repository<User>

  ) {

  }
  
  findAll() : Promise<Complaint[]> {
    return this.complaintRepository.find({
      relations : ["user","user.room"]
    });
  }

  findOne(id : number) : Promise<Complaint|null> {
    return this.complaintRepository.findOneBy({id:id});

  }

  async create(complaint : ComplaintDTO ) : Promise<Complaint|null> {
    let complaintEntity = new Complaint()
    complaintEntity.description = complaint.description
    complaintEntity.user = await this.userRepository.findOneBy({id : complaint.userId})
    return this.complaintRepository.save(complaintEntity);
  }


  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.complaintRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}
}
