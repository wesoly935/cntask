import axios, { AxiosResponse } from 'axios';
axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, (error) => {
  if (error.response) {
    return Promise.resolve(error.response);
  }
});

export enum Endpoints {
  MailingGroup = 'api/MailingGroup',
}
