import * as core from '@actions/core'
import * as io from '@actions/io'
import * as crypto from 'crypto'
import * as fs from 'fs'
import * as mm from './manifest.js'
import * as os from 'os'
import * as path from 'path'
import * as httpm from '@actions/http-client'
import * as semver from 'semver'
import * as stream from 'stream'
import * as util from 'util'
import {ok} from 'assert'
import {OutgoingHttpHeaders} from 'http'
import {exec, ExecOptions} from '@actions/exec'
import {RetryHelper} from './retry-helper.js'

export class HTTPError extends Error {
  constructor(readonly httpStatusCode: number | undefined) {
      throw new Error("STUB");
  }
}

const IS_WINDOWS = process.platform === 'win32'
const IS_MAC = process.platform === 'darwin'
const userAgent = 'actions/tool-cache'

/**
 * Download a tool from an url and stream it into a file
 *
 * @param url       url of tool to download
 * @param dest      path to download tool
 * @param auth      authorization header
 * @param headers   other headers
 * @returns         path to downloaded tool
 */
export async function downloadTool(
  url: string,
  dest?: string,
  auth?: string,
  headers?: OutgoingHttpHeaders
): Promise<string> {
    throw new Error("STUB");
}

async function downloadToolAttempt(
  url: string,
  dest: string,
  auth?: string,
  headers?: OutgoingHttpHeaders
): Promise<string> {
    throw new Error("STUB");
}

/**
 * Extract a .7z file
 *
 * @param file     path to the .7z file
 * @param dest     destination directory. Optional.
 * @param _7zPath  path to 7zr.exe. Optional, for long path support. Most .7z archives do not have this
 * problem. If your .7z archive contains very long paths, you can pass the path to 7zr.exe which will
 * gracefully handle long paths. By default 7zdec.exe is used because it is a very small program and is
 * bundled with the tool lib. However it does not support long paths. 7zr.exe is the reduced command line
 * interface, it is smaller than the full command line interface, and it does support long paths. At the
 * time of this writing, it is freely available from the LZMA SDK that is available on the 7zip website.
 * Be sure to check the current license agreement. If 7zr.exe is bundled with your action, then the path
 * to 7zr.exe can be pass to this function.
 * @returns        path to the destination directory
 */
export async function extract7z(
  file: string,
  dest?: string,
  _7zPath?: string
): Promise<string> {
    throw new Error("STUB");
}

/**
 * Extract a compressed tar archive
 *
 * @param file     path to the tar
 * @param dest     destination directory. Optional.
 * @param flags    flags for the tar command to use for extraction. Defaults to 'xz' (extracting gzipped tars). Optional.
 * @returns        path to the destination directory
 */
export async function extractTar(
  file: string,
  dest?: string,
  flags: string | string[] = 'xz'
): Promise<string> {
    throw new Error("STUB");
}

/**
 * Extract a xar compatible archive
 *
 * @param file     path to the archive
 * @param dest     destination directory. Optional.
 * @param flags    flags for the xar. Optional.
 * @returns        path to the destination directory
 */
export async function extractXar(
  file: string,
  dest?: string,
  flags: string | string[] = []
): Promise<string> {
    throw new Error("STUB");
}

/**
 * Extract a zip
 *
 * @param file     path to the zip
 * @param dest     destination directory. Optional.
 * @returns        path to the destination directory
 */
export async function extractZip(file: string, dest?: string): Promise<string> {
    throw new Error("STUB");
}

async function extractZipWin(file: string, dest: string): Promise<void> {
    throw new Error("STUB");
}

async function extractZipNix(file: string, dest: string): Promise<void> {
    throw new Error("STUB");
}

/**
 * Caches a directory and installs it into the tool cacheDir
 *
 * @param sourceDir    the directory to cache into tools
 * @param tool          tool name
 * @param version       version of the tool.  semver format
 * @param arch          architecture of the tool.  Optional.  Defaults to machine architecture
 */
export async function cacheDir(
  sourceDir: string,
  tool: string,
  version: string,
  arch?: string
): Promise<string> {
    throw new Error("STUB");
}

/**
 * Caches a downloaded file (GUID) and installs it
 * into the tool cache with a given targetName
 *
 * @param sourceFile    the file to cache into tools.  Typically a result of downloadTool which is a guid.
 * @param targetFile    the name of the file name in the tools directory
 * @param tool          tool name
 * @param version       version of the tool.  semver format
 * @param arch          architecture of the tool.  Optional.  Defaults to machine architecture
 */
export async function cacheFile(
  sourceFile: string,
  targetFile: string,
  tool: string,
  version: string,
  arch?: string
): Promise<string> {
    throw new Error("STUB");
}

/**
 * Finds the path to a tool version in the local installed tool cache
 *
 * @param toolName      name of the tool
 * @param versionSpec   version of the tool
 * @param arch          optional arch.  defaults to arch of computer
 */
export function find(
  toolName: string,
  versionSpec: string,
  arch?: string
): string {
    throw new Error("STUB");
}

/**
 * Finds the paths to all versions of a tool that are installed in the local tool cache
 *
 * @param toolName  name of the tool
 * @param arch      optional arch.  defaults to arch of computer
 */
export function findAllVersions(toolName: string, arch?: string): string[] {
    throw new Error("STUB");
}

// versions-manifest
//
// typical pattern of a setup-* action that supports JIT would be:
// 1. resolve semver against local cache
//
// 2. if no match, download
//   a. query versions manifest to match
//   b. if no match, fall back to source if exists (tool distribution)
//   c. with download url, download, install and preprent path

export type IToolRelease = mm.IToolRelease
export type IToolReleaseFile = mm.IToolReleaseFile

interface GitHubTreeItem {
  path: string
  size: string
  url: string
}

interface GitHubTree {
  tree: GitHubTreeItem[]
  truncated: boolean
}

export async function getManifestFromRepo(
  owner: string,
  repo: string,
  auth?: string,
  branch = 'master'
): Promise<IToolRelease[]> {
    throw new Error("STUB");
}

export async function findFromManifest(
  versionSpec: string,
  stable: boolean,
  manifest: IToolRelease[],
  archFilter: string = os.arch()
): Promise<IToolRelease | undefined> {
    throw new Error("STUB");
}

async function _createExtractFolder(dest?: string): Promise<string> {
    throw new Error("STUB");
}

async function _createToolPath(
  tool: string,
  version: string,
  arch?: string
): Promise<string> {
    throw new Error("STUB");
}

function _completeToolPath(tool: string, version: string, arch?: string): void {
    throw new Error("STUB");
}

/**
 * Check if version string is explicit
 *
 * @param versionSpec      version string to check
 */
export function isExplicitVersion(versionSpec: string): boolean {
    throw new Error("STUB");
}

/**
 * Get the highest satisfiying semantic version in `versions` which satisfies `versionSpec`
 *
 * @param versions        array of versions to evaluate
 * @param versionSpec     semantic version spec to satisfy
 */

export function evaluateVersions(
  versions: string[],
  versionSpec: string
): string {
    throw new Error("STUB");
}

/**
 * Gets RUNNER_TOOL_CACHE
 */
function _getCacheDirectory(): string {
    throw new Error("STUB");
}

/**
 * Gets RUNNER_TEMP
 */
function _getTempDirectory(): string {
    throw new Error("STUB");
}

/**
 * Gets a global variable
 */
function _getGlobal<T>(key: string, defaultValue: T): T {
    throw new Error("STUB");
}

/**
 * Returns an array of unique values.
 * @param values Values to make unique.
 */
function _unique<T>(values: T[]): T[] {
    throw new Error("STUB");
}
