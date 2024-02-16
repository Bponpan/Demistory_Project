import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { RoomDTO } from './room.dto';



@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  findAll() : Promise<Room[]> {
    return this.roomRepository.find();
  }

  findOne(id : number) : Promise<Room|null> {
    return this.roomRepository.findOneBy({id:id});

  }

  create(room : RoomDTO ) : Promise<Room|null> {
    return this.roomRepository.save(room);
  }

 

  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.roomRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}
  
}