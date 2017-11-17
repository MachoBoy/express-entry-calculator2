import { SELECT } from './types';

export const select = value => ({
  type: SELECT,
  payload: value
});
