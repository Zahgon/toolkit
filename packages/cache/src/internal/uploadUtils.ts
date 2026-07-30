import * as core from '@actions/core'
import {
  BlobClient,
  BlobUploadCommonResponse,
  BlockBlobClient,
  BlockBlobParallelUploadOptions
} from '@azure/storage-blob'
import {TransferProgressEvent} from '@azure/core-rest-pipeline'
import {InvalidResponseError} from './shared/errors.js'
import {UploadOptions} from '../options.js'

/**
 * Class for tracking the upload state and displaying stats.
 */
export class UploadProgress {
  contentLength: number
  sentBytes: number
  startTime: number
  displayedComplete: boolean
  timeoutHandle?: ReturnType<typeof setTimeout>

  constructor(contentLength: number) {
    this.contentLength = contentLength
    this.sentBytes = 0
    this.displayedComplete = false
    this.startTime = Date.now()
  }

  /**
   * Sets the number of bytes sent
   *
   * @param sentBytes the number of bytes sent
   */
  setSentBytes(sentBytes: number): void {
      throw new Error("STUB");
  }

  /**
   * Returns the total number of bytes transferred.
   */
  getTransferredBytes(): number {
      throw new Error("STUB");
  }

  /**
   * Returns true if the upload is complete.
   */
  isDone(): boolean {
      throw new Error("STUB");
  }

  /**
   * Prints the current upload stats. Once the upload completes, this will print one
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
   * Stops the timer that displays the stats. As this typically indicates the upload
   * is complete, this will display one last line, unless the last line has already
   * been written.
   */
  stopDisplayTimer(): void {
      throw new Error("STUB");
  }
}

/**
 * Uploads a cache archive directly to Azure Blob Storage using the Azure SDK.
 * This function will display progress information to the console. Concurrency of the
 * upload is determined by the calling functions.
 *
 * @param signedUploadURL
 * @param archivePath
 * @param options
 * @returns
 */
export async function uploadCacheArchiveSDK(
  signedUploadURL: string,
  archivePath: string,
  options?: UploadOptions
): Promise<BlobUploadCommonResponse> {
    throw new Error("STUB");
}
