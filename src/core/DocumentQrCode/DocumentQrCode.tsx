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
          <QRCode value={url} level="M" size={100}/>
          <p>ស្កេន​ QRcode ដើម្បីផ្ទៀងផ្ទាត់ឯកសារ</p>
        </div>
        <div></div>
      </div>
  );
};
