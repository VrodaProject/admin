import { FC } from "react";
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.component";
import { InputProps, useInput, useNotify } from "react-admin";
import { useCloudinarySignatureQuery } from "@app/core/types";
import { CloudinaryUploadDTO } from "./cloudinary-upload.dto";
import axios, { AxiosError } from "axios";

export const CloudinaryInput: FC<InputProps> = (props) => {
  const { label, source } = props;
  const computedLabel = String(label) ?? source;
  const { data: cloudSignature, loading } = useCloudinarySignatureQuery({
    fetchPolicy: "network-only",
  });
  const notify = useNotify();

  const {
    field: { onChange, value },
  } = useInput(props);

  const onMediaSelected = async (file: File) => {
    if (!cloudSignature?.cloudinarySignature) {
      return;
    }
    const { cloudName, apiKey, publicId, signature, timestamp } =
      cloudSignature.cloudinarySignature;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("timestamp", String(timestamp));
    formData.append("folder", "products");
    formData.append("upload_preset", "lj6r0i31");

    let data: CloudinaryUploadDTO;
    try {
      ({ data } = await axios.post<CloudinaryUploadDTO>(url, formData));
    } catch (e) {
      notify((e as AxiosError).message);
      return;
    }
    onChange(
      JSON.stringify({ public_id: data!.public_id, resource_type: data!.resource_type })
    );
  };

  return (
    <CloudinaryInputUI
      label={computedLabel}
      value={value}
      disabled={loading}
      onMediaSelected={onMediaSelected}
      fitMedia={true}
    />
  );
};
