import * as fs from 'fs'
import {info} from '@actions/core'
import {normalize, resolve} from 'path'
import {validateFilePath} from './path-and-artifact-name-validation.js'

export interface UploadZipSpecification {
  /**
   * An absolute source path that points to a file that will be added to a zip. Null if creating a new directory
   */
  sourcePath: string | null

  /**
   * The destination path in a zip for a file
   */
  destinationPath: string

  /**
   * Information about the file
   * https://nodejs.org/api/fs.html#class-fsstats
   */
  stats: fs.Stats
}

/**
 * Checks if a root directory exists and is valid
 * @param rootDirectory an absolute root directory path common to all input files that that will be trimmed from the final zip structure
 */
export function validateRootDirectory(rootDirectory: string): void {
    throw new Error("STUB");
}

/**
 * Creates a specification that describes how a zip file will be created for a set of input files
 * @param filesToZip a list of file that should be included in the zip
 * @param rootDirectory an absolute root directory path common to all input files that that will be trimmed from the final zip structure
 */
export function getUploadZipSpecification(
  filesToZip: string[],
  rootDirectory: string
): UploadZipSpecification[] {
    throw new Error("STUB");
}
