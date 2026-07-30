import * as stream from 'stream'
import * as fs from 'fs'
import {realpath} from 'fs/promises'
import * as core from '@actions/core'
import {getUploadChunkSize} from '../shared/config.js'

// Custom stream transformer so we can set the highWaterMark property
// See https://github.com/nodejs/node/issues/8855
export class WaterMarkedUploadStream extends stream.Transform {
  constructor(bufferSize: number) {
    super({
      highWaterMark: bufferSize
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _transform(chunk: any, enc: any, cb: any): void {
      throw new Error("STUB");
  }
}

export async function createRawFileUploadStream(
  filePath: string
): Promise<WaterMarkedUploadStream> {
    throw new Error("STUB");
}
