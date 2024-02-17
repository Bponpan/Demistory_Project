import { Controller, Get, Param, Post, Body, Put, Delete, Req } from '@nestjs/common';
import { ComplaintStatusService } from './complaintstatus.service';
import { ComplaintStatusDTO } from './complaintstatus.dto';
import { ComplaintStatus } from './complaintstatus.entity';


@Controller('complaint-statuses')
export class ComplaintStatusController {
  constructor(private readonly complaintStatusService: ComplaintStatusService) {}

  @Get()
  getIndex(@Req() request : Request) : Promise<ComplaintStatus[]> {
    return this.complaintStatusService.findAll();
  }
  
  @Get("id")
  getUserById(@Param('id') id : number) : Promise<ComplaintStatus> {
    return this.complaintStatusService.findOne(id);
  }

  @Post()
  postCreate(@Body() createComplaintDTO : ComplaintStatusDTO) : Promise<ComplaintStatus> {
    return this.complaintStatusService.create(createComplaintDTO)
  }

  


  @Delete(":id")
  deleteUserById(@Param('id') id: number): { message: string } {
  this.complaintStatusService.deleteById(id);
  return { message: "User deleted successfully" };
}
}
