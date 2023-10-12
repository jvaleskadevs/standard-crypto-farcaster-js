/* tslint:disable */
/* eslint-disable */
/**
 * v2 Farcaster
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { ErrorRes } from "../models";
// @ts-ignore
import { RegisterSignerKeyReqBody } from "../models";
// @ts-ignore
import { Signer } from "../models";
/**
 * SignerApi - axios parameter creator
 * @export
 */
export const SignerApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a signer and returns the signer status. \\ **Note**: While testing please reuse the signer, it costs money to approve a signer.
     * @summary Creates a signer and returns the signer status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSigner: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/farcaster/signer`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Registers an app fid, deadline and a signature. Returns the signer status with an approval url.
     * @summary Register Signed Key
     * @param {RegisterSignerKeyReqBody} registerSignerKeyReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerSignedKey: async (
      registerSignerKeyReqBody: RegisterSignerKeyReqBody,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'registerSignerKeyReqBody' is not null or undefined
      assertParamExists(
        "registerSignedKey",
        "registerSignerKeyReqBody",
        registerSignerKeyReqBody
      );
      const localVarPath = `/farcaster/signer/signed_key`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        registerSignerKeyReqBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
     * @summary Fetches the status of a signer
     * @param {string} signerUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signer: async (
      signerUuid: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'signerUuid' is not null or undefined
      assertParamExists("signer", "signerUuid", signerUuid);
      const localVarPath = `/farcaster/signer`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (signerUuid !== undefined) {
        localVarQueryParameter["signer_uuid"] = signerUuid;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * SignerApi - functional programming interface
 * @export
 */
export const SignerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SignerApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a signer and returns the signer status. \\ **Note**: While testing please reuse the signer, it costs money to approve a signer.
     * @summary Creates a signer and returns the signer status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSigner(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signer>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSigner(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Registers an app fid, deadline and a signature. Returns the signer status with an approval url.
     * @summary Register Signed Key
     * @param {RegisterSignerKeyReqBody} registerSignerKeyReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async registerSignedKey(
      registerSignerKeyReqBody: RegisterSignerKeyReqBody,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signer>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.registerSignedKey(
          registerSignerKeyReqBody,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
     * @summary Fetches the status of a signer
     * @param {string} signerUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async signer(
      signerUuid: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signer>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.signer(
        signerUuid,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * SignerApi - factory interface
 * @export
 */
export const SignerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SignerApiFp(configuration);
  return {
    /**
     * Creates a signer and returns the signer status. \\ **Note**: While testing please reuse the signer, it costs money to approve a signer.
     * @summary Creates a signer and returns the signer status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSigner(options?: AxiosRequestConfig): AxiosPromise<Signer> {
      return localVarFp
        .createSigner(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Registers an app fid, deadline and a signature. Returns the signer status with an approval url.
     * @summary Register Signed Key
     * @param {SignerApiRegisterSignedKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerSignedKey(
      requestParameters: SignerApiRegisterSignedKeyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Signer> {
      return localVarFp
        .registerSignedKey(requestParameters.registerSignerKeyReqBody, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
     * @summary Fetches the status of a signer
     * @param {SignerApiSignerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signer(
      requestParameters: SignerApiSignerRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Signer> {
      return localVarFp
        .signer(requestParameters.signerUuid, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for registerSignedKey operation in SignerApi.
 * @export
 * @interface SignerApiRegisterSignedKeyRequest
 */
export interface SignerApiRegisterSignedKeyRequest {
  /**
   *
   * @type {RegisterSignerKeyReqBody}
   * @memberof SignerApiRegisterSignedKey
   */
  readonly registerSignerKeyReqBody: RegisterSignerKeyReqBody;
}

/**
 * Request parameters for signer operation in SignerApi.
 * @export
 * @interface SignerApiSignerRequest
 */
export interface SignerApiSignerRequest {
  /**
   *
   * @type {string}
   * @memberof SignerApiSigner
   */
  readonly signerUuid: string;
}

/**
 * SignerApi - object-oriented interface
 * @export
 * @class SignerApi
 * @extends {BaseAPI}
 */
export class SignerApi extends BaseAPI {
  /**
   * Creates a signer and returns the signer status. \\ **Note**: While testing please reuse the signer, it costs money to approve a signer.
   * @summary Creates a signer and returns the signer status
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SignerApi
   */
  public createSigner(options?: AxiosRequestConfig) {
    return SignerApiFp(this.configuration)
      .createSigner(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Registers an app fid, deadline and a signature. Returns the signer status with an approval url.
   * @summary Register Signed Key
   * @param {SignerApiRegisterSignedKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SignerApi
   */
  public registerSignedKey(
    requestParameters: SignerApiRegisterSignedKeyRequest,
    options?: AxiosRequestConfig
  ) {
    return SignerApiFp(this.configuration)
      .registerSignedKey(requestParameters.registerSignerKeyReqBody, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
   * @summary Fetches the status of a signer
   * @param {SignerApiSignerRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SignerApi
   */
  public signer(
    requestParameters: SignerApiSignerRequest,
    options?: AxiosRequestConfig
  ) {
    return SignerApiFp(this.configuration)
      .signer(requestParameters.signerUuid, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
