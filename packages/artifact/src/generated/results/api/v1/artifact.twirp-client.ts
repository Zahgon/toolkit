import {
  CreateArtifactRequest,
  CreateArtifactResponse,
  FinalizeArtifactRequest,
  FinalizeArtifactResponse,
  ListArtifactsRequest,
  ListArtifactsResponse,
  GetSignedArtifactURLRequest,
  GetSignedArtifactURLResponse,
  DeleteArtifactRequest,
  DeleteArtifactResponse,
} from "./artifact.js";

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

export interface ArtifactServiceClient {
  CreateArtifact(
    request: CreateArtifactRequest
  ): Promise<CreateArtifactResponse>;
  FinalizeArtifact(
    request: FinalizeArtifactRequest
  ): Promise<FinalizeArtifactResponse>;
  ListArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse>;
  GetSignedArtifactURL(
    request: GetSignedArtifactURLRequest
  ): Promise<GetSignedArtifactURLResponse>;
  DeleteArtifact(
    request: DeleteArtifactRequest
  ): Promise<DeleteArtifactResponse>;
}

export class ArtifactServiceClientJSON implements ArtifactServiceClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
      throw new Error("STUB");
  }
  CreateArtifact(
    request: CreateArtifactRequest
  ): Promise<CreateArtifactResponse> {
      throw new Error("STUB");
  }

  FinalizeArtifact(
    request: FinalizeArtifactRequest
  ): Promise<FinalizeArtifactResponse> {
      throw new Error("STUB");
  }

  ListArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse> {
      throw new Error("STUB");
  }

  GetSignedArtifactURL(
    request: GetSignedArtifactURLRequest
  ): Promise<GetSignedArtifactURLResponse> {
      throw new Error("STUB");
  }

  DeleteArtifact(
    request: DeleteArtifactRequest
  ): Promise<DeleteArtifactResponse> {
      throw new Error("STUB");
  }
}

export class ArtifactServiceClientProtobuf implements ArtifactServiceClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
      throw new Error("STUB");
  }
  CreateArtifact(
    request: CreateArtifactRequest
  ): Promise<CreateArtifactResponse> {
      throw new Error("STUB");
  }

  FinalizeArtifact(
    request: FinalizeArtifactRequest
  ): Promise<FinalizeArtifactResponse> {
      throw new Error("STUB");
  }

  ListArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse> {
      throw new Error("STUB");
  }

  GetSignedArtifactURL(
    request: GetSignedArtifactURLRequest
  ): Promise<GetSignedArtifactURLResponse> {
      throw new Error("STUB");
  }

  DeleteArtifact(
    request: DeleteArtifactRequest
  ): Promise<DeleteArtifactResponse> {
      throw new Error("STUB");
  }
}