import { NotFoundException, OnModuleInit } from '@nestjs/common';
import { IEntitiesListRes, IFindAllQuery, IFindOneQuery, IPagination, ISorting } from '@pesto/public-interfaces';
import { createUuid, DEFAULT_LIMIT, EntityErrorsCodes } from '@pesto/shared';
import { isEmpty, isNil, isString, mapValues, merge, pickBy } from 'lodash';
import { Op } from 'sequelize';
import { Model, Sequelize } from 'sequelize-typescript';

const defaultQuery: IFindAllQuery<{}> = {
  pagination: {
    limit: DEFAULT_LIMIT,
    offset: 0,
  },
};

const isCorrectFilterValue = (value: unknown): boolean =>
  isString(value) && Boolean(value.length);

const skipNullableValues = <T extends object>(filter: T) =>
  pickBy(filter, isCorrectFilterValue);

const coerceFilterToWhereObject = <T extends object>(filter: T) => {
  if (isNil(filter) || isEmpty(filter)) {
    return {};
  }

  return mapValues(skipNullableValues(filter), value => {
    return {
      [Op.like]: `%${value}%`,
    };
  });
};

export abstract class BaseEntityService<
  M extends Model<M>,
  D extends object = any,
  F extends object = any
> implements OnModuleInit {
  protected defaultQuery: IFindAllQuery<F> = {};
  protected defaultSorting: Partial<ISorting> = {};
  protected defaultPagination: IPagination = {
    limit: DEFAULT_LIMIT,
    offset: 0,
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

  async create(dto: D) {
    const id = createUuid();
    const model = await this.model.create({ id, ...dto }, { raw: true });
    return this.findById(model.id);
  }

  async update(id: string, dto: D) {
    const entity = await this.findById(id);

    if (!entity) {
      throw new NotFoundException(EntityErrorsCodes.ENTITY_NOT_FOUND);
    }

    await this.sequelize.transaction(async transaction => {
      await entity.set(dto).save({ transaction });
    });

    return this.findById(id);
  }

  async findById(id: string, query: IFindOneQuery = {}) {
    const { scope } = query;

    let model = this.model;

    if (scope) {
      model = this.model.scope(scope);
    }

    return model.findByPk(id);
  }

  async findAll(
    query: IFindAllQuery<F> = {}
  ): Promise<Partial<IEntitiesListRes<M, Partial<F>>>> {
    const {
      filter,
      sorting,
      include,
      scope,
      pagination: { limit, offset },
    } = {
      ...defaultQuery,
      ...query,
    };

    let model = this.model;

    if (scope) {
      model = this.model.scope(scope);
    }

    const { rows, count } = await this.model.findAndCountAll({
      limit,
      offset,
      where: coerceFilterToWhereObject(filter || {}),
      order: sorting ? [[sorting.prop, sorting.direction]] : [],
      include: include ? include.split(',').map(as => ({ as })) : [],
    });

    return {
      rows: rows as M[],
      filter,
      sorting,
      pagination: {
        limit,
        offset,
        count,
      },
    };
  }
}
