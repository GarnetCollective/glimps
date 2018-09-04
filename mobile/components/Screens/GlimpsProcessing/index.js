import React from "react";
import { Image } from "react-native";

import Shell from "../../Shared/Shell";
import ProcessingCard from "../GlimpsProcessing/ProcessingCard";

import styles from "../../../styles";

export default function GlimpsProcessing(props) {
  return (
    <Shell headerTitle="Putting it all together">
      <ProcessingCard>
        <Image
          style={styles.processingGif}
          source={require("../../../assets/images/loader_blue.gif")}
        />
      </ProcessingCard>
    </Shell>
  );
}
