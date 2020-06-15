import { IsUUID, Length, NotEmpty } from 'sequelize-typescript';

import { EntityErrorsCodes } from '../const';

export const Required = NotEmpty({ msg: EntityErrorsCodes.REQUIRED });
export const IsUUID4 = IsUUID(4);
export const LengthValidator = (min, max) => Length({ min, max, msg: EntityErrorsCodes.LENGTH(min, max) })
