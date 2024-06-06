import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import Schedule from './entities/schedule.entity';
import CreateScheduleDto from './dtos/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  findAll() {
    const schedule = this.scheduleService.findAll();
    return schedule;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.scheduleService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Este endpoint sirve para crear un esquema de horario',
    type: Schedule,
  })
  create(@Body() body: CreateScheduleDto) {
    return this.scheduleService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.scheduleService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: number) {
    return this.scheduleService.remove(id);
  }
}
