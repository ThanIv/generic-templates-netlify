import { v2, v3 } from "@govtechsg/open-attestation";

export type CertificateSchemaV2 = v2.OpenAttestationDocument & CertificateDocument;
export type CertificateSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: CertificateDocument;
};

export type CertificateSchema = CertificateSchemaV2 | CertificateSchemaV3;

export interface CertificateDocument {
    institute: string;
    documentName: string;
    issueDateAndTime: string;
    certificateId: string;
    recipientDetails: RecipientDetails;
    certificateDetails: CertificateDetails;
    signatoryAuthentication?: SignatoryAuthentication;
  }

  interface RecipientDetails{
    fname: string;
    lname: string;
    fnameEN: string;
    lnameEN: string;
    sex: string;
    nationality: string;
    dateOfBirth: string;
    placeOfBirth: string;
  }

  interface CertificateDetails{
    level: string;
    major: string;
    dateOfCompletion: string;
  }

  interface SignatoryAuthentication {
    signature?: string;
    name?: string;
  }

