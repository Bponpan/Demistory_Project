import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
import { promises } from 'dns';
import { Room } from 'src/room/room.entity';

@Injectable()
export class UserService {
  findOneByOrFail(arg: { username: string; }) {
      return this.userRepository.findOneByOrFail(arg)
  }
  findOneByOrFaily(arg: { name: string; phonenumber: number; roomnumber:number; password:string; }) {
    return this.userRepository.findOneByOrFail(arg)
}
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>
    


  ) {

  }
  //sign up
   createUser(name: string, phonenumber: number, roomnumber: number, password: string): any {
    const user = new User();
    user.username = name;
    user.phonenumber = phonenumber;
    //user.room.room = roomnumber;
    user.password = password;
    const room = new Room();
    room.room = roomnumber;

    this.roomRepository.save(room);
    return  this.userRepository.save(user);
    
  }
//
  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(id : number) : Promise<User|null> {
    return this.userRepository.findOne({
      relations : ['room','usertype'],
      where : {id:id}
    });

  }
//
  //create(user : UserDTO ) : Promise<User|null> {
  //  return this.userRepository.save(user);
  //}
//
  

  async deleteById(id: number): Promise<void> {
  const deleteResult = await this.userRepository.delete({ id });
  if (deleteResult.affected === 0) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
}
}