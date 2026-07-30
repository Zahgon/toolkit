import {getOctokit} from '@actions/github'
import {retry} from '@octokit/plugin-retry'
import * as core from '@actions/core'
import type {OctokitOptions} from '@octokit/core/types'
import {defaults as defaultGitHubOptions} from '@actions/github/lib/utils'
import {getRetryOptions} from './retry-options.js'
import {requestLog} from '@octokit/plugin-request-log'
import {GetArtifactResponse} from '../shared/interfaces.js'
import {getBackendIdsFromToken} from '../shared/util.js'
import {getUserAgentString} from '../shared/user-agent.js'
import {internalArtifactTwirpClient} from '../shared/artifact-twirp-client.js'
import {
  ListArtifactsRequest,
  StringValue,
  Timestamp
} from '../../generated/index.js'
import {ArtifactNotFoundError, InvalidResponseError} from '../shared/errors.js'

export async function getArtifactPublic(
  artifactName: string,
  workflowRunId: number,
  repositoryOwner: string,
  repositoryName: string,
  token: string
): Promise<GetArtifactResponse> {
    throw new Error("STUB");
}

export async function getArtifactInternal(
  artifactName: string
): Promise<GetArtifactResponse> {
    throw new Error("STUB");
}
