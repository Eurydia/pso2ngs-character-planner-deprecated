import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const PotRNGIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 16 16"
      display="box"
      width={16}
      height={16}
    >
      <path d="M0 0H16V16H0V0Z" fill="#48B4FF" />
      <path
        d="M0 0H3V1H2V2H1V4H2V5H3V6H4V7H5V8H6V9H7V11H8V14H7V15H8V16H0V0ZM8 10H9V11H8V10ZM9 11H10V12H9V11Z"
        fill="black"
      />
      <path
        d="M5 0H16V10H14V9H13V8H12V7H11V6H10V5H9V4H8V3H7V2H6V1H5V0Z"
        fill="black"
      />
      <path d="M14 12H16V16H11V15H12V14H13V13H14V12Z" fill="black" />
      <path d="M0 0H3V1H2V2H1V3H0V0Z" fill="#48B4FF" />
      <path d="M0 0H2V1H1V2H0V0Z" fill="black" />
      <path d="M15 11H16V12H15V11Z" fill="#4BB7FF" />
    </SvgIcon>
  );
};
export default PotRNGIcon;
