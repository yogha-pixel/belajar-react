import { apiAuthRequest } from './apiclient';

export async function logoutApi(token) {
  return apiAuthRequest('/logout', token, {
    method: 'POST',
  });
}