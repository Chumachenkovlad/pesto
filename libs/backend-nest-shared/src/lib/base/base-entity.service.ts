import { NotFoundException, OnModuleInit } from '@nestjs/common';
import { EntityErrorsCodes } from '@pesto/backend-entities';
import { IEntitiesListRes, IFindAllQuery, IPagination, ISorting } from '@pesto/public-interfaces';
import { merge } from 'lodash';
import { Model, Sequelize } from 'sequelize-typescript';

import { DEFAULT_LIMIT } from '../constants';

const defaultQuery: IFindAllQuery<{}> = {
  pagination: {
    limit: DEFAULT_LIMIT,
    offset: 0
  }
};

export abstract class BaseEntityService<M, D extends object = any, F extends object = any>
  implements OnModuleInit {
  protected defaultQuery: IFindAllQuery<F> = {};
  protected defaultSorting: Partial<ISorting> = {};
  protected defaultPagination: IPagination = {
    limit: DEFAULT_LIMIT,
    offset: 0
  };

  onModuleInit() {
    this.defaultQuery = merge(
      {},
      this.defaultQuery,
      { pagination: this.defaultPagination },
      { sorting: this.defaultSorting }
    );
  }

  constructor(
    // tslint:disable-next-line: callable-types
    protected model: { new (): M } & typeof Model,
    protected sequelize: Sequelize
  ) {}

  async create(dto: D): Promise<M> {
    return this.model.create(dto, { raw: true });
  }

  async update(id: number, dto: D) {
    const entity = await this.findById(id);

    if (!entity) {
      throw new NotFoundException(EntityErrorsCodes.ENTITY_NOT_FOUND);
    }

    await this.sequelize.transaction(async transaction => {
      await entity.set(dto).save({ transaction });
    });

    return this.findById(id);
  }

  async findById(id: number) {
    return this.model.findOne({ where: { id } });
  }

  async findAll(
    query: IFindAllQuery<F> = {}
  ): Promise<Partial<IEntitiesListRes<M, Partial<F>>>> {
    const { filter, sorting, pagination } = {
      ...defaultQuery,
      ...query
    };

    const { rows, count } = await this.model.findAndCountAll({
      raw: true,
      limit: pagination.limit,
      offset: pagination.offset,
      where: filter || {},
      order: sorting ? [[sorting.prop, sorting.direction]] : []
    });

    return {
      rows,
      filter,
      sorting,
      pagination: {
        ...pagination,
        count
      }
    };
  }
}
