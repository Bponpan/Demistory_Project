import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';


@Controller()
export class AppController {
  [x: string]: any;
  constructor(private readonly appService: AppService, private configService: ConfigService) {}

  @Get('environment')
  getEnv():any {
    const example_variable = this.configService.get<string>('EXAMPLE_VARIABLE')

    return example_variable
  }
}

