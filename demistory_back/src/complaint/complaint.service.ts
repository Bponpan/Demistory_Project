import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complaint } from './complaint.entity';
import { ComplaintDTO } from './complaint.dto';
import { User } from 'src/user/user.entity';
import { ComplaintStatus } from 'src/complaintStatus/complaintstatus.entity';



@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(Complaint)
    private complaintRepository : Repository<Complaint>,

    @InjectRepository(User)
    private userRepository : Repository<User>,

    @InjectRepository(ComplaintStatus)
    private complaintStatusRepository : Repository<ComplaintStatus>

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

  async updateStatus(id:number,statusId:number) : Promise<Complaint|null> {
    let status = await this.complaintStatusRepository.findOneOrFail({where :{id: statusId} })
    let complaint = await this.complaintRepository.findOneOrFail({where : {id : id}})
    complaint.complaintStatus = status
    await this.complaintRepository.save(complaint)

    return complaint
    
  }


}

