import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  room : number;

  @OneToMany(() => User, (user) => user.room)
  users: User[]; 
}

