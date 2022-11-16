import { createApi } from '@2ppl/core/api';
import * as Auth from './auth';
import * as Page from './page';
import * as Session from './session';
import * as User from './user';

export const publicAPI = createApi({
  auth: new Auth.ClientService('/auth'),
  page: new Page.ClientService('/page'),
});

export const API = createApi({
  session: new Session.ClientService('/session'),
  user: new User.ClientService('/user'),
});
