import * as core from '@actions/core'
import {
  HttpCodes,
  HttpClientError,
  HttpClientResponse
} from '@actions/http-client'
import {DefaultRetryDelay, DefaultRetryAttempts} from './constants.js'
import {ITypedResponseWithError} from './contracts.js'

export function isSuccessStatusCode(statusCode?: number): boolean {
  if (!statusCode) {
    return false
  }
  return statusCode >= 200 && statusCode < 300
}

export function isServerErrorStatusCode(statusCode?: number): boolean {
    throw new Error("STUB");
}

export function isRetryableStatusCode(statusCode?: number): boolean {
    throw new Error("STUB");
}

async function sleep(milliseconds: number): Promise<void> {
  return new Promise(resolve => { throw new Error("STUB"); })
}

export async function retry<T>(
  name: string,
  method: () => Promise<T>,
  getStatusCode: (arg0: T) => number | undefined,
  maxAttempts = DefaultRetryAttempts,
  delay = DefaultRetryDelay,
  onError: ((arg0: Error) => T | undefined) | undefined = undefined
): Promise<T> {
    throw new Error("STUB");
}

export async function retryTypedResponse<T>(
  name: string,
  method: () => Promise<ITypedResponseWithError<T>>,
  maxAttempts = DefaultRetryAttempts,
  delay = DefaultRetryDelay
): Promise<ITypedResponseWithError<T>> {
    throw new Error("STUB");
}

export async function retryHttpClientResponse(
  name: string,
  method: () => Promise<HttpClientResponse>,
  maxAttempts = DefaultRetryAttempts,
  delay = DefaultRetryDelay
): Promise<HttpClientResponse> {
    throw new Error("STUB");
}
