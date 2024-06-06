import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';
import Route from 'src/route/entities/route.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum DaysOfOperation {
  Lunes = 'Lunes',
  Martes = 'Martes',
  Miercoles = 'Miercoles',
  Jueves = 'Jueves',
  Viernes = 'Viernes',
  Sabado = 'Sabado',
  Domingo = 'Domingo',
}

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'time' })
  @Matches(/^([0-9]\d|2[0-3]):[0-5\d][0-9]$/, {
    message: 'The departure time must be in the format HH:MM',
  })
  @ApiProperty({
    description: 'Departure time',
    example: '08:00',
  })
  departureTime: string;

  @Column({ type: 'time' })
  @Matches(/^([0-9]\d|2[0-3]):[0-5\d][0-9]$/, {
    message: 'The departure time must be in the format HH:MM',
  })
  @ApiProperty({
    description: 'Arrival time',
    example: '08:00',
  })
  arrivalTime?: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'Frequency of the schedule',
    example: 'Every 30 minutes',
  })
  frequency: string;

  @Column({
    type: 'text',
    nullable: true,
    transformer: {
      to: (value: DaysOfOperation[]) => value.join(','),
      from: (value: string) => value.split(','),
    },
  })
  @ApiProperty({
    description: 'List of intermediate stops',
    example:
      '["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]',
  })
  daysofOperation?: DaysOfOperation[];

  @ManyToOne(() => Route, (route) => route.schedules)
  @ApiProperty({ type: () => Route })
  route: Route;
}

export default Schedule;
