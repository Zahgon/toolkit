import * as github from '@actions/github'

const PUBLIC_GOOD_ID = 'public-good'
const GITHUB_ID = 'github'

const FULCIO_PUBLIC_GOOD_URL = 'https://fulcio.sigstore.dev'
const REKOR_PUBLIC_GOOD_URL = 'https://rekor.sigstore.dev'

export type SigstoreInstance = typeof PUBLIC_GOOD_ID | typeof GITHUB_ID

export type Endpoints = {
  fulcioURL: string
  rekorURL?: string
  tsaServerURL?: string
}

export const SIGSTORE_PUBLIC_GOOD: Endpoints = {
  fulcioURL: FULCIO_PUBLIC_GOOD_URL,
  rekorURL: REKOR_PUBLIC_GOOD_URL
}

export const signingEndpoints = (sigstore?: SigstoreInstance): Endpoints => {
    throw new Error("STUB");
}

function buildGitHubEndpoints(): Endpoints {
  const serverURL = process.env.GITHUB_SERVER_URL || 'https://github.com'
  let host = new URL(serverURL).hostname

  if (host === 'github.com') {
    host = 'githubapp.com'
  }
  return {
    fulcioURL: `https://fulcio.${host}`,
    tsaServerURL: `https://timestamp.${host}`
  }
}
