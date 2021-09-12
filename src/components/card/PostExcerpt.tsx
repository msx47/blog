import React, { ReactElement } from "react";
import { LayoutType, ThemeType } from "../../../types/globalTypes";

interface Props {
  text: string;
  theme: ThemeType;
  type: LayoutType;
}

function PostExcerpt({ text, theme, type }: Props): ReactElement {
  return (
    <div
      className={`p-2 leading-7 ${type === "horiz" ? "w-8/12" : "w-full"} ${
        theme === "dark" ? "text-primary-text-dark" : "text-primary-text-light"
      }`}
    >
      {type === "horiz"
        ? text
        : text.length > 150
        ? text.slice(0, 150).concat("...")
        : text}
    </div>
  );
}

export default PostExcerpt;
