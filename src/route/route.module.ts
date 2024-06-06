import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Route from './entities/route.entity';
import { RouteController } from './route.controller';
import { ScheduleModule } from 'src/schedule/schedule.module';

@Module({
  imports: [TypeOrmModule.forFeature([Route]), ScheduleModule],
  controllers: [RouteController],
  providers: [RouteService],
  exports: [RouteService],
})
export class RouteModule {}
