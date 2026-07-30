import os from 'os'
import {info} from '@actions/core'

// Used for controlling the highWaterMark value of the zip that is being streamed
// The same value is used as the chunk size that is use during upload to blob storage
export function getUploadChunkSize(): number {
    throw new Error("STUB");
}

export function getRuntimeToken(): string {
    throw new Error("STUB");
}

export function getResultsServiceUrl(): string {
    throw new Error("STUB");
}

export function isGhes(): boolean {
    throw new Error("STUB");
}

export function getGitHubWorkspaceDir(): string {
    throw new Error("STUB");
}

// The maximum value of concurrency is 300.
// This value can be changed with ACTIONS_ARTIFACT_UPLOAD_CONCURRENCY variable.
export function getConcurrency(): number {
    throw new Error("STUB");
}

export function getUploadChunkTimeout(): number {
    throw new Error("STUB");
}

// This value can be changed with ACTIONS_ARTIFACT_MAX_ARTIFACT_COUNT variable.
// Defaults to 1000 as a safeguard for rate limiting.
export function getMaxArtifactListCount(): number {
  const maxCountVar =
    process.env['ACTIONS_ARTIFACT_MAX_ARTIFACT_COUNT'] || '1000'

  const maxCount = parseInt(maxCountVar)
  if (isNaN(maxCount) || maxCount < 1) {
    throw new Error(
      'Invalid value set for ACTIONS_ARTIFACT_MAX_ARTIFACT_COUNT env variable'
    )
  }

  return maxCount
}
