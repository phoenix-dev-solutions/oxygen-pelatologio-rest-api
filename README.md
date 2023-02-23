# Oxygen Pelatologio API - Node.js Client

A Node.js client for the Oxygen Pelatologio REST API. Easily interact with the Oxygen Pelatologio REST API using this library.

## Installation

```
npm install oxygen-pelatologio-rest-api
```

```
yarn add oxygen-pelatologio-rest-api
```

## Getting started

GET API credentials (apiKey) from Oxygen
.

Check out the Oxygen Pelatologio API endpoints and data that can be manipulated in <https://docs.oxygen.gr/>.

## Setup

Setup for the REST API integration :

```js
var OxygenRestApi = require('oxygen-pelatologio-rest-api');

const oxygen = new OxygenRestApi({
  apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
  version: 'v1',
  sandbox: true,
});
```

### Options

| Option        | Type      | Required | Description                                                                                                         |
| ------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `apiKey`      | `String`  | yes      | Your API key                                                                                                        |
| `sandbox`     | `Bool`    | no       | Sandbox, default is false                                                                                           |
| `version`     | `String`  | no       | API version, default is `v1`                                                                                        |
| `encoding`    | `String`  | no       | Encoding, default is `utf-8`                                                                                        |
| `timeout`     | `Integer` | no       | Define the request timeout                                                                                          |
| `axiosConfig` | `Object`  | no       | Define the custom [Axios config](https://github.com/axios/axios#request-config), also override this library options |

## Methods

### GET

- `.get(endpoint)`
- `.get(endpoint, params)`

| Params     | Type     | Description                                                           |
| ---------- | -------- | --------------------------------------------------------------------- |
| `endpoint` | `String` | Oxygen Pelatologio API endpoint, example: `contacts` or `contacts/12` |
| `params`   | `Object` | Query strings params, example: `{ code: "1000" }`                     |

### POST

- `.post(endpoint, data)`
- `.post(endpoint, data, params)`

| Params     | Type     | Description                                                        |
| ---------- | -------- | ------------------------------------------------------------------ |
| `endpoint` | `String` | Oxygen Pelatologio API endpoint, example: `contacts` or `products` |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request        |
| `params`   | `Object` | Query strings params                                               |

### PUT

- `.put(endpoint, data)`
- `.put(endpoint, data, params)`

| Params     | Type     | Description                                                               |
| ---------- | -------- | ------------------------------------------------------------------------- |
| `endpoint` | `String` | Oxygen Pelatologio API endpoint, example: `contacts/1` or `products/1234` |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request               |
| `params`   | `Object` | Query strings params                                                      |

## Example of use

```js
const OxygenRestApi = require('oxygen-pelatologio-rest-api');

const oxygen = new OxygenRestApi({
  apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
  version: 'v1',
  sandbox: true,
});

// List contacts
oxygen
  .get('contacts')
  .then((response) => {
    // Successful request
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);
    console.log('Response Data:', response.data);
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log('Response Status:', error.response.status);
    console.log('Response Headers:', error.response.headers);
    console.log('Response Data:', error.response.data);
  })
  .finally(() => {
    // Always executed.
  });

// Search contacts by Code
oxygen
  .get('contacts', {
    code: '1000',
  })
  .then((response) => {
    // Successful request
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);
    console.log('Response Data:', response.data);
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log('Response Status:', error.response.status);
    console.log('Response Headers:', error.response.headers);
    console.log('Response Data:', error.response.data);
  })
  .finally(() => {
    // Always executed.
  });

// Create a contact
oxygen
  .post('contacts', {
    code: '0001',
    name: 'Person 1', // See more in https://docs.oxygen.gr/#/Contacts/post_contacts
  })
  .then((response) => {
    // Successful request
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);
    console.log('Response Data:', response.data);
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log('Response Status:', error.response.status);
    console.log('Response Headers:', error.response.headers);
    console.log('Response Data:', error.response.data);
  })
  .finally(() => {
    // Always executed.
  });

// Edit a contact
oxygen
  .put('contacts/1', {
    name: 'Person 2', // See more in https://docs.oxygen.gr/#/Contacts/post_contacts
  })
  .then((response) => {
    // Successful request
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);
    console.log('Response Data:', response.data);
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log('Response Status:', error.response.status);
    console.log('Response Headers:', error.response.headers);
    console.log('Response Data:', error.response.data);
  })
  .finally(() => {
    // Always executed.
  });
```

## Release History

- 2023-02-22 - v1.0.0 - Initial release.
- 2023-02-23 - v1.0.1 - README.md
- 2023-02-23 - v1.0.2 - Change export type
- 2023-02-23 - v1.0.3 - Change export type
- 2023-02-23 - v1.0.4 - README.md
