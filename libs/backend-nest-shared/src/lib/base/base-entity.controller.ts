import { Body, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { IFindAllQuery } from '@pesto/public-interfaces';
import { Model } from 'sequelize-typescript';

import { BaseEntityService } from './base-entity.service';

export class BaseEntityController<M extends Model<M>, D extends object = any, F extends object = any> {
  constructor(protected readonly entityService: BaseEntityService<M, D, F>) {}

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.entityService.findById(id);
  }

  @Post()
  async createOne(@Body() dto: D) {
    return this.entityService.create(dto);
  }

  @Patch(':id')
  async updateOne(@Body() dto: D, @Param('id') id: string) {
    return this.entityService.update(id, dto)
  }

  @Get()
  async findAll(@Query() query: IFindAllQuery<F>) {
    return this.entityService.findAll(query);
  }
}
