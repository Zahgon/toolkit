import {realpath} from 'fs/promises'
import archiver from 'archiver'
import * as core from '@actions/core'
import {UploadZipSpecification} from './upload-zip-specification.js'
import {getUploadChunkSize} from '../shared/config.js'
import {WaterMarkedUploadStream} from './stream.js'

export const DEFAULT_COMPRESSION_LEVEL = 6

export async function createZipUploadStream(
  uploadSpecification: UploadZipSpecification[],
  compressionLevel: number = DEFAULT_COMPRESSION_LEVEL
): Promise<WaterMarkedUploadStream> {
    throw new Error("STUB");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const zipErrorCallback = (error: any): void => {
    throw new Error("STUB");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const zipWarningCallback = (error: any): void => {
    throw new Error("STUB");
}

const zipFinishCallback = (): void => {
    throw new Error("STUB");
}

const zipEndCallback = (): void => {
    throw new Error("STUB");
}
