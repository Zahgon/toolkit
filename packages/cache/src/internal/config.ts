export function isGhes(): boolean {
    throw new Error("STUB");
}

export function getCacheServiceVersion(): string {
    throw new Error("STUB");
}

// The cache-mode lattice: readable = {read, write}, writable = {write,
// write-only}, none = neither.
const KNOWN_CACHE_MODES = ['none', 'read', 'write', 'write-only']

// The effective cache-mode exported by the runner, or '' when not set.
export function getCacheMode(): string {
    throw new Error("STUB");
}

// Unset or unrecognized modes are permissive so behavior matches today.
export function isCacheReadable(mode: string): boolean {
    throw new Error("STUB");
}

export function isCacheWritable(mode: string): boolean {
    throw new Error("STUB");
}

export function getCacheServiceURL(): string {
    throw new Error("STUB");
}
