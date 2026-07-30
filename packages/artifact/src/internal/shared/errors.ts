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

export class ArtifactNotFoundError extends Error {
  constructor(message = 'Artifact not found') {
    super(message)
    this.name = 'ArtifactNotFoundError'
  }
}

export class GHESNotSupportedError extends Error {
  constructor(
    message = '@actions/artifact v2.0.0+, upload-artifact@v4+ and download-artifact@v4+ are not currently supported on GHES.'
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
