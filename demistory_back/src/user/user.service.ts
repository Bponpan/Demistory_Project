import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
import { promises } from 'dns';

@Injectable()
export class UserService {
  findOneByOrFail(arg: { username: string; }) {
      return this.userRepository.findOneByOrFail(arg)
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {

  }

  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(id : number) : Promise<User|null> {
    return this.userRepository.findOne({
      relations : ['room','usertype'],
      where : {id:id}
    });

  }

  create(user : UserDTO ) : Promise<User|null> {
    return this.userRepository.save(user);
  }

  

  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.userRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}
}
