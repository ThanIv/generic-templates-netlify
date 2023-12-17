import styled from "@emotion/styled";
import QRCode, { ImageSettings } from "qrcode.react";
import React, { FunctionComponent } from "react";
import qrcodeImg from "/static/images/logo-qrcode.png";

interface DocumentQrCode {
  url: string;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url }) => {
  const imageSettings: ImageSettings = {
    src: qrcodeImg,
    height: 40,
    width: 40,
    excavate: true,
  };

  return (
      <div className="flex justify-between text-center">
        <div>
          <div className="mx-auto">
            <QRCode value={url} level="M" size={70}/>
          </div>
          <p>ស្កេន​ QRcode</p>
          <p>ដើម្បីផ្ទៀងផ្ទាត់ឯកសារ</p>
        </div>
        <div></div>
      </div>
  );
};
