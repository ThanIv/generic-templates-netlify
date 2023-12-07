import { v3 } from "@govtechsg/open-attestation";
import { signatoryAuthentication } from "../../core/Signatures";
import { CertificateSchemaV3 } from "./types";

export const CertificateSampleV3: CertificateSchemaV3 = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
        // TODO: simple coo has no v3 schema defined at schemata yet -> https://schemata.openattestation.com
      ],
    type: ["VerifiableCredential", "OpenAttestationCredential"],
    issuanceDate: "2010-01-01T19:23:24Z",
    issuer: { id: "https://example.com", name: "DEMO STORE" },
    openAttestationMetadata: {
        template: {
            type: v3.TemplateType.EmbeddedRenderer,
            name: "CERTIFICATE",
            url: "http://localhost:3000",
        },
        proof: {
            type: v3.ProofType.OpenAttestationProofMethod,
            method: v3.Method.DocumentStore,
            value: "0x8bA63EAB43342AAc3AdBB4B827b68Cf4aAE5Caca",
        },
        identityProof: {
            type: v3.IdentityProofType.DNSDid,
            identifier: "demo-tradetrust.openattestation.com",
        },
    },
    credentialSubject: {
        institute: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
        documentName: "វិញ្ញាបនបត្របញ្ចប់ការសិក្សា",
        issueDateAndTime: "ថ្ងៃទី១២ ខែតុលា ឆ្នាំ២០២១",
        certificateId: "១១/២២០២១ សភភព",
        recipientDetails: {
            lname: "អ៊ីវ",
            fname:"ថាន",
            lnameEN: "IV",
            fnameEN:"THAN",
            sex: "ប្រុស",
            nationality: "ខ្មែរ",
            dateOfBirth: "២៣ មិនា ១៩៩៩",
            placeOfBirth: "ខេត្ត កំពត",
        },
        certificateDetails: {
            level: "បរិញ្ញាបត្រ វិទ្យាសាស្រ្ត",
            major: "វិទ្យាសាស្រ្តកុំព្យូទ័រ",
            dateOfCompletion: "០២​ សីហា ២០២១",
        },
        signatoryAuthentication: {
            signature: signatoryAuthentication,
            name: "ប៉ាល់ ដែស",
        },
    },

};