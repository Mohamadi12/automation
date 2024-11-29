"use client";

import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (e: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const handleUpload = (fileInfo: any) => {
    if (fileInfo?.cdnUrl) {
      onUpload(fileInfo.cdnUrl);
    }
  };

  return (
    <div>
      <FileUploaderRegular
        pubkey="d87a98181335151d0315"
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        onChange={handleUpload}
      />
    </div>
  );
};

export default UploadCareButton;
