import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as glob from '@actions/glob'
import * as io from '@actions/io'
import * as crypto from 'crypto'
import * as fs from 'fs'
import * as path from 'path'
import * as semver from 'semver'
import * as util from 'util'
import {
  CacheFilename,
  CompressionMethod,
  GnuTarPathOnWindows
} from './constants.js'

const versionSalt = '1.0'

// From https://github.com/actions/toolkit/blob/main/packages/tool-cache/src/tool-cache.ts#L23
export async function createTempDirectory(): Promise<string> {
    throw new Error("STUB");
}

export function getArchiveFileSizeInBytes(filePath: string): number {
    throw new Error("STUB");
}

export async function resolvePaths(patterns: string[]): Promise<string[]> {
    throw new Error("STUB");
}

export async function unlinkFile(filePath: fs.PathLike): Promise<void> {
    throw new Error("STUB");
}

async function getVersion(
  app: string,
  additionalArgs: string[] = []
): Promise<string> {
    throw new Error("STUB");
}

// Use zstandard if possible to maximize cache performance
export async function getCompressionMethod(): Promise<CompressionMethod> {
    throw new Error("STUB");
}

export function getCacheFileName(compressionMethod: CompressionMethod): string {
    throw new Error("STUB");
}

export async function getGnuTarPathOnWindows(): Promise<string> {
    throw new Error("STUB");
}

export function assertDefined<T>(name: string, value?: T): T {
    throw new Error("STUB");
}

export function getCacheVersion(
  paths: string[],
  compressionMethod?: CompressionMethod,
  enableCrossOsArchive = false
): string {
    throw new Error("STUB");
}

export function getRuntimeToken(): string {
    throw new Error("STUB");
}
