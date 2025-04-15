import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { FC, useRef } from "react";
import { cloudinary } from "@app/core/cloudinary";

interface CloudinaryInputUIProps {
  label: string;
  onMediaSelected: (file: File) => void;
  disabled: boolean;
  value?: string;
  fitMedia?: boolean;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
  label,
  value,
  disabled,
  onMediaSelected,
  fitMedia,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  let mediaData: { public_id: string; resource_type: string } | null = null;
  try {
    if (value) {
      mediaData = JSON.parse(value);
    }
  } catch (e) {
    mediaData = null;
  }

  let mediaElement = null;
  const transformations = ["w_384", "h_240", "dpr_2.0"];
  if (fitMedia) {
    transformations.push("c_pad");
  }

  if (mediaData && mediaData.public_id) {
    if (mediaData.resource_type === "video") {
      const video = cloudinary.video(mediaData.public_id);
      video.addTransformation(transformations.join(","));
      mediaElement = (
        <AdvancedVideo cldVid={video} controls style={{ width: 384, height: 240 }} />
      );
    } else {
      const image = cloudinary.image(mediaData.public_id);
      image.addTransformation(transformations.join(","));
      mediaElement = (
        <AdvancedImage cldImg={image} width={384} height={240} />
      );
    }
  }

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const [file] = Array.from(e.target.files);
    onMediaSelected(file);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="file"
        accept="image/*,video/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onFileInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={label} />
        <CardContent>
          <CardContent>
            {mediaElement ? (
              mediaElement
            ) : (
              <Skeleton
                variant="rectangular"
                width={384}
                height={247}
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            )}
          </CardContent>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={onUploadClick}
            disabled={disabled}
          >
            <Typography>Завантажити</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
