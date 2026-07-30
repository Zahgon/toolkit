export class FilesNotFoundError extends Error {
  files: string[]

  constructor(files: string[] = []) {
      throw new Error("STUB");
  }
}

export class InvalidResponseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidResponseError'
  }
}

export class CacheNotFoundError extends Error {
  constructor(message = 'Cache not found') {
    super(message)
    this.name = 'CacheNotFoundError'
  }
}

export class GHESNotSupportedError extends Error {
  constructor(
    message = '@actions/cache v4.1.4+, actions/cache/save@v4+ and actions/cache/restore@v4+ are not currently supported on GHES.'
  ) {
    super(message)
    this.name = 'GHESNotSupportedError'
  }
}

export class NetworkError extends Error {
  code: string

  constructor(code: string) {
      throw new Error("STUB");
  }

  static isNetworkErrorCode = (code?: string): boolean => {
      throw new Error("STUB");
  }
}

export class UsageError extends Error {
  constructor() {
      throw new Error("STUB");
  }

  static isUsageErrorMessage = (msg?: string): boolean => {
      throw new Error("STUB");
  }
}

export class RateLimitError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RateLimitError'
  }
}
