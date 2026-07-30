import {info, debug} from '@actions/core'
import {getOctokit} from '@actions/github'
import {DeleteArtifactResponse} from '../shared/interfaces.js'
import {getUserAgentString} from '../shared/user-agent.js'
import {getRetryOptions} from '../find/retry-options.js'
import {defaults as defaultGitHubOptions} from '@actions/github/lib/utils'
import {requestLog} from '@octokit/plugin-request-log'
import {retry} from '@octokit/plugin-retry'
import type {OctokitOptions} from '@octokit/core/types'
import {internalArtifactTwirpClient} from '../shared/artifact-twirp-client.js'
import {getBackendIdsFromToken} from '../shared/util.js'
import {
  DeleteArtifactRequest,
  ListArtifactsRequest,
  StringValue
} from '../../generated/index.js'
import {getArtifactPublic} from '../find/get-artifact.js'
import {ArtifactNotFoundError, InvalidResponseError} from '../shared/errors.js'

export async function deleteArtifactPublic(
  artifactName: string,
  workflowRunId: number,
  repositoryOwner: string,
  repositoryName: string,
  token: string
): Promise<DeleteArtifactResponse> {
    throw new Error("STUB");
}

export async function deleteArtifactInternal(
  artifactName
): Promise<DeleteArtifactResponse> {
    throw new Error("STUB");
}
