import { PartialType } from '@nestjs/swagger';
import CreateRouteDto from './create-route.dto';

class UpdateRouteDto extends PartialType(CreateRouteDto) {}

export default UpdateRouteDto;
