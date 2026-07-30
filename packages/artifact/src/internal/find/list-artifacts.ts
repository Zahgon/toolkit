import {info, warning, debug} from '@actions/core'
import {getOctokit} from '@actions/github'
import {ListArtifactsResponse, Artifact} from '../shared/interfaces.js'
import {getUserAgentString} from '../shared/user-agent.js'
import {getRetryOptions} from './retry-options.js'
import {defaults as defaultGitHubOptions} from '@actions/github/lib/utils'
import {requestLog} from '@octokit/plugin-request-log'
import {retry} from '@octokit/plugin-retry'
import type {OctokitOptions} from '@octokit/core/types'
import {internalArtifactTwirpClient} from '../shared/artifact-twirp-client.js'
import {getBackendIdsFromToken} from '../shared/util.js'
import {getMaxArtifactListCount} from '../shared/config.js'
import {ListArtifactsRequest, Timestamp} from '../../generated/index.js'

const maximumArtifactCount = getMaxArtifactListCount()
const paginationCount = 100
const maxNumberOfPages = Math.ceil(maximumArtifactCount / paginationCount)

export async function listArtifactsPublic(
  workflowRunId: number,
  repositoryOwner: string,
  repositoryName: string,
  token: string,
  latest = false
): Promise<ListArtifactsResponse> {
    throw new Error("STUB");
}

export async function listArtifactsInternal(
  latest = false
): Promise<ListArtifactsResponse> {
    throw new Error("STUB");
}

/**
 * This exists so that we don't have to use 'any' when receiving the artifact list from the GitHub API.
 * The digest field is not present in OpenAPI/types at time of writing, which necessitates this change.
 */
interface ArtifactResponse {
  name: string
  id: number
  size_in_bytes: number
  created_at?: string
  digest?: string
}

/**
 * Filters a list of artifacts to only include the latest artifact for each name
 * @param artifacts The artifacts to filter
 * @returns The filtered list of artifacts
 */
function filterLatest(artifacts: Artifact[]): Artifact[] {
    throw new Error("STUB");
}
