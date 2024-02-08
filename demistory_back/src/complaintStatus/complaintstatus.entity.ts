import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Complaint } from 'src/complaint/complaint.entity';

@Entity()
export class ComplaintStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToMany(() => Complaint, (complaint) => complaint.complaintStatus)
  complaints: Complaint[];

}

