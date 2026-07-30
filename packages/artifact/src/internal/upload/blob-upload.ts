import {BlobClient, BlockBlobUploadStreamOptions} from '@azure/storage-blob'
import {TransferProgressEvent} from '@azure/core-http-compat'
import {WaterMarkedUploadStream} from './stream.js'
import {
  getUploadChunkSize,
  getConcurrency,
  getUploadChunkTimeout
} from '../shared/config.js'
import * as core from '@actions/core'
import * as crypto from 'crypto'
import * as stream from 'stream'
import {NetworkError} from '../shared/errors.js'

export interface BlobUploadResponse {
  /**
   * The total reported upload size in bytes. Empty if the upload failed
   */
  uploadSize?: number

  /**
   * The SHA256 hash of the uploaded file. Empty if the upload failed
   */
  sha256Hash?: string
}

export async function uploadToBlobStorage(
  authenticatedUploadURL: string,
  uploadStream: WaterMarkedUploadStream,
  contentType: string
): Promise<BlobUploadResponse> {
    throw new Error("STUB");
}
