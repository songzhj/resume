import { BaseUrl } from '../constant/env.ts';

export const pageTo = (path: string) => {
  // unify the path to remove leading slash
  const unifyPath = path.replace(/^\//, '');

  window.location.href = `${BaseUrl}/${unifyPath}`;
};
