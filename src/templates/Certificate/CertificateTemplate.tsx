import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../core/Wrapper";
import { CertificateSchema } from "./types";
import { getDocumentData } from "./../../utils";

//import { signatoryAuthentication } from "../../core/Signatures";

export const CertificateTemplate: FunctionComponent<TemplateProps<CertificateSchema>> = ({ document }) => {
    const documentData = getDocumentData(document);

    const {
        institute,
        documentName,
        issueDateAndTime,
        certificateId,
        recipientDetails,
        certificateDetails,
        signatoryAuthentication,
      } = documentData;

    const SchoolSection: FunctionComponent = () => {
        return(
            <div className="flex flex-wrap">
                <div className="text-center">
                    <p>School Logo</p>
                    <p>{institute}</p>
                    <p>លេខ: {certificateId}</p>
                </div>
                <div className="w-full md:w-5/12 mb-4 md:mb-0 md:ml-auto md:order-2 text-center">
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
                <div>
                    <p>photo</p>
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
            <div className="flex flex-wrap w-full md:w-5/12 mb-4 md:mb-0 md:ml-auto md:order-2 text-center">
                <div >
                    <p>{issueDateAndTime}</p>
                    <p>ជ.សាកលវិទ្យាធិការ</p>
                    <p>សាកលវិទ្យាធិការរង</p>
                    {signatoryAuthentication && (
                        <img data-testid="signature-first" className="w-1/2 mx-auto" src={signatoryAuthentication?.signature} />
                    )}
                </div>
            </div>
        );
    }

    return (
        <Wrapper>
            <div className="mx-auto border border-black">
                <div>
                    <SchoolSection />           
                    <ConfirmSeciton />
                    <RecipientSection />
                    <NoteSection />
                    <SignatureSection />
                </div>
            </div>
        </Wrapper>
    );
}