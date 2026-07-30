import * as core from '@actions/core'
import * as path from 'path'
import * as utils from './internal/cacheUtils.js'
import * as cacheHttpClient from './internal/cacheHttpClient.js'
import * as cacheTwirpClient from './internal/shared/cacheTwirpClient.js'
import {
  getCacheServiceVersion,
  isGhes,
  getCacheMode,
  isCacheReadable,
  isCacheWritable
} from './internal/config.js'
import {DownloadOptions, UploadOptions} from './options.js'
import {createTar, extractTar, listTar} from './internal/tar.js'
import {
  CreateCacheEntryRequest,
  FinalizeCacheEntryUploadRequest,
  FinalizeCacheEntryUploadResponse,
  GetCacheEntryDownloadURLRequest
} from './generated/results/api/v1/cache.js'
import {HttpClientError} from '@actions/http-client'
import {CacheReadDeniedMessagePrefix} from './internal/constants.js'

export type {DownloadOptions, UploadOptions}
export class ValidationError extends Error {
  constructor(message: string) {
      throw new Error("STUB");
  }
}

export class ReserveCacheError extends Error {
  constructor(message: string) {
      throw new Error("STUB");
  }
}

/**
 * Stable prefix the cache service writes into the cache reservation response
 * when the issuer downgraded the cache token to read-only (for example, because
 * the run was triggered by an untrusted event). saveCacheV1 / saveCacheV2
 * dispatch on this prefix to re-classify the failure as a CacheWriteDeniedError
 * so consumers and tests can distinguish a policy denial from other reservation
 * failures. Internally it is logged as a non-fatal warning like other
 * best-effort save failures.
 */
export const CACHE_WRITE_DENIED_PREFIX = 'cache write denied:'

/**
 * Raised when the cache backend refuses to reserve a writable cache entry
 * because the JWT issued for this run was scoped read-only (for example, the
 * run was triggered by an event the repository administrator classified as
 * untrusted). The service-supplied detail message always begins with
 * `cache write denied:` (the full error message includes additional context
 * like the cache key).
 *
 * Extends ReserveCacheError for source-compatibility: existing
 * `instanceof ReserveCacheError` checks and `typedError.name ===
 * ReserveCacheError.name` paths keep working, while consumers that want to
 * distinguish the policy case can match on this subclass.
 */
export class CacheWriteDeniedError extends ReserveCacheError {
  constructor(message: string) {
      throw new Error("STUB");
  }
}

// Re-exported from constants so consumers keep referencing it here; the shared
// value also drives detection in cacheHttpClient without duplicating the string.
export const CACHE_READ_DENIED_PREFIX = CacheReadDeniedMessagePrefix

// Raised when the cache backend denies a download URL because the run's token
// has no readable cache scopes. Caching is best-effort, so restoreCache logs a
// warning and reports a cache miss rather than rethrowing this.
export class CacheReadDeniedError extends Error {
  constructor(message: string) {
      throw new Error("STUB");
  }
}

export class FinalizeCacheError extends Error {
  constructor(message: string) {
      throw new Error("STUB");
  }
}

function checkPaths(paths: string[]): void {
    throw new Error("STUB");
}

function checkKey(key: string): void {
    throw new Error("STUB");
}

/**
 * isFeatureAvailable to check the presence of Actions cache service
 *
 * @returns boolean return true if Actions cache service feature is available, otherwise false
 */
export function isFeatureAvailable(): boolean {
    throw new Error("STUB");
}

/**
 * Restores cache from keys
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache. Lookup is done with prefix matching.
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for primaryKey
 * @param downloadOptions cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */
export async function restoreCache(
  paths: string[],
  primaryKey: string,
  restoreKeys?: string[],
  options?: DownloadOptions,
  enableCrossOsArchive = false
): Promise<string | undefined> {
    throw new Error("STUB");
}

/**
 * Restores cache using the legacy Cache Service
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache. Lookup is done with prefix matching.
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for primaryKey
 * @param options cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on Windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */
async function restoreCacheV1(
  paths: string[],
  primaryKey: string,
  restoreKeys?: string[],
  options?: DownloadOptions,
  enableCrossOsArchive = false
): Promise<string | undefined> {
    throw new Error("STUB");
}

/**
 * Restores cache using Cache Service v2
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache. Lookup is done with prefix matching
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for primaryKey
 * @param downloadOptions cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */
async function restoreCacheV2(
  paths: string[],
  primaryKey: string,
  restoreKeys?: string[],
  options?: DownloadOptions,
  enableCrossOsArchive = false
): Promise<string | undefined> {
    throw new Error("STUB");
}

/**
 * Saves a list of files with the specified key
 *
 * @param paths a list of file paths to be cached
 * @param key an explicit key for restoring the cache
 * @param enableCrossOsArchive an optional boolean enabled to save cache on windows which could be restored on any platform
 * @param options cache upload options
 * @returns number returns cacheId if the cache was saved successfully and throws an error if save fails
 */
export async function saveCache(
  paths: string[],
  key: string,
  options?: UploadOptions,
  enableCrossOsArchive = false
): Promise<number> {
    throw new Error("STUB");
}

/**
 * Save cache using the legacy Cache Service
 *
 * @param paths
 * @param key
 * @param options
 * @param enableCrossOsArchive
 * @returns
 */
async function saveCacheV1(
  paths: string[],
  key: string,
  options?: UploadOptions,
  enableCrossOsArchive = false
): Promise<number> {
    throw new Error("STUB");
}

/**
 * Save cache using Cache Service v2
 *
 * @param paths a list of file paths to restore from the cache
 * @param key an explicit key for restoring the cache
 * @param options cache upload options
 * @param enableCrossOsArchive an optional boolean enabled to save cache on windows which could be restored on any platform
 * @returns
 */
async function saveCacheV2(
  paths: string[],
  key: string,
  options?: UploadOptions,
  enableCrossOsArchive = false
): Promise<number> {
    throw new Error("STUB");
}
