export const EntityErrorsCodes = {
  LENGTH: (min, max) => `LENGTH;min:${min};max:${max}`,
  UNIQUE: 'UNIQUE',
  INVALID_EMAIL: 'INVALID_EMAIL',
  REQUIRED: 'REQUIRED',
  ENTITY_NOT_FOUND: 'ENTITY_NOT_FOUND'
}
