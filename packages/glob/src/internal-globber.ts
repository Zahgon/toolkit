import * as core from '@actions/core'
import * as fs from 'fs'
import * as globOptionsHelper from './internal-glob-options-helper.js'
import * as path from 'path'
import * as patternHelper from './internal-pattern-helper.js'
import {GlobOptions} from './internal-glob-options.js'
import {MatchKind} from './internal-match-kind.js'
import {Pattern} from './internal-pattern.js'
import {SearchState} from './internal-search-state.js'

const IS_WINDOWS = process.platform === 'win32'

export {GlobOptions}

/**
 * Used to match files and directories
 */
export interface Globber {
  /**
   * Returns the search path preceding the first glob segment, from each pattern.
   * Duplicates and descendants of other paths are filtered out.
   *
   * Example 1: The patterns `/foo/*` and `/bar/*` returns `/foo` and `/bar`.
   *
   * Example 2: The patterns `/foo/*` and `/foo/bar/*` returns `/foo`.
   */
  getSearchPaths(): string[]

  /**
   * Returns files and directories matching the glob patterns.
   *
   * Order of the results is not guaranteed.
   */
  glob(): Promise<string[]>

  /**
   * Returns files and directories matching the glob patterns.
   *
   * Order of the results is not guaranteed.
   */
  globGenerator(): AsyncGenerator<string, void>
}

export class DefaultGlobber implements Globber {
  private readonly options: GlobOptions
  private readonly patterns: Pattern[] = []
  private readonly searchPaths: string[] = []

  private constructor(options?: GlobOptions) {
    this.options = globOptionsHelper.getOptions(options)
  }

  getSearchPaths(): string[] {
      throw new Error("STUB");
  }

  async glob(): Promise<string[]> {
      throw new Error("STUB");
  }

  async *globGenerator(): AsyncGenerator<string, void> {
      throw new Error("STUB");
  }

  /**
   * Constructs a DefaultGlobber
   */
  static async create(
    patterns: string,
    options?: GlobOptions
  ): Promise<DefaultGlobber> {
      throw new Error("STUB");
  }

  private static async stat(
    item: SearchState,
    options: GlobOptions,
    traversalChain: string[]
  ): Promise<fs.Stats | undefined> {
    // Note:
    // `stat` returns info about the target of a symlink (or symlink chain)
    // `lstat` returns info about a symlink itself
    let stats: fs.Stats
    if (options.followSymbolicLinks) {
      try {
        // Use `stat` (following symlinks)
        stats = await fs.promises.stat(item.path)
      } catch (err) {
        if (err.code === 'ENOENT') {
          if (options.omitBrokenSymbolicLinks) {
            core.debug(`Broken symlink '${item.path}'`)
            return undefined
          }

          throw new Error(
            `No information found for the path '${item.path}'. This may indicate a broken symbolic link.`
          )
        }

        throw err
      }
    } else {
      // Use `lstat` (not following symlinks)
      stats = await fs.promises.lstat(item.path)
    }

    // Note, isDirectory() returns false for the lstat of a symlink
    if (stats.isDirectory() && options.followSymbolicLinks) {
      // Get the realpath
      const realPath: string = await fs.promises.realpath(item.path)

      // Fixup the traversal chain to match the item level
      while (traversalChain.length >= item.level) {
        traversalChain.pop()
      }

      // Test for a cycle
      if (traversalChain.some((x: string) => { throw new Error("STUB"); })) {
        core.debug(
          `Symlink cycle detected for path '${item.path}' and realpath '${realPath}'`
        )
        return undefined
      }

      // Update the traversal chain
      traversalChain.push(realPath)
    }

    return stats
  }
}
