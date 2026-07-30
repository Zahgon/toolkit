import * as core from '@actions/core'
import type {OctokitOptions} from '@octokit/core/types'
import {RequestRequestOptions} from '@octokit/types'

export type RetryOptions = {
  doNotRetry?: number[]
  enabled?: boolean
}

// Defaults for fetching artifacts
const defaultMaxRetryNumber = 5
const defaultExemptStatusCodes = [400, 401, 403, 404, 422] // https://github.com/octokit/plugin-retry.js/blob/9a2443746c350b3beedec35cf26e197ea318a261/src/index.ts#L14

export function getRetryOptions(
  defaultOptions: OctokitOptions,
  retries: number = defaultMaxRetryNumber,
  exemptStatusCodes: number[] = defaultExemptStatusCodes
): [RetryOptions, RequestRequestOptions | undefined] {
    throw new Error("STUB");
}
