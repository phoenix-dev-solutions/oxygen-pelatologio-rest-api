'use strict';

const axios = require('axios');
const pjson = require('./package.json');

/**
 * Oxygen Pelatologio REST API wrapper
 *
 * @param {Object} opt
 */
class OxygenRestApi {
  /**
   * Class constructor.
   *
   * @param {Object} opt
   */
  constructor(opt) {
    if (!(this instanceof OxygenRestApi)) {
      return new OxygenRestApi(opt);
    }

    opt = opt || {};

    if (!opt.apiKey) {
      throw new OptionsException('ApiKey is required');
    }

    this.classVersion = pjson.version;

    this._setDefaultsOptions(opt);
  }
  /**
   * Set default options
   *
   * @param {Object} opt
   */

  _setDefaultsOptions(opt) {
    this.url = 'https://api.oxygen.gr';
    this.sandboxUrl = 'https://sandbox-api.oxygen.gr';
    this.apiKey = opt.apiKey;
    this.sandbox = opt.sandbox || false;
    this.version = opt.version || 'v1';
    this.encoding = opt.encoding || 'utf8';
    this.timeout = opt.timeout;
    this.axiosConfig = opt.axiosConfig || {};
  }
  /**
   * Parse params object.
   *
   * @param {Object} params
   * @param {Object} query
   */

  _parseParamsObject(params, query) {
    for (const key in params) {
      const value = params[key];

      if (typeof value === 'object') {
        for (const prop in value) {
          const itemKey = key.toString() + '[' + prop.toString() + ']';
          query[itemKey] = value[prop];
        }
      } else {
        query[key] = value;
      }
    }

    return query;
  }

  /**
   * Get URL
   *
   * @param  {String} endpoint
   *
   * @return {String}
   */

  _getUrl(endpoint) {
    const params = '/' + this.version + '/' + endpoint;
    if (this.sandbox) return this.sandboxUrl + params;
    else return this.url + params;
  }

  /**
   * Do requests
   *
   * @param  {String} method
   * @param  {String} endpoint
   * @param  {Object} data
   * @param  {Object} params
   *
   * @return {Object}
   */

  _request(method, endpoint, data, params = {}) {
    const url = this._getUrl(endpoint);

    let options = {
      url: url,
      method: method,
      responseEncoding: this.encoding,
      timeout: this.timeout,
      responseType: 'json',
      headers: {
        'User-Agent': 'Oxygen REST API - JS Client/' + this.classVersion,
        Accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    options.params = { ...options.params, ...params };

    if (data) {
      options.data = JSON.stringify(data);
    }

    options = { ...options, ...this.axiosConfig };
    return axios(options);
  }
  /**
   * GET requests
   *
   * @param  {String} endpoint
   * @param  {Object} params
   *
   * @return {Object}
   */

  get(endpoint, params = {}) {
    return this._request('get', endpoint, null, params);
  }
  /**
   * POST requests
   *
   * @param  {String} endpoint
   * @param  {Object} data
   * @param  {Object} params
   *
   * @return {Object}
   */

  post(endpoint, data, params = {}) {
    return this._request('post', endpoint, data, params);
  }
  /**
   * PUT requests
   *
   * @param  {String} endpoint
   * @param  {Object} data
   * @param  {Object} params
   *
   * @return {Object}
   */

  put(endpoint, data, params = {}) {
    return this._request('put', endpoint, data, params);
  }
}
module.exports = OxygenRestApi;

/**
 * Options Exception.
 */
class OptionsException {
  /**
   * Constructor.
   *
   * @param {String} message
   */
  constructor(message) {
    this.name = 'Options Error';
    this.message = message;
  }
}

exports.OptionsException = OptionsException;
