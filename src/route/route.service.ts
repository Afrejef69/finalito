import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Route from './entities/route.entity';
import { Repository } from 'typeorm';
import UpdateRouteDto from './dtos/update-route.dto';
import CreateRouteDto from './dtos/create-route.dto';

@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>,
  ) {}

  findAll() {
    const routes = this.routeRepository.find();
    return routes;
  }

  async findOne(id: string) {
    const route = await this.routeRepository.findOne({
      where: { id },
    });
    return route;
  }

  async create(new_route: CreateRouteDto) {
    const route = this.routeRepository.create(new_route);
    return this.routeRepository.save(route);
  }

  async update(id: string, update_route: UpdateRouteDto) {
    const route = await this.findOne(id);
    this.routeRepository.merge(route, update_route);
    return this.routeRepository.save(route);
  }

  async remove(id: string) {
    const route = await this.findOne(id);
    return this.routeRepository.remove(route);
  }
}
