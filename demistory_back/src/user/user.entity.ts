import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { UserType } from 'src/userType/usertype.entity';
import { Complaint } from 'src/complaint/complaint.entity';
import { Room } from 'src/room/room.entity';
import { ComplaintNotification } from 'src/notification/notification.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    password: string; 

    @Column()
    phonenumber: number;

    @ManyToOne(() => UserType)
    usertype: UserType;

    @OneToMany(() => Complaint, (complaint) => complaint.user)
    complaints: Complaint[];

    @ManyToOne(() => Room, (room) => room.users)
    @JoinColumn()
    room: Room;

    @OneToMany(() => ComplaintNotification, (notification) => notification) 
    notifications: ComplaintNotification[]; 
    
}

