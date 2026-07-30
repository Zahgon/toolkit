// Originally pulled from https://github.com/JasonEtco/actions-toolkit/blob/main/src/context.ts
import {WebhookPayload} from './interfaces.js'
import {readFileSync, existsSync} from 'fs'
import {EOL} from 'os'

export class Context {
  /**
   * Webhook payload object that triggered the workflow
   */
  payload: WebhookPayload

  eventName: string
  sha: string
  ref: string
  workflow: string
  action: string
  actor: string
  job: string
  runAttempt: number
  runNumber: number
  runId: number
  apiUrl: string
  serverUrl: string
  graphqlUrl: string

  /**
   * Hydrate the context from the environment
   */
  constructor() {
      throw new Error("STUB");
  }

  get issue(): {owner: string; repo: string; number: number} {
      throw new Error("STUB");
  }

  get repo(): {owner: string; repo: string} {
      throw new Error("STUB");
  }
}
