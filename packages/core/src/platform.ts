import os from 'os'
import * as exec from '@actions/exec'

const getWindowsInfo = async (): Promise<{name: string; version: string}> => {
    throw new Error("STUB");
}

const getMacOsInfo = async (): Promise<{
  name: string
  version: string
}> => {
    throw new Error("STUB");
}

const getLinuxInfo = async (): Promise<{
  name: string
  version: string
}> => {
    throw new Error("STUB");
}

export const platform = os.platform()
export const arch = os.arch()
export const isWindows = platform === 'win32'
export const isMacOS = platform === 'darwin'
export const isLinux = platform === 'linux'

export async function getDetails(): Promise<{
  name: string
  platform: string
  arch: string
  version: string
  isWindows: boolean
  isMacOS: boolean
  isLinux: boolean
}> {
    throw new Error("STUB");
}
