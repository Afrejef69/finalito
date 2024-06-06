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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RouteService } from './route.service';
import CreateRouteDto from './dtos/create-route.dto';
import Route from './entities/route.entity';

@ApiTags('routes')
@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Get()
  findAll() {
    const routes = this.routeService.findAll();
    return routes;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'This endpoint is used to create a new route',
    type: Route,
  })
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routeService.create(createRouteDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.routeService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: string) {
    return this.routeService.remove(id);
  }
}
