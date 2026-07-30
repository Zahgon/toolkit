import {attest, AttestOptions} from './attest.js'
import {getIDTokenClaims} from './oidc.js'
import type {Attestation, Predicate} from './shared.types.js'

const SLSA_PREDICATE_V1_TYPE = 'https://slsa.dev/provenance/v1'
const GITHUB_BUILD_TYPE = 'https://actions.github.io/buildtypes/workflow/v1'

export type AttestProvenanceOptions = Omit<
  AttestOptions,
  'predicate' | 'predicateType'
> & {
  issuer?: string
}

/**
 * Builds an SLSA (Supply Chain Levels for Software Artifacts) provenance
 * predicate using the GitHub Actions Workflow build type.
 * https://slsa.dev/spec/v1.0/provenance
 * https://github.com/slsa-framework/github-actions-buildtypes/tree/main/workflow/v1
 * @param issuer - URL for the OIDC issuer. Defaults to the GitHub Actions token
 * issuer.
 * @returns The SLSA provenance predicate.
 */
export const buildSLSAProvenancePredicate = async (
  issuer?: string
): Promise<Predicate> => {
    throw new Error("STUB");
}

/**
 * Attests the build provenance of the provided subject. Generates the SLSA
 * build provenance predicate, assembles it into an in-toto statement, and
 * attests it.
 *
 * @param options - The options for attesting the provenance.
 * @returns A promise that resolves to the attestation.
 */
export async function attestProvenance(
  options: AttestProvenanceOptions
): Promise<Attestation> {
    throw new Error("STUB");
}
