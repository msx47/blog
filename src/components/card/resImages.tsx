import React, { ReactElement } from "react";
import { SupaUploadResponseType } from "../../../types/globalTypes";
interface Props {
  uris: SupaUploadResponseType[];
  alt: string;
  className?: string;
  priority?: boolean;
}

function ResImage({
  uris,
  alt,
  className = "",
  priority = false,
}: Props): ReactElement {
  return (
    <picture>
      <source media="(max-width: 600px)" srcSet={uris[1].data?.Key} />
      <source media="(min-width: 601px)" srcSet={uris[2].data?.Key} />
      <img
        src={uris[2].data?.Key}
        title={alt}
        alt={alt}
        className={className}
        width="400"
        height="225"
        loading={priority ? "eager" : "lazy"}
      />
    </picture>
  );
}

export default ResImage;
