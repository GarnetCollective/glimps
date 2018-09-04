import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode";
import Button from "../../Shared/Button";
import ProcessingCard from "../GlimpsProcessing/ProcessingCard";

import Shell from "../../Shared/Shell";

import styles from "../../../styles";

function RetrievalNav(props) {
  return (
    <View style={styles.retrievalNavContainer}>
      <View style={styles.retrievalNav}>
        <Text style={styles.retrievalNavText}>Starting over in 30 seconds</Text>
        <TouchableOpacity onPress={props.retake}>
          <Button
            borderColor="#FFF"
            borderWidth="2.5"
            backgroundColor="transparent"
            width="140"
            height="45"
            text="Take another"
            textSize="15"
            textWeight="700"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default class GlimpsRetrieval extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    // const { glimpsUri } = this.props.navigation.state.params;
    const glimpsUri = "http://shellhacks.net/imgs/logos/2018/heroku-logo.svg";

    return (
      <Shell>
        <RetrievalNav retake={() => navigate("EventHome")} />
        <ProcessingCard>
          <Text style={styles.scanItText}>Scan it</Text>
          <QRCode
            value={glimpsUri}
            size={200}
            bgColor={"rgb(74, 66, 238)"}
            fgColor="white"
          />
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity>
            <Button
              backgroundColor="rgb(74, 66, 238)"
              width="200"
              height="45"
              text="Text me"
              textSize="23"
              textWeight="700"
            />
          </TouchableOpacity>
          <View style={styles.processingInfoContainer}>
            <Text style={styles.findIt}>Also find it at</Text>
            <Text style={styles.link}>glimps.app/shellhacks-2018</Text>
          </View>
        </ProcessingCard>
      </Shell>
    );
  }
}
