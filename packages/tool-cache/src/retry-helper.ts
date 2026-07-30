import * as core from '@actions/core'

/**
 * Internal class for retries
 */
export class RetryHelper {
  private maxAttempts: number
  private minSeconds: number
  private maxSeconds: number

  constructor(maxAttempts: number, minSeconds: number, maxSeconds: number) {
      throw new Error("STUB");
  }

  async execute<T>(
    action: () => Promise<T>,
    isRetryable?: (e: Error) => boolean
  ): Promise<T> {
      throw new Error("STUB");
  }

  private getSleepAmount(): number {
      throw new Error("STUB");
  }

  private async sleep(seconds: number): Promise<void> {
    return new Promise(resolve => { throw new Error("STUB"); })
  }
}
