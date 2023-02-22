# Oxygen Pelatologio API - Node.js Client

A Node.js client for the Oxygen Pelatologio REST API. Easily interact with the Oxygen Pelatologio REST API using this library.

<!-- [![build status](https://secure.travis-ci.org/woocommerce/wc-api-node.svg)](http://travis-ci.org/woocommerce/wc-api-node)
[![dependency status](https://david-dm.org/woocommerce/wc-api-node.svg)](https://david-dm.org/woocommerce/wc-api-node)
[![npm version](https://img.shields.io/npm/v/woocommerce-api.svg)](https://www.npmjs.com/package/woocommerce-api) -->

## Installation

```
npm install --save oxygen-pelatologio-rest-api
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

| Params     | Type     | Description                                                          |
| ---------- | -------- | -------------------------------------------------------------------- |
| `endpoint` | `String` | Oxygen Pelatologio API endpoint, example: `customers` or `orders/12` |
| `params`   | `Object` | Query strings params, example: `{ per_page: 20 }`                    |

### POST

- `.post(endpoint, data)`
- `.post(endpoint, data, params)`

| Params     | Type     | Description                                                       |
| ---------- | -------- | ----------------------------------------------------------------- |
| `endpoint` | `String` | Oxygen Pelatologio API endpoint, example: `customers` or `orders` |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request       |
| `params`   | `Object` | Query strings params                                              |

### PUT

- `.put(endpoint, data)`
- `.put(endpoint, data, params)`

| Params     | Type     | Description                                                              |
| ---------- | -------- | ------------------------------------------------------------------------ |
| `endpoint` | `String` | Oxygen Pelatologio API endpoint, example: `customers/1` or `orders/1234` |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request              |
| `params`   | `Object` | Query strings params                                                     |

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
