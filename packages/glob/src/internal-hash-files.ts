import * as crypto from 'crypto'
import * as core from '@actions/core'
import * as fs from 'fs'
import * as stream from 'stream'
import * as util from 'util'
import * as path from 'path'
import {Minimatch, type MinimatchOptions} from 'minimatch'
import {Globber} from './glob.js'
import {HashFileOptions} from './internal-hash-file-options.js'

const IS_WINDOWS = process.platform === 'win32'
const MAX_WARNED_FILES = 10

const MINIMATCH_OPTIONS: MinimatchOptions = {
  dot: true,
  nobrace: true,
  nocase: IS_WINDOWS,
  nocomment: true,
  noext: true,
  nonegate: true
}

type ExcludeMatcher = {
  absolutePathMatcher: Minimatch
  relativePathMatcher: Minimatch
}

type OutsideRootFile = {
  matched: string
  resolved: string
}

// Checks if resolvedFile is inside any of resolvedRoots.
function isInResolvedRoots(
  resolvedFile: string,
  resolvedRoots: string[]
): boolean {
    throw new Error("STUB");
}

function normalizeForMatch(p: string): string {
    throw new Error("STUB");
}

function buildExcludeMatchers(excludePatterns: string[]): ExcludeMatcher[] {
    throw new Error("STUB");
}

function isExcluded(
  resolvedFile: string,
  excludeMatchers: ExcludeMatcher[],
  rootsForRelativeMatch: string[]
): boolean {
    throw new Error("STUB");
}

export async function hashFiles(
  globber: Globber,
  currentWorkspace: string,
  options?: HashFileOptions,
  verbose: Boolean = false
): Promise<string> {
    throw new Error("STUB");
}
