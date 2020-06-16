import { Body, Get, Param, Patch, Post, Query, Type } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { BaseFindAllQuery } from '@pesto/backend-entities';
import { Model } from 'sequelize-typescript';

import { BaseEntityService } from './base-entity.service';

export function BaseEntityController<
  M extends Model<M>,
  D extends object = any,
  F extends object = any
>(modelRef: Type<M>, dtoRef: Type<D>, filterRef: Type<F>) {
  class EntityFindAllQuery extends BaseFindAllQuery {
    @ApiProperty({
      type: () => filterRef,
    })
    filter?: F;
  }

  class EntityController {
    constructor(protected readonly entityService: BaseEntityService<M, D, F>) {}

    @Get(':id')
    @ApiResponse({
      type: () => modelRef,
    })
    async getOne(@Param('id') id: string) {
      return this.entityService.findById(id);
    }

    @ApiBody({
      description: dtoRef.name,
      type: () => dtoRef,
    })
    @ApiResponse({
      description: modelRef.name,
      type: () => modelRef,
    })
    @Post()
    async createOne(@Body() dto: D) {
      return this.entityService.create(dto);
    }

    @ApiBody({
      description: dtoRef.name,
      type: () => dtoRef,
    })
    @ApiResponse({
      description: modelRef.name,
      type: () => modelRef,
    })
    @Patch(':id')
    async updateOne(@Body() dto: D, @Param('id') id: string) {
      return this.entityService.update(id, dto);
    }

    @Get()
    async findAll(@Query() query: EntityFindAllQuery) {
      return this.entityService.findAll(query);
    }
  }

  return EntityController;
}
