import fs from 'fs/promises'
import * as fsSync from 'fs'
import * as crypto from 'crypto'
import * as stream from 'stream'
import * as path from 'path'

import * as github from '@actions/github'
import * as core from '@actions/core'
import * as httpClient from '@actions/http-client'
import unzip from 'unzip-stream'
import {
  DownloadArtifactOptions,
  DownloadArtifactResponse,
  StreamExtractResponse
} from '../shared/interfaces.js'
import {getUserAgentString} from '../shared/user-agent.js'
import {getGitHubWorkspaceDir} from '../shared/config.js'
import {internalArtifactTwirpClient} from '../shared/artifact-twirp-client.js'
import {
  GetSignedArtifactURLRequest,
  Int64Value,
  ListArtifactsRequest
} from '../../generated/index.js'
import {getBackendIdsFromToken} from '../shared/util.js'
import {ArtifactNotFoundError} from '../shared/errors.js'

const scrubQueryParameters = (url: string): string => {
    throw new Error("STUB");
}

async function exists(path: string): Promise<boolean> {
  try {
    await fs.access(path)
    return true
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false
    } else {
      throw error
    }
  }
}

async function streamExtract(
  url: string,
  directory: string,
  skipDecompress?: boolean
): Promise<StreamExtractResponse> {
    throw new Error("STUB");
}

export async function streamExtractExternal(
  url: string,
  directory: string,
  opts: {timeout?: number; skipDecompress?: boolean} = {}
): Promise<StreamExtractResponse> {
    throw new Error("STUB");
}

export async function downloadArtifactPublic(
  artifactId: number,
  repositoryOwner: string,
  repositoryName: string,
  token: string,
  options?: DownloadArtifactOptions
): Promise<DownloadArtifactResponse> {
    throw new Error("STUB");
}

export async function downloadArtifactInternal(
  artifactId: number,
  options?: DownloadArtifactOptions
): Promise<DownloadArtifactResponse> {
    throw new Error("STUB");
}

async function resolveOrCreateDirectory(
  downloadPath = getGitHubWorkspaceDir()
): Promise<string> {
    throw new Error("STUB");
}
