import * as core from '@actions/core'
import * as fs from 'fs'
import * as path from 'path'
import {
  UploadArtifactOptions,
  UploadArtifactResponse
} from '../shared/interfaces.js'
import {getExpiration} from './retention.js'
import {validateArtifactName} from './path-and-artifact-name-validation.js'
import {internalArtifactTwirpClient} from '../shared/artifact-twirp-client.js'
import {
  UploadZipSpecification,
  getUploadZipSpecification,
  validateRootDirectory
} from './upload-zip-specification.js'
import {getBackendIdsFromToken} from '../shared/util.js'
import {uploadToBlobStorage} from './blob-upload.js'
import {createZipUploadStream} from './zip.js'
import {createRawFileUploadStream, WaterMarkedUploadStream} from './stream.js'
import {
  CreateArtifactRequest,
  FinalizeArtifactRequest,
  StringValue
} from '../../generated/index.js'
import {FilesNotFoundError, InvalidResponseError} from '../shared/errors.js'
import {getMimeType} from './types.js'

export async function uploadArtifact(
  name: string,
  files: string[],
  rootDirectory: string,
  options?: UploadArtifactOptions | undefined
): Promise<UploadArtifactResponse> {
    throw new Error("STUB");
}
