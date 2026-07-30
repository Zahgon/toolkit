import * as core from '@actions/core'
import {HttpClient, HttpClientResponse} from '@actions/http-client'
import {BlockBlobClient} from '@azure/storage-blob'
import {TransferProgressEvent} from '@azure/core-rest-pipeline'
import * as buffer from 'buffer'
import * as fs from 'fs'
import * as stream from 'stream'
import * as util from 'util'

import * as utils from './cacheUtils.js'
import {SocketTimeout} from './constants.js'
import {DownloadOptions} from '../options.js'
import {retryHttpClientResponse} from './requestUtils.js'

/**
 * Pipes the body of a HTTP response to a stream
 *
 * @param response the HTTP response
 * @param output the writable stream
 */
async function pipeResponseToStream(
  response: HttpClientResponse,
  output: NodeJS.WritableStream
): Promise<void> {
    throw new Error("STUB");
}

/**
 * Class for tracking the download state and displaying stats.
 */
export class DownloadProgress {
  contentLength: number
  segmentIndex: number
  segmentSize: number
  segmentOffset: number
  receivedBytes: number
  startTime: number
  displayedComplete: boolean
  timeoutHandle?: ReturnType<typeof setTimeout>

  constructor(contentLength: number) {
    this.contentLength = contentLength
    this.segmentIndex = 0
    this.segmentSize = 0
    this.segmentOffset = 0
    this.receivedBytes = 0
    this.displayedComplete = false
    this.startTime = Date.now()
  }

  /**
   * Progress to the next segment. Only call this method when the previous segment
   * is complete.
   *
   * @param segmentSize the length of the next segment
   */
  nextSegment(segmentSize: number): void {
      throw new Error("STUB");
  }

  /**
   * Sets the number of bytes received for the current segment.
   *
   * @param receivedBytes the number of bytes received
   */
  setReceivedBytes(receivedBytes: number): void {
      throw new Error("STUB");
  }

  /**
   * Returns the total number of bytes transferred.
   */
  getTransferredBytes(): number {
      throw new Error("STUB");
  }

  /**
   * Returns true if the download is complete.
   */
  isDone(): boolean {
      throw new Error("STUB");
  }

  /**
   * Prints the current download stats. Once the download completes, this will print one
   * last line and then stop.
   */
  display(): void {
      throw new Error("STUB");
  }

  /**
   * Returns a function used to handle TransferProgressEvents.
   */
  onProgress(): (progress: TransferProgressEvent) => void {
      throw new Error("STUB");
  }

  /**
   * Starts the timer that displays the stats.
   *
   * @param delayInMs the delay between each write
   */
  startDisplayTimer(delayInMs = 1000): void {
      throw new Error("STUB");
  }

  /**
   * Stops the timer that displays the stats. As this typically indicates the download
   * is complete, this will display one last line, unless the last line has already
   * been written.
   */
  stopDisplayTimer(): void {
      throw new Error("STUB");
  }
}

/**
 * Download the cache using the Actions toolkit http-client
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 */
export async function downloadCacheHttpClient(
  archiveLocation: string,
  archivePath: string
): Promise<void> {
    throw new Error("STUB");
}

/**
 * Download the cache using the Actions toolkit http-client concurrently
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 */
export async function downloadCacheHttpClientConcurrent(
  archiveLocation: string,
  archivePath: fs.PathLike,
  options: DownloadOptions
): Promise<void> {
    throw new Error("STUB");
}

async function downloadSegmentRetry(
  httpClient: HttpClient,
  archiveLocation: string,
  offset: number,
  count: number
): Promise<DownloadSegment> {
    throw new Error("STUB");
}

async function downloadSegment(
  httpClient: HttpClient,
  archiveLocation: string,
  offset: number,
  count: number
): Promise<DownloadSegment> {
    throw new Error("STUB");
}

declare class DownloadSegment {
  offset: number
  count: number
  buffer: Buffer
}

/**
 * Download the cache using the Azure Storage SDK.  Only call this method if the
 * URL points to an Azure Storage endpoint.
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 * @param options the download options with the defaults set
 */
export async function downloadCacheStorageSDK(
  archiveLocation: string,
  archivePath: string,
  options: DownloadOptions
): Promise<void> {
    throw new Error("STUB");
}

const promiseWithTimeout = async <T>(
  timeoutMs: number,
  promise: Promise<T>
): Promise<T | string> => {
    throw new Error("STUB");
}
