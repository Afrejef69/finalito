import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { DaysOfOperation } from '../entities/schedule.entity';

export default class CreateScheduleDto {
  @IsString()
  departureTime: string;

  @IsString()
  @IsOptional()
  arrivalTime: string;

  @IsString()
  frequency: string;

  @IsArray()
  @IsEnum(DaysOfOperation, { each: true })
  @IsOptional()
  daysOfOperation?: DaysOfOperation[];
}
