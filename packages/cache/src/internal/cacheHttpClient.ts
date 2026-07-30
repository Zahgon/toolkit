import * as core from '@actions/core'
import {HttpClient} from '@actions/http-client'
import {BearerCredentialHandler} from '@actions/http-client/lib/auth'
import {
  RequestOptions,
  TypedResponse
} from '@actions/http-client/lib/interfaces'
import * as fs from 'fs'
import {URL} from 'url'
import * as utils from './cacheUtils.js'
import {uploadCacheArchiveSDK} from './uploadUtils.js'
import {
  ArtifactCacheEntry,
  InternalCacheOptions,
  CommitCacheRequest,
  ReserveCacheRequest,
  ReserveCacheResponse,
  ITypedResponseWithError,
  ArtifactCacheList
} from './contracts.js'
import {
  downloadCacheHttpClient,
  downloadCacheHttpClientConcurrent,
  downloadCacheStorageSDK
} from './downloadUtils.js'
import {
  DownloadOptions,
  UploadOptions,
  getDownloadOptions,
  getUploadOptions
} from '../options.js'
import {
  isSuccessStatusCode,
  retryHttpClientResponse,
  retryTypedResponse
} from './requestUtils.js'
import {getCacheServiceURL} from './config.js'
import {CacheReadDeniedMessagePrefix} from './constants.js'
import {getUserAgentString} from './shared/user-agent.js'

function getCacheApiUrl(resource: string): string {
    throw new Error("STUB");
}

function createAcceptHeader(type: string, apiVersion: string): string {
  return `${type};api-version=${apiVersion}`
}

function getRequestOptions(): RequestOptions {
  const requestOptions: RequestOptions = {
    headers: {
      Accept: createAcceptHeader('application/json', '6.0-preview.1')
    }
  }

  return requestOptions
}

function createHttpClient(): HttpClient {
  const token = process.env['ACTIONS_RUNTIME_TOKEN'] || ''
  const bearerCredentialHandler = new BearerCredentialHandler(token)

  return new HttpClient(
    getUserAgentString(),
    [bearerCredentialHandler],
    getRequestOptions()
  )
}

export async function getCacheEntry(
  keys: string[],
  paths: string[],
  options?: InternalCacheOptions
): Promise<ArtifactCacheEntry | null> {
    throw new Error("STUB");
}

async function printCachesListForDiagnostics(
  key: string,
  httpClient: HttpClient,
  version: string
): Promise<void> {
    throw new Error("STUB");
}

export async function downloadCache(
  archiveLocation: string,
  archivePath: string,
  options?: DownloadOptions
): Promise<void> {
    throw new Error("STUB");
}

// Reserve Cache
export async function reserveCache(
  key: string,
  paths: string[],
  options?: InternalCacheOptions
): Promise<ITypedResponseWithError<ReserveCacheResponse>> {
    throw new Error("STUB");
}

function getContentRange(start: number, end: number): string {
    throw new Error("STUB");
}

async function uploadChunk(
  httpClient: HttpClient,
  resourceUrl: string,
  openStream: () => NodeJS.ReadableStream,
  start: number,
  end: number
): Promise<void> {
    throw new Error("STUB");
}

async function uploadFile(
  httpClient: HttpClient,
  cacheId: number,
  archivePath: string,
  options?: UploadOptions
): Promise<void> {
    throw new Error("STUB");
}

async function commitCache(
  httpClient: HttpClient,
  cacheId: number,
  filesize: number
): Promise<TypedResponse<null>> {
    throw new Error("STUB");
}

export async function saveCache(
  cacheId: number,
  archivePath: string,
  signedUploadURL?: string,
  options?: UploadOptions
): Promise<void> {
    throw new Error("STUB");
}
