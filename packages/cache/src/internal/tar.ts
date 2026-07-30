import {exec} from '@actions/exec'
import * as io from '@actions/io'
import {existsSync, writeFileSync} from 'fs'
import * as path from 'path'
import * as utils from './cacheUtils.js'
import {ArchiveTool} from './contracts.js'
import {
  CompressionMethod,
  SystemTarPathOnWindows,
  ArchiveToolType,
  TarFilename,
  ManifestFilename
} from './constants.js'

const IS_WINDOWS = process.platform === 'win32'

// Returns tar path and type: BSD or GNU
async function getTarPath(): Promise<ArchiveTool> {
    throw new Error("STUB");
}

// Return arguments for tar as per tarPath, compressionMethod, method type and os
async function getTarArgs(
  tarPath: ArchiveTool,
  compressionMethod: CompressionMethod,
  type: string,
  archivePath = ''
): Promise<string[]> {
    throw new Error("STUB");
}

// Returns commands to run tar and compression program
async function getCommands(
  compressionMethod: CompressionMethod,
  type: string,
  archivePath = ''
): Promise<string[]> {
    throw new Error("STUB");
}

function getWorkingDirectory(): string {
    throw new Error("STUB");
}

// Common function for extractTar and listTar to get the compression method
async function getDecompressionProgram(
  tarPath: ArchiveTool,
  compressionMethod: CompressionMethod,
  archivePath: string
): Promise<string[]> {
    throw new Error("STUB");
}

// Used for creating the archive
// -T#: Compress using # working thread. If # is 0, attempt to detect and use the number of physical CPU cores.
// zstdmt is equivalent to 'zstd -T0'
// --long=#: Enables long distance matching with # bits. Maximum is 30 (1GB) on 32-bit OS and 31 (2GB) on 64-bit.
// Using 30 here because we also support 32-bit self-hosted runners.
// Long range mode is added to zstd in v1.3.2 release, so we will not use --long in older version of zstd.
async function getCompressionProgram(
  tarPath: ArchiveTool,
  compressionMethod: CompressionMethod
): Promise<string[]> {
    throw new Error("STUB");
}

// Executes all commands as separate processes
async function execCommands(commands: string[], cwd?: string): Promise<void> {
    throw new Error("STUB");
}

// List the contents of a tar
export async function listTar(
  archivePath: string,
  compressionMethod: CompressionMethod
): Promise<void> {
    throw new Error("STUB");
}

// Extract a tar
export async function extractTar(
  archivePath: string,
  compressionMethod: CompressionMethod
): Promise<void> {
    throw new Error("STUB");
}

// Create a tar
export async function createTar(
  archiveFolder: string,
  sourceDirectories: string[],
  compressionMethod: CompressionMethod
): Promise<void> {
    throw new Error("STUB");
}
