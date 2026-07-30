import * as github from '@actions/github'
import {retry} from '@octokit/plugin-retry'
import {RequestHeaders} from '@octokit/types'
import {getUserAgent} from './internal/utils.js'

const CREATE_ATTESTATION_REQUEST = 'POST /repos/{owner}/{repo}/attestations'
const DEFAULT_RETRY_COUNT = 5

export type WriteOptions = {
  retry?: number
  headers?: RequestHeaders
}
/**
 * Writes an attestation to the repository's attestations endpoint.
 * @param attestation - The attestation to write.
 * @param token - The GitHub token for authentication.
 * @returns The ID of the attestation.
 * @throws Error if the attestation fails to persist.
 */
export const writeAttestation = async (
  attestation: unknown,
  token: string,
  options: WriteOptions = {}
): Promise<string> => {
    throw new Error("STUB");
}
