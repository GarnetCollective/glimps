import React from "react";
import Svg, { Path } from "react-native-svg";
import styles from "../../styles";

export default function Backspace(props) {
  const { width = "55", height = "25", fill = "#000" } = props;

  return (
    <Svg
      style={styles.backspace}
      width={width}
      height={height}
      viewBox="0 0 400 750"
    >
      <Path
        fill={fill}
        fill-rule="evenodd"
        d="M561 76.5H178.5c-17.85 0-30.6 7.65-40.8 22.95L0 306l137.7 206.55c10.2 12.75 22.95 22.95 40.8 22.95H561c28.05 0 51-22.95 51-51v-357c0-28.05-22.95-51-51-51zm-76.5 321.3l-35.7 35.7-91.8-91.8-91.8 91.8-35.7-35.7 91.8-91.8-91.8-91.8 35.7-35.7 91.8 91.8 91.8-91.8 35.7 35.7-91.8 91.8 91.8 91.8z"
      />
    </Svg>
  );
}
