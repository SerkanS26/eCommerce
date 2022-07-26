import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDA4MjU5YjJkM2MyNGM0MDczZjE1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODgwMDkzNywiZXhwIjoxNjYxMzkyOTM3fQ.zFLSByBzhkA-1bF5gluxk1n4UngaCidDkvQOfiObiDI';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
