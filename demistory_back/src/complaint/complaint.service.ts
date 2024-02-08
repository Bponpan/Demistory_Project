import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complaint } from './complaint.entity';
import { ComplaintDTO } from './complaint.dto';



@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(Complaint)
    private complaintRepository : Repository<Complaint>
  ) {

  }
  
  findAll() : Promise<Complaint[]> {
    return this.complaintRepository.find();
  }

  findOne(id : number) : Promise<Complaint|null> {
    return this.complaintRepository.findOneBy({id:id});

  }

  create(complaint : ComplaintDTO ) : Promise<Complaint|null> {
    return this.complaintRepository.save(complaint);
  }

  async update(id: number, data: Partial<ComplaintDTO>): Promise<Complaint> {
    await this.complaintRepository.update(id, data);
    return this.complaintRepository.findOne({ where: { id } });
  }

  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.complaintRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}
}
