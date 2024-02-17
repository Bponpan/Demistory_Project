import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards,Request,Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
   signup(@Body() signupDto: { name: string, phonenumber: number, roomnumber: number, password: string }) {
    try {
      // สมัครสมาชิกโดยใช้ข้อมูลจาก registerDto
      const user =  this.authService.signup(signupDto.name,signupDto.phonenumber,signupDto.roomnumber,signupDto.password);

      // หากสมัครสมาชิกสำเร็จ ให้ redirect ไปยังหน้าล็อกอิน
     
    } catch (error) {
      // หากเกิดข้อผิดพลาดในการสมัครสมาชิก
      // สามารถแสดงข้อความผิดพลาดหรือทำการจัดการข้อผิดพลาดตามที่คุณต้องการได้
      //return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to register user' });
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: {username : string ,password : string}) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}