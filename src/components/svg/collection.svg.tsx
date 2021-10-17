import React from "react";
import { SizeVariantType, ThemeType } from "../../../types/globalTypes";

export type SvgProps = {
  color?: string;
  size?: "xsm" | SizeVariantType;
  accent?: boolean;
};

export const Solid = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7 17.8L12.7 14.8C12.3 14.4 11.7 14.4 11.3 14.8L8.3 17.8C7.9 18.2 7.9 18.8 8.3 19.2C8.7 19.6 9.3 19.6 9.7 19.2L12 16.9L14.3 19.2C14.5 19.4 14.7 19.5 15 19.5C15.3 19.5 15.5 19.4 15.7 19.2C16.1 18.8 16.1 18.2 15.7 17.8ZM11.3 10.2C11.5 10.4 11.7 10.5 12 10.5C12.3 10.5 12.5 10.4 12.7 10.2L15.7 7.2C16.1 6.8 16.1 6.2 15.7 5.8C15.3 5.4 14.7 5.4 14.3 5.8L12 8.1L9.7 5.8C9.3 5.4 8.7 5.4 8.3 5.8C7.9 6.2 7.9 6.8 8.3 7.2L11.3 10.2Z"
      fill={color === "dark" ? "#FFFFFF" : "#6A6666"}
    />
  </svg>
);

export const Search = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.07 16.83L19 14.71C18.5547 14.2868 17.9931 14.0063 17.3872 13.9047C16.7813 13.8032 16.1589 13.8851 15.6 14.14L14.7 13.24C15.7606 11.8229 16.2449 10.0567 16.0555 8.29684C15.8662 6.537 15.0172 4.91423 13.6794 3.7552C12.3417 2.59618 10.6145 1.98696 8.84566 2.05019C7.07679 2.11341 5.39755 2.84439 4.14597 4.09597C2.89439 5.34755 2.16341 7.0268 2.10018 8.79567C2.03696 10.5645 2.64618 12.2917 3.8052 13.6294C4.96422 14.9672 6.58699 15.8162 8.34684 16.0055C10.1067 16.1949 11.8729 15.7106 13.29 14.65L14.18 15.54C13.8951 16.0996 13.793 16.7346 13.8881 17.3553C13.9832 17.9761 14.2706 18.5513 14.71 19L16.83 21.12C17.3925 21.6818 18.155 21.9974 18.95 21.9974C19.745 21.9974 20.5075 21.6818 21.07 21.12C21.3557 20.8406 21.5828 20.5069 21.7378 20.1386C21.8928 19.7702 21.9726 19.3746 21.9726 18.975C21.9726 18.5754 21.8928 18.1798 21.7378 17.8114C21.5828 17.4431 21.3557 17.1094 21.07 16.83ZM12.59 12.59C11.8902 13.288 10.9993 13.7629 10.0297 13.9549C9.06018 14.1468 8.0555 14.047 7.1426 13.6682C6.22971 13.2894 5.44956 12.6485 4.90071 11.8265C4.35186 11.0046 4.05894 10.0384 4.05894 9.05C4.05894 8.06163 4.35186 7.09544 4.90071 6.27347C5.44956 5.45149 6.22971 4.81062 7.1426 4.43182C8.0555 4.05301 9.06018 3.95325 10.0297 4.14515C10.9993 4.33706 11.8902 4.812 12.59 5.51C13.0556 5.97446 13.4251 6.52621 13.6771 7.13367C13.9292 7.74112 14.0589 8.39233 14.0589 9.05C14.0589 9.70768 13.9292 10.3589 13.6771 10.9663C13.4251 11.5738 13.0556 12.1255 12.59 12.59ZM19.66 19.66C19.567 19.7537 19.4564 19.8281 19.3346 19.8789C19.2127 19.9297 19.082 19.9558 18.95 19.9558C18.818 19.9558 18.6873 19.9297 18.5654 19.8789C18.4436 19.8281 18.333 19.7537 18.24 19.66L16.12 17.54C16.0263 17.447 15.9519 17.3364 15.9011 17.2146C15.8503 17.0927 15.8242 16.962 15.8242 16.83C15.8242 16.698 15.8503 16.5673 15.9011 16.4454C15.9519 16.3236 16.0263 16.213 16.12 16.12C16.213 16.0263 16.3236 15.9519 16.4454 15.9011C16.5673 15.8503 16.698 15.8242 16.83 15.8242C16.962 15.8242 17.0927 15.8503 17.2146 15.9011C17.3364 15.9519 17.447 16.0263 17.54 16.12L19.66 18.24C19.7537 18.333 19.8281 18.4436 19.8789 18.5654C19.9297 18.6873 19.9558 18.818 19.9558 18.95C19.9558 19.082 19.9297 19.2127 19.8789 19.3346C19.8281 19.4564 19.7537 19.567 19.66 19.66Z"
      fill={color}
    />
  </svg>
);

export const Clock = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2C9.02218 2 7.08879 2.58649 5.44429 3.6853C3.7998 4.78412 2.51808 6.3459 1.7612 8.17317C1.00433 10.0004 0.806292 12.0111 1.19214 13.9509C1.578 15.8907 2.5304 17.6725 3.92893 19.0711C5.32745 20.4696 7.10928 21.422 9.04909 21.8079C10.9889 22.1937 12.9996 21.9957 14.8268 21.2388C16.6541 20.4819 18.2159 19.2002 19.3147 17.5557C20.4135 15.9112 21 13.9778 21 12C21 10.6868 20.7413 9.38642 20.2388 8.17317C19.7362 6.95991 18.9996 5.85752 18.0711 4.92893C17.1425 4.00035 16.0401 3.26375 14.8268 2.7612C13.6136 2.25866 12.3132 2 11 2ZM11 20C9.41775 20 7.87103 19.5308 6.55543 18.6518C5.23984 17.7727 4.21446 16.5233 3.60896 15.0615C3.00346 13.5997 2.84503 11.9911 3.15371 10.4393C3.4624 8.88743 4.22432 7.46197 5.34314 6.34315C6.46196 5.22433 7.88743 4.4624 9.43927 4.15372C10.9911 3.84504 12.5997 4.00346 14.0615 4.60896C15.5233 5.21447 16.7727 6.23984 17.6518 7.55544C18.5308 8.87103 19 10.4177 19 12C19 14.1217 18.1571 16.1566 16.6569 17.6569C15.1566 19.1571 13.1217 20 11 20ZM12 11.93V7C12 6.73478 11.8946 6.48043 11.7071 6.29289C11.5196 6.10536 11.2652 6 11 6C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7V12C10 12 10 12.07 10 12.11C9.97539 12.3133 10.0138 12.5192 10.11 12.7L11.61 15.3C11.7426 15.5307 11.9614 15.6993 12.2184 15.7687C12.4753 15.8381 12.7493 15.8026 12.98 15.67C13.2107 15.5374 13.3793 15.3186 13.4487 15.0616C13.5181 14.8047 13.4826 14.5307 13.35 14.3L12 11.93Z"
      fill={color === "dark" ? "#FFFFFF" : "#6A6666"}
    />
  </svg>
);

export const Check = ({ accent, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 10.3L11.4 15.1C11 15.5 10.4 15.5 10 15.1L7.8 12.9C7.4 12.5 7.4 11.9 7.8 11.5C8.2 11.1 8.8 11.1 9.2 11.5L10.7 13L14.8 8.9C15.2 8.5 15.8 8.5 16.2 8.9C16.6 9.3 16.6 9.9 16.2 10.3Z"
      fill={accent ? "#6A279F" : "#6A6666"}
    />
  </svg>
);
