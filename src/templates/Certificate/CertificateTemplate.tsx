import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { CertificateSchema } from "./types";
import { getDocumentData } from "./../../utils";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { schoolLogo,stampAuthentication } from "../../core/Signatures";

export const CertificateTemplate: FunctionComponent<TemplateProps<CertificateSchema>> = ({ document }) => {
    const documentData = getDocumentData(document);

    const {
        institute,
        documentName,
        issueDateAndTime,
        certificateId,
        recipientDetails,
        certificateDetails,
        recipientPhoto
      } = documentData;
    
    const qrCodeUrl = documentData?.links?.self.href;

    const SchoolSection: FunctionComponent = () => {
        return(
            <div className="flex justify-between text-center">
                <div>
                    <img data-testid="school-logo" className="w-20 h-24 mx-auto" src={schoolLogo} />
                    <p>{institute}</p>
                    <p>លេខ: {certificateId}</p>
                </div>
                <div>
                    <p>ព្រះរាជាណាចក្រកម្ពុជា</p>
                    <p>ជាតិ សាសនា ព្រះមហាក្សត្យ</p>
                </div> 
            </div>
        );
    }

    const ConfirmSeciton: FunctionComponent = () =>{
        return(
            <div className="text-center">
                <h1>{documentName}</h1>
                <p>សាកលវិទ្យាធិការ{institute}បញ្ជាក់ថា​ ៖</p>
            </div>);
    }

    const RecipientSection: FunctionComponent = () =>{
        return(
            <div className="flex">
                <div className="w-36 h-40 ">
                    <img data-testid="studemt-photo" src={recipientPhoto} />
                </div>
                <div className="mx-auto">
                    <table>
                        <tr >
                            <td>និស្សិតឈ្មោះ</td>
                            <td>{recipientDetails?.lname}</td>
                            <td colSpan={2}>{recipientDetails?.fname}</td>
                        </tr>
                        <tr>
                            <td>ជាអក្សរទ្បាតាំង</td>
                            <td>{recipientDetails?.lnameEN}</td>
                            <td colSpan={2}>{recipientDetails?.fnameEN}</td>
                        </tr>
                        <tr>
                            <td>ភេទ</td>
                            <td>{recipientDetails?.sex}</td>
                            <td colSpan={2}>សញ្ជាតិ &nbsp; {recipientDetails?.nationality}</td>
                        </tr>
                        <tr>
                            <td>ថ្ងៃខែឆ្នាំកំណើត</td>
                            <td colSpan={3}>{recipientDetails?.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td>ទីកន្លែងកំណើត</td>
                            <td colSpan={3}>{recipientDetails?.placeOfBirth}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>បានបញ្ចប់ដោយជោគជ័យ នូវការសិក្សាកម្រិត {certificateDetails?.level}</td>
                        </tr>
                        <tr>
                            <td>ឯកទេស</td>
                            <td colSpan={3}>{certificateDetails?.major}</td>
                        </tr>
                        <tr>
                            <td>សម័យប្រលង</td>
                            <td colSpan={3}>{certificateDetails?.dateOfCompletion}</td>
                        </tr> 
                        <tr>
                            <td colSpan={4}>វិញ្ញាបនបត្រនេះបានចេញអោយសាមីជនយកទៅប្រើប្រាស់តាមការដែលអាចប្រើបាន។</td>
                        </tr>                                
                    </table>
                </div>
            </div>);
    }

    const NoteSection: FunctionComponent = () =>{
        return (
            <div>
                * កំណត់សម្គាល់៖ វិញ្ញាបនបត្រនេះមិនចេញអោយជាលើកទីពីរទ្បើយ។
            </div>
        );
    }

    const SignatureSection: FunctionComponent = () => {
        return(
            <div className="flex justify-between text-center">
                <div></div>
                <div>
                    <div>
                        <p>{issueDateAndTime}</p>
                        <p>ជ.សាកលវិទ្យាធិការ</p>
                        <p>សាកលវិទ្យាធិការរង</p>
                    </div>                     
                    <div>
                        <img data-testid="school-stamp" className="w-20 h-24 mx-auto" src={stampAuthentication} />
                        <p className="text-right">ចន ឌូ</p>                   
                    </div>
                </div>
                
            </div>
        );
    }

    return (
        <Wrapper>
            <div className=" border border-black p-5">
                <SchoolSection />           
                <ConfirmSeciton />
                <RecipientSection />
                <NoteSection />
                <SignatureSection />
                <div>
                    {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
                </div>
                
            </div>
            
        </Wrapper>
    );
}