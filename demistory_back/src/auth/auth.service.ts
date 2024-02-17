import { Injectable, UnauthorizedException,ConflictException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
     private userService : UserService,
     private jwtService: JwtService

  ) {}
  
//login
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByOrFail({username : username});
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id : user.id, username : user.username, usertype : user.usertype  };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  //sign up
  async signup(name: string, phonenumber: number, roomnumber: number, password: string): Promise<any> {
    try {
      console.log(name)
      console.log(phonenumber)
      console.log(roomnumber)
      console.log(password)
      // ตรวจสอบว่ามีผู้ใช้ที่ใช้ชื่อผู้ใช้เดียวกันอยู่แล้วหรือไม่
      //const existingUser = await this.userService.findOneByOrFaily({ name: name, phonenumber:phonenumber,roomnumber:roomnumber,password:password});
      //if (existingUser) {
      //  throw new ConflictException('Username is already taken');
      //}

      // สร้างผู้ใช้ใหม่
      const user = await this.userService.createUser(name,phonenumber,roomnumber,password );

      // สร้าง payload สำหรับ JWT
      const payload = { id: user.id, username: user.username, usertype: user.usertype,ok:true };

      // สร้าง access token และส่งกลับ
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      // หากมีข้อผิดพลาดในการสร้างผู้ใช้ใหม่
      // สามารถจัดการข้อผิดพลาดตามที่ต้องการได้
      throw new Error('Failed to register user: ' + error.message);
    }
  }
}