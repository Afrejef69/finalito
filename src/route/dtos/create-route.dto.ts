import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IntermediateStops } from '../entities/route.entity';
import { Transform } from 'class-transformer';

export default class CreateRouteDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  description: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  origin: string;

  @IsString()
  destination: string;

  @IsEnum(IntermediateStops)
  @IsOptional()
  intermediateStops: IntermediateStops;

  @Transform(({ value }) => value === 'ACTIVE')
  @IsBoolean()
  @Matches(/^(ACTIVE|INACTIVE)$/)
  status: boolean;
}
