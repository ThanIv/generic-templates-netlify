import React, {FunctionComponent} from "react";
import { CertificateTemplate } from "./CertificateTemplate";
import { CertificateSampleV3 } from "./sampleV3";

export default {
    title: "CertificateTemplate",
    component: CertificateTemplate,
    parameters: {
      componentSubtitle: "Certificate template.",
    },
  };
  
//   export const SimpleCooEmpty: FunctionComponent = () => {
//     return <CertificateTemplate document={{} as any} handleObfuscation={() => {}} />;
//   };
  
//   export const SimpleCooV2: FunctionComponent = () => {
//     return <SimpleCooTemplate document={SimpleCooSampleV2} handleObfuscation={() => {}} />;
//   };
  
  export const CertificateV3: FunctionComponent = () => {
    return <CertificateTemplate document={CertificateSampleV3} handleObfuscation={() => {}} />;
  };