import {bundleToJSON} from '@sigstore/bundle'
import {X509Certificate} from 'crypto'
import {SigstoreInstance, signingEndpoints} from './endpoints.js'
import {buildIntotoStatement} from './intoto.js'
import {Payload, signPayload} from './sign.js'
import {writeAttestation} from './store.js'

import type {Bundle} from '@sigstore/sign'
import type {Attestation, Predicate, Subject} from './shared.types.js'

const INTOTO_PAYLOAD_TYPE = 'application/vnd.in-toto+json'

/**
 * Options for attesting a subject / predicate.
 */
export type AttestOptions = {
  /**
   * @deprecated Use `subjects` instead.
   **/
  subjectName?: string
  /**
   * @deprecated Use `subjects` instead.
   **/
  subjectDigest?: Record<string, string>
  // Subjects to be attested.
  subjects?: Subject[]
  // Content type of the predicate being attested.
  predicateType: string
  // Predicate to be attested.
  predicate: object
  // GitHub token for writing attestations.
  token: string
  // Sigstore instance to use for signing. Must be one of "public-good" or
  // "github".
  sigstore?: SigstoreInstance
  // HTTP headers to include in request to attestations API.
  headers?: {[header: string]: string | number | undefined}
  // Whether to skip writing the attestation to the GH attestations API.
  skipWrite?: boolean
}

/**
 * Generates an attestation for the given subject and predicate. The subject and
 * predicate are combined into an in-toto statement, which is then signed using
 * the identified Sigstore instance and stored as an attestation.
 * @param options - The options for attestation.
 * @returns A promise that resolves to the attestation.
 */
export async function attest(options: AttestOptions): Promise<Attestation> {
    throw new Error("STUB");
}

function toAttestation(bundle: Bundle, attestationID?: string): Attestation {
    throw new Error("STUB");
}
