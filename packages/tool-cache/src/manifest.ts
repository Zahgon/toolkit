import * as semver from 'semver'
import {debug} from '@actions/core'
import * as os from 'os'
import * as cp from 'child_process'
import * as fs from 'fs'

// Internal object for testability (allows mocking in ESM)
export const _internal = {
  readLinuxVersionFile(): string {
        throw new Error("STUB");
    }
}

/*
NOTE: versions must be sorted descending by version in the manifest
      this library short circuits on first semver spec match

      platform_version is an optional filter and can be a semver spec or range
[
  {
    "version": "1.2.3",
    "stable": true,
    "release_url": "https://github.com/actions/sometool/releases/tag/1.2.3-20200402.6",
    "files": [
      {
        "filename": "sometool-1.2.3-linux-x64.zip",
        "arch": "x64",
        "platform": "linux",
        "platform_version": "18.04"
        "download_url": "https://github.com/actions/sometool/releases/tag/1.2.3-20200402.6/sometool-1.2.3-linux-x64.zip"
      },
    ...
    ]
  },
  ...
]
*/

export interface IToolReleaseFile {
  filename: string
  // 'aix', 'darwin', 'freebsd', 'linux', 'openbsd',
  // 'sunos', and 'win32'
  // platform_version is an optional semver filter
  // TODO: do we need distribution (e.g. ubuntu).
  //       not adding yet but might need someday.
  //       right now, 16.04 and 18.04 work
  platform: string
  platform_version?: string

  // 'arm', 'arm64', 'ia32', 'mips', 'mipsel',
  // 'ppc', 'ppc64', 's390', 's390x',
  // 'x32', and 'x64'.
  arch: string

  download_url: string
}

export interface IToolRelease {
  version: string
  stable: boolean
  release_url: string
  files: IToolReleaseFile[]
}

export async function _findMatch(
  versionSpec: string,
  stable: boolean,
  candidates: IToolRelease[],
  archFilter: string
): Promise<IToolRelease | undefined> {
    throw new Error("STUB");
}

export function _getOsVersion(): string {
    throw new Error("STUB");
}

// Alias for backwards compatibility
export function _readLinuxVersionFile(): string {
    throw new Error("STUB");
}
