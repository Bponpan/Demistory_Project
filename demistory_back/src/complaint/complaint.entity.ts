import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne, BaseEntity } from 'typeorm';
import { User } from 'src/user/user.entity';
import { ComplaintStatus } from 'src/complaintStatus/complaintstatus.entity';


@Entity()
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user)
  user: User;

  @ManyToOne(() => ComplaintStatus, (complaintStatus) => complaintStatus.complaints)
  @JoinColumn()
  complaintStatus: ComplaintStatus;
  notifications: any;
}

