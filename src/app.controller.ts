import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('josué')
  getNotifications(data: any) {
    console.log('teste', data);
  }

  @MessagePattern('celio')
  async celio(data: any): Promise<any> {
    console.log('celio', data);
    return 'teste';
  }
}
