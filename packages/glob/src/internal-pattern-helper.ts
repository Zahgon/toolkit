import * as pathHelper from './internal-path-helper.js'
import {MatchKind} from './internal-match-kind.js'
import {Pattern} from './internal-pattern.js'

const IS_WINDOWS = process.platform === 'win32'

/**
 * Given an array of patterns, returns an array of paths to search.
 * Duplicates and paths under other included paths are filtered out.
 */
export function getSearchPaths(patterns: Pattern[]): string[] {
    throw new Error("STUB");
}

/**
 * Matches the patterns against the path
 */
export function match(patterns: Pattern[], itemPath: string): MatchKind {
  let result: MatchKind = MatchKind.None

  for (const pattern of patterns) {
    if (pattern.negate) {
      result &= ~pattern.match(itemPath)
    } else {
      result |= pattern.match(itemPath)
    }
  }

  return result
}

/**
 * Checks whether to descend further into the directory
 */
export function partialMatch(patterns: Pattern[], itemPath: string): boolean {
    throw new Error("STUB");
}
