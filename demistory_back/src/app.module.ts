import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Complaint} from './complaint/complaint.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ComplaintService } from './complaint/complaint.service';
import { NotificationService } from './notification/notification.service';
import { ComplaintStatusService } from './complaintStatus/complaintstatus.service';
import { RoomService } from './room/room.service';
import { RoomController } from './room/room.controller';
import { UserService } from './user/user.service';
import { UserTypeService } from './userType/usertype.service';
import { UserController } from './user/user.controller';
import { ComplaintController } from './complaint/complaint.controller';
import { NotificationController } from './notification/notification.controller';
import { ComplaintStatusController } from './complaintStatus/complaintstatus.controller';
import { UserTypeController } from './userType/usertype.controller';
import { User } from './user/user.entity';
import { UserType } from './userType/usertype.entity';
import { ComplaintStatus } from './complaintStatus/complaintstatus.entity';
import { Room } from './room/room.entity';
import { ComplaintNotification } from './notification/notification.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: '10d' },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const options: TypeOrmModuleOptions = {
          type: 'sqlite',
          database: 'project.sqlite',
          entities: [Complaint, User, UserType, ComplaintStatus, Room, ComplaintNotification], 
          synchronize: true,
        };

        return options;
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Complaint, User, UserType, ComplaintStatus, Room, ComplaintNotification]),
  ],
  controllers: [AppController,AuthController, ComplaintController, NotificationController, ComplaintStatusController, RoomController, UserController, UserTypeController],
  providers: [AppService,AuthService, ComplaintService, NotificationService, ComplaintStatusService, RoomService, UserService, UserTypeService],
})
export class AppModule {}