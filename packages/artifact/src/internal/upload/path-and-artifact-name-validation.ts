import {info} from '@actions/core'

/**
 * Invalid characters that cannot be in the artifact name or an uploaded file. Will be rejected
 * from the server if attempted to be sent over. These characters are not allowed due to limitations with certain
 * file systems such as NTFS. To maintain platform-agnostic behavior, all characters that are not supported by an
 * individual filesystem/platform will not be supported on all fileSystems/platforms
 *
 * FilePaths can include characters such as \ and / which are not permitted in the artifact name alone
 */
const invalidArtifactFilePathCharacters = new Map<string, string>([
  ['"', ' Double quote "'],
  [':', ' Colon :'],
  ['<', ' Less than <'],
  ['>', ' Greater than >'],
  ['|', ' Vertical bar |'],
  ['*', ' Asterisk *'],
  ['?', ' Question mark ?'],
  ['\r', ' Carriage return \\r'],
  ['\n', ' Line feed \\n']
])

const invalidArtifactNameCharacters = new Map<string, string>([
  ...invalidArtifactFilePathCharacters,
  ['\\', ' Backslash \\'],
  ['/', ' Forward slash /']
])

/**
 * Validates the name of the artifact to check to make sure there are no illegal characters
 */
export function validateArtifactName(name: string): void {
    throw new Error("STUB");
}

/**
 * Validates file paths to check for any illegal characters that can cause problems on different file systems
 */
export function validateFilePath(path: string): void {
    throw new Error("STUB");
}
