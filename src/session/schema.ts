import { Static, Type } from '@sinclair/typebox';
import { CrudSchema, CrudType } from '@2ppl/core/crud';
import * as User from '../user';

export const entity = Type.Object({
  id: Type.String(),
  accessToken: Type.String(),
  accessTokenExpiredAt: Type.String(),
  refreshToken: Type.String(),
  refreshTokenExpiredAt: Type.String(),
  userId: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export const singleEntity = Type.Intersect([
  Type.Omit(entity, ['userId']),
  Type.Object({
    user: User.singleEntity,
  }),
]);

export const listedEntity = Type.Intersect([
  Type.Omit(entity, [
    'userId',
    'accessToken',
    'refreshToken',
  ]),
  Type.Object({
    user: User.singleEntity,
  }),
]);

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
