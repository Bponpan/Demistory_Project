import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './usertype.entity';
import { UserTypeDTO } from './usertype.dto';


@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private readonly userTypeRepository: Repository<UserType>,
  ) {}

  findAll() : Promise<UserType[]> {
    return this.userTypeRepository.find();
  }

  findOne(id : number) : Promise<UserType|null> {
    return this.userTypeRepository.findOneBy({id:id});

  }

  create(userType : UserTypeDTO ) : Promise<UserType|null> {
    return this.userTypeRepository.save(userType);
  }

  async update(id: number, data: Partial<UserTypeDTO>): Promise<UserType> {
    await this.userTypeRepository.update(id, data);
    return this.userTypeRepository.findOne({ where: { id } });
  }

  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.userTypeRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}
  
}