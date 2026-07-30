import {Timestamp} from '../../generated/index.js'
import * as core from '@actions/core'

export function getExpiration(retentionDays?: number): Timestamp | undefined {
    throw new Error("STUB");
}

function getRetentionDays(): number | undefined {
    throw new Error("STUB");
}
