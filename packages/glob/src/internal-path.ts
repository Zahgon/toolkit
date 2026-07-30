import * as path from 'path'
import * as pathHelper from './internal-path-helper.js'
import assert from 'assert'

const IS_WINDOWS = process.platform === 'win32'

/**
 * Helper class for parsing paths into segments
 */
export class Path {
  segments: string[] = []

  /**
   * Constructs a Path
   * @param itemPath Path or array of segments
   */
  constructor(itemPath: string | string[]) {
      throw new Error("STUB");
  }

  /**
   * Converts the path to it's string representation
   */
  toString(): string {
    // First segment
    let result = this.segments[0]

    // All others
    let skipSlash =
      result.endsWith(path.sep) || (IS_WINDOWS && /^[A-Z]:$/i.test(result))
    for (let i = 1; i < this.segments.length; i++) {
      if (skipSlash) {
        skipSlash = false
      } else {
        result += path.sep
      }

      result += this.segments[i]
    }

    return result
  }
}
