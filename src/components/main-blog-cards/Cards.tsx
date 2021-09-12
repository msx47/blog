import { formatDistance } from "date-fns";
import React, { ReactElement, useEffect, useState } from "react";
import { DeviceTypes } from "../../../types/globalTypes";
import PostPreview, { CardProps } from "../card/PostPreview";

export interface CardArrayProps {
  theme: CardProps["theme"];
  data: Array<CardProps["blog"]>;
}

function Cards({ data, theme }: CardArrayProps): ReactElement {
  const [deviceType, setDeviceType] = useState<DeviceTypes>("mobile");
  useEffect(() => {
    const targetWidth = window.innerWidth;
    if (targetWidth < 1024) {
      setDeviceType("mobile");
    } else if (targetWidth >= 1024 && targetWidth <= 1200) {
      setDeviceType("ipad");
    } else {
      setDeviceType("regular");
    }
  }, []);
  return (
    <div
      className={`flex flex-wrap justify-between ${
        deviceType === "mobile" ? "flex-col" : ""
      }`}
    >
      {data.map((blog, i) => (
        <PostPreview
          key={blog.content.time}
          theme={theme}
          blog={{
            ...blog,
            altText: "Main blog image",
            layoutType: i === 0 ? "horiz" : "vert",
            content: {
              ...blog.content,
              time: (formatDistance(blog.content.time, Date.now(), {
                addSuffix: true,
              }) as unknown) as number,
            },
          }}
        />
      ))}
    </div>
  );
}

export default Cards;
