import * as path from 'path'
import assert from 'assert'

const IS_WINDOWS = process.platform === 'win32'

/**
 * Similar to path.dirname except normalizes the path separators and slightly better handling for Windows UNC paths.
 *
 * For example, on Linux/macOS:
 * - `/               => /`
 * - `/hello          => /`
 *
 * For example, on Windows:
 * - `C:\             => C:\`
 * - `C:\hello        => C:\`
 * - `C:              => C:`
 * - `C:hello         => C:`
 * - `\               => \`
 * - `\hello          => \`
 * - `\\hello         => \\hello`
 * - `\\hello\world   => \\hello\world`
 */
export function dirname(p: string): string {
  // Normalize slashes and trim unnecessary trailing slash
  p = safeTrimTrailingSeparator(p)

  // Windows UNC root, e.g. \\hello or \\hello\world
  if (IS_WINDOWS && /^\\\\[^\\]+(\\[^\\]+)?$/.test(p)) {
    return p
  }

  // Get dirname
  let result = path.dirname(p)

  // Trim trailing slash for Windows UNC root, e.g. \\hello\world\
  if (IS_WINDOWS && /^\\\\[^\\]+\\[^\\]+\\$/.test(result)) {
    result = safeTrimTrailingSeparator(result)
  }

  return result
}

/**
 * Roots the path if not already rooted. On Windows, relative roots like `\`
 * or `C:` are expanded based on the current working directory.
 */
export function ensureAbsoluteRoot(root: string, itemPath: string): string {
    throw new Error("STUB");
}

/**
 * On Linux/macOS, true if path starts with `/`. On Windows, true for paths like:
 * `\\hello\share` and `C:\hello` (and using alternate separator).
 */
export function hasAbsoluteRoot(itemPath: string): boolean {
    throw new Error("STUB");
}

/**
 * On Linux/macOS, true if path starts with `/`. On Windows, true for paths like:
 * `\`, `\hello`, `\\hello\share`, `C:`, and `C:\hello` (and using alternate separator).
 */
export function hasRoot(itemPath: string): boolean {
    throw new Error("STUB");
}

/**
 * Removes redundant slashes and converts `/` to `\` on Windows
 */
export function normalizeSeparators(p: string): string {
  p = p || ''

  // Windows
  if (IS_WINDOWS) {
    // Convert slashes on Windows
    p = p.replace(/\//g, '\\')

    // Remove redundant slashes
    const isUnc = /^\\\\+[^\\]/.test(p) // e.g. \\hello
    return (isUnc ? '\\' : '') + p.replace(/\\\\+/g, '\\') // preserve leading \\ for UNC
  }

  // Remove redundant slashes
  return p.replace(/\/\/+/g, '/')
}

/**
 * Normalizes the path separators and trims the trailing separator (when safe).
 * For example, `/foo/ => /foo` but `/ => /`
 */
export function safeTrimTrailingSeparator(p: string): string {
  // Short-circuit if empty
  if (!p) {
    return ''
  }

  // Normalize separators
  p = normalizeSeparators(p)

  // No trailing slash
  if (!p.endsWith(path.sep)) {
    return p
  }

  // Check '/' on Linux/macOS and '\' on Windows
  if (p === path.sep) {
    return p
  }

  // On Windows check if drive root. E.g. C:\
  if (IS_WINDOWS && /^[A-Z]:\\$/i.test(p)) {
    return p
  }

  // Otherwise trim trailing slash
  return p.substr(0, p.length - 1)
}
