import * as os from 'os'
import * as path from 'path'
import * as pathHelper from './internal-path-helper.js'
import assert from 'assert'
import {Minimatch, type MinimatchOptions} from 'minimatch'
import {MatchKind} from './internal-match-kind.js'
import {Path} from './internal-path.js'

const IS_WINDOWS = process.platform === 'win32'

export class Pattern {
  /**
   * Indicates whether matches should be excluded from the result set
   */
  readonly negate: boolean = false

  /**
   * The directory to search. The literal path prior to the first glob segment.
   */
  readonly searchPath: string

  /**
   * The path/pattern segments. Note, only the first segment (the root directory)
   * may contain a directory separator character. Use the trailingSeparator field
   * to determine whether the pattern ended with a trailing slash.
   */
  readonly segments: string[]

  /**
   * Indicates the pattern should only match directories, not regular files.
   */
  readonly trailingSeparator: boolean

  /**
   * The Minimatch object used for matching
   */
  private readonly minimatch: Minimatch

  /**
   * Used to workaround a limitation with Minimatch when determining a partial
   * match and the path is a root directory. For example, when the pattern is
   * `/foo/**` or `C:\foo\**` and the path is `/` or `C:\`.
   */
  private readonly rootRegExp: RegExp

  /**
   * Indicates that the pattern is implicitly added as opposed to user specified.
   */
  private readonly isImplicitPattern: boolean

  constructor(pattern: string)
  constructor(
    pattern: string,
    isImplicitPattern: boolean,
    segments: undefined,
    homedir: string
  )
  constructor(
    negate: boolean,
    isImplicitPattern: boolean,
    segments: string[],
    homedir?: string
  )
  constructor(
    patternOrNegate: string | boolean,
    isImplicitPattern = false,
    segments?: string[],
    homedir?: string
  ) {
      throw new Error("STUB");
  }

  /**
   * Matches the pattern against the specified path
   */
  match(itemPath: string): MatchKind {
    // Last segment is globstar?
    if (this.segments[this.segments.length - 1] === '**') {
      // Normalize slashes
      itemPath = pathHelper.normalizeSeparators(itemPath)

      // Append a trailing slash. Otherwise Minimatch will not match the directory immediately
      // preceding the globstar. For example, given the pattern `/foo/**`, Minimatch returns
      // false for `/foo` but returns true for `/foo/`. Append a trailing slash to handle that quirk.
      if (!itemPath.endsWith(path.sep) && this.isImplicitPattern === false) {
        // Note, this is safe because the constructor ensures the pattern has an absolute root.
        // For example, formats like C: and C:foo on Windows are resolved to an absolute root.
        itemPath = `${itemPath}${path.sep}`
      }
    } else {
      // Normalize slashes and trim unnecessary trailing slash
      itemPath = pathHelper.safeTrimTrailingSeparator(itemPath)
    }

    // Match
    if (this.minimatch.match(itemPath)) {
      return this.trailingSeparator ? MatchKind.Directory : MatchKind.All
    }

    return MatchKind.None
  }

  /**
   * Indicates whether the pattern may match descendants of the specified path
   */
  partialMatch(itemPath: string): boolean {
      throw new Error("STUB");
  }

  /**
   * Escapes glob patterns within a path
   */
  static globEscape(s: string): string {
      throw new Error("STUB");
  }

  /**
   * Normalizes slashes and ensures absolute root
   */
  private static fixupPattern(pattern: string, homedir?: string): string {
      throw new Error("STUB");
  }

  /**
   * Attempts to unescape a pattern segment to create a literal path segment.
   * Otherwise returns empty string.
   */
  private static getLiteral(segment: string): string {
      throw new Error("STUB");
  }

  /**
   * Escapes regexp special characters
   * https://javascript.info/regexp-escaping
   */
  private static regExpEscape(s: string): string {
      throw new Error("STUB");
  }
}
