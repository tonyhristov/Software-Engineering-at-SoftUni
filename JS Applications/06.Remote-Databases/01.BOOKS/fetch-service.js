const username = 'tony';
const password = '123456789';
const appKey = 'kid_SJaHmjW3H';
const appSecret = 'f0d282c7dd614b82a86dcc6d8252af3f';
const baseUrl = 'https://baas.kinvey.com';

function makeHeaders(httpMethod, data) {
   const headers = {
      method: httpMethod,
      headers: {
         Authorization: `Basic ${btoa(`${username}:${password}`)}`,
         'Content-Type': 'application/json',
      },
   };

   if (httpMethod === 'POST' || httpMethod === 'PUT') {
      headers.body = JSON.stringify(data);
   }

   return headers;
}

function fetchData(kinveyModule, endpoint, headers) {
   const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

   return fetch(url, headers)
      .then(handleError)
      .then(serializeData);
}

export function get(kinveyModule, endpoint) {
   const headers = makeHeaders('GET');
   return fetchData(kinveyModule, endpoint, headers);
}

export function post(kinveyModule, endpoint, data) {
   const headers = makeHeaders('POST', data);
   return fetchData(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data) {
   const headers = makeHeaders('PUT', data);
   return fetchData(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint) {
   const headers = makeHeaders('DELETE');
   return fetchData(kinveyModule, endpoint, headers);
}

function serializeData(x) {
   return x.json();
}

function handleError(e) {
   if (!e.ok) {
      throw new Error(e.statusText);
   }

   return e;
}
