import { Injectable } from '@nestjs/common';
import Schedule from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UpdateScheduleDto from './dtos/update-schedule.dto';
import CreateScheduleDto from './dtos/create-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly ScheduleRepository: Repository<Schedule>,
  ) {}

  findAll() {
    const Schedules = this.ScheduleRepository.find();
    return Schedules;
  }

  async findOne(id: number) {
    const Schedule = await this.ScheduleRepository.findOne({
      where: { id },
    });
    return Schedule;
  }

  create(new_Schedule: CreateScheduleDto) {
    const Schedule = this.ScheduleRepository.create(new_Schedule);
    return this.ScheduleRepository.save(Schedule);
  }

  async update(id: number, update_Schedule: UpdateScheduleDto) {
    const Schedule = await this.findOne(id);
    this.ScheduleRepository.merge(Schedule, update_Schedule);
    return this.ScheduleRepository.save(Schedule);
  }

  async remove(id: number) {
    const Schedule = await this.findOne(id);
    return this.ScheduleRepository.remove(Schedule);
  }
}
