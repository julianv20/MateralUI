import { urlFetch } from '../constants';

export const users = async (user) => {
  const resp = await fetch(`${urlFetch}${user}`);
  const payload = resp.json();
  return payload;
};
