// For internal use, subject to change.

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as crypto from 'crypto'
import * as fs from 'fs'
import * as os from 'os'
import {toCommandValue} from './utils.js'

export function issueFileCommand(command: string, message: any): void {
    throw new Error("STUB");
}

export function prepareKeyValueMessage(key: string, value: any): string {
    throw new Error("STUB");
}
