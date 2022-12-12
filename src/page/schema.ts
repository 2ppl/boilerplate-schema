import { Static, Type } from '@sinclair/typebox';
import { CrudSchema, CrudType } from '@2ppl/core/crud';

export const entity = Type.Object({
  id: Type.String(),
  name: Type.String(),
  title: Type.Union([Type.String(), Type.Null()]),
  content: Type.Union([Type.String(), Type.Null()]),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export const singleEntity = entity;

export const listedEntity = entity;

export const createEntity = Type.Omit(entity, [
  'id',
  'createdAt',
  'updatedAt',
]);

export const updateEntity = Type.Partial(createEntity);

export const entityKey = Type.Pick(entity, ['id']);

export const entityCrudSchema: CrudSchema = {
  singleEntity,
  listedEntity,
  createEntity,
  updateEntity,
  entityKey,
};

export type EntityCrudType = CrudType<
  Static<typeof singleEntity>,
  Static<typeof listedEntity>,
  Static<typeof createEntity>,
  Static<typeof updateEntity>,
  Static<typeof entityKey>>;
