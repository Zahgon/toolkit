import {
    CreateCacheEntryRequest,
    CreateCacheEntryResponse,
    FinalizeCacheEntryUploadRequest,
    FinalizeCacheEntryUploadResponse,
    GetCacheEntryDownloadURLRequest,
    GetCacheEntryDownloadURLResponse,
  } from "./cache.js";
  
  //==================================//
  //          Client Code             //
  //==================================//
  
  interface Rpc {
    request(
      service: string,
      method: string,
      contentType: "application/json" | "application/protobuf",
      data: object | Uint8Array
    ): Promise<object | Uint8Array>;
  }
  
  export interface CacheServiceClient {
    CreateCacheEntry(
      request: CreateCacheEntryRequest
    ): Promise<CreateCacheEntryResponse>;
    FinalizeCacheEntryUpload(
      request: FinalizeCacheEntryUploadRequest
    ): Promise<FinalizeCacheEntryUploadResponse>;
    GetCacheEntryDownloadURL(
      request: GetCacheEntryDownloadURLRequest
    ): Promise<GetCacheEntryDownloadURLResponse>;
  }
  
  export class CacheServiceClientJSON implements CacheServiceClient {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        throw new Error("STUB");
    }
    CreateCacheEntry(
      request: CreateCacheEntryRequest
    ): Promise<CreateCacheEntryResponse> {
        throw new Error("STUB");
    }
  
    FinalizeCacheEntryUpload(
      request: FinalizeCacheEntryUploadRequest
    ): Promise<FinalizeCacheEntryUploadResponse> {
        throw new Error("STUB");
    }
  
    GetCacheEntryDownloadURL(
      request: GetCacheEntryDownloadURLRequest
    ): Promise<GetCacheEntryDownloadURLResponse> {
        throw new Error("STUB");
    }
  }
  
  export class CacheServiceClientProtobuf implements CacheServiceClient {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        throw new Error("STUB");
    }
    CreateCacheEntry(
      request: CreateCacheEntryRequest
    ): Promise<CreateCacheEntryResponse> {
        throw new Error("STUB");
    }
  
    FinalizeCacheEntryUpload(
      request: FinalizeCacheEntryUploadRequest
    ): Promise<FinalizeCacheEntryUploadResponse> {
        throw new Error("STUB");
    }
  
    GetCacheEntryDownloadURL(
      request: GetCacheEntryDownloadURLRequest
    ): Promise<GetCacheEntryDownloadURLResponse> {
        throw new Error("STUB");
    }
  }
  