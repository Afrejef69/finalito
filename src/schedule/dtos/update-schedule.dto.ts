import { PartialType } from '@nestjs/swagger';
import CreateScheduleDto from './create-schedule.dto';

class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}

export default UpdateScheduleDto;
