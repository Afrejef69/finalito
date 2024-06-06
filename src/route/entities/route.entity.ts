import { ApiProperty } from '@nestjs/swagger';
import Schedule from 'src/schedule/entities/schedule.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum IntermediateStops {
  marimba = 'marimba',
  gasolinera = 'gasolinera',
  tienda = 'tienda',
  colegio = 'colegio',
  hospital = 'hospital',
  cuesta = 'cuesta',
  puente = 'puente',
  semaforo = 'semaforo',
}

@Entity('routes')
class Route {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'The name of the route',
    example: 'Route 1',
  })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'The origin of the route',
    example: 'this route for my house',
  })
  description?: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'The origin of the route',
    example: 'Lagos',
  })
  origin: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'The destination of the route',
    example: 'University',
  })
  destination: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'List of intermediate stops',
    example:
      'marimba, gasolinera, tienda, colegio, hospital, cuesta, puente, semaforo',
  })
  intermediateStops?: IntermediateStops;

  @Column({ type: 'boolean' })
  @ApiProperty({
    description: 'The status of the route',
    example: 'ACTIVE',
  })
  status: boolean;

  @OneToMany(() => Schedule, (schedule) => schedule.route)
  @ApiProperty({ type: () => Schedule, isArray: true })
  schedules: Schedule[];
}

export default Route;
