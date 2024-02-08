import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Complaint } from 'src/complaint/complaint.entity';
import { ComplaintStatus } from 'src/complaintStatus/complaintstatus.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class ComplaintNotification {
  @PrimaryGeneratedColumn()
  id : number ;

  @ManyToOne(() => ComplaintStatus, (complaintStatus) => complaintStatus.complaints)
  @JoinColumn()
  complaintStatus: ComplaintStatus;

  @ManyToOne(() => User, (user) => user.notifications)
  user: User;

  @ManyToOne(() => Complaint, (complaint) => complaint.notifications)
  @JoinColumn()
  complaint: Complaint;
}

