import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity';


@Entity()
export class UserType {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    type : string; 
    @OneToOne(() => User)
    user: User;
}

