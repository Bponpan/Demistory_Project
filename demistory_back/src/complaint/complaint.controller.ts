import { Controller, Get, Param, Post, Body, Put, Delete, Req } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { ComplaintDTO } from './complaint.dto';
import { Complaint } from './complaint.entity';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly complaintService : ComplaintService){

  }

  @Get()
  getIndex(@Req() request : Request) : Promise<Complaint[]> {
    return this.complaintService.findAll();
  }

  @Get("id")
  getUserById(@Param('id') id : number) : Promise<Complaint> {
    return this.complaintService.findOne(id);
  }

  @Post(":id")
  postCreate(@Body() createComplaintDTO : ComplaintDTO) : Promise<Complaint> {
    return this.complaintService.create(createComplaintDTO)
  }

  @Put(":id")
  updateUserById(@Param('id') id: number, @Body() updateComplaintDTO: Partial<ComplaintDTO>): Promise<Complaint> {
  return this.complaintService.update(id, updateComplaintDTO);
}

  @Delete(":id")
  deleteUserById(@Param('id') id: number): { message: string } {
  this.complaintService.deleteById(id);
  return { message: "User deleted successfully" };
}
}
