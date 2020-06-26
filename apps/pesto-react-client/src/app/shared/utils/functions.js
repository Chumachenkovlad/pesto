import { get } from 'lodash-es';

export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const pluck = (path, defaultValue = null) => obj =>
  get(obj, path, defaultValue);
