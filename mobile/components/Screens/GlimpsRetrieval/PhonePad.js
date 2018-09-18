import React from "react";
import { View, Text, TouchableOpacity, AlertIOS, Image } from "react-native";

import Shell from "../../Shared/Shell";
import ProcessingCard from "../GlimpsProcessing/ProcessingCard";
import Button from "../../Shared/Button";
import Backspace from "../../Shared/Backspace";

import { sendText } from "../../../controllers/courier";

import styles from "../../../styles";

function NumberPadButton(props) {
  return (
    <TouchableOpacity
      onPress={() => props.updateNum(props.num)}
      style={styles.phoneNumberButton}
    >
      <Text style={styles.phoneNumberButtonText}>{props.num}</Text>
    </TouchableOpacity>
  );
}

function NumberPad(props) {
  return (
    <View style={styles.numberPad}>
      <NumberPadButton updateNum={num => props.updateNum(num)} num="1" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="2" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="3" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="4" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="5" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="6" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="7" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="8" />
      <NumberPadButton updateNum={num => props.updateNum(num)} num="9" />

      <View style={styles.phoneNumberBottomRow}>
        <NumberPadButton updateNum={num => props.updateNum(num)} num="0" />
        <NumberPadButton
          updateNum={() => props.updateNum("x")}
          num={<Backspace />}
        />
      </View>
    </View>
  );
}

export default class PhonePad extends React.Component {
  state = { currentPhoneNumber: "" };

  formatToPhone = num => {
    const input = num.replace(/\D/g, "").substring(0, 10);
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      num = `(${zip}) ${middle} - ${last}`;
    } else if (input.length > 3) {
      num = `(${zip}) ${middle}`;
    } else if (input.length > 0) {
      num = `(${zip}`;
    }

    return num;
  };

  sendText = (phoneNum, glimpsId) => {
    const { navigate } = this.props.navigation;

    if (phoneNum.length !== 10) {
      AlertIOS.alert("Glimps", "Invalid phone number.");
    } else {
      sendText(phoneNum, glimpsId);
      navigate("Home");
    }
  };

  updatePhoneNumber = num => {
    let { currentPhoneNumber } = this.state;

    if (currentPhoneNumber.length >= 10 && num != "x") {
      return;
    } else {
      if (num != "x") {
        currentPhoneNumber += num;
        this.setState({ currentPhoneNumber: currentPhoneNumber });
      } else {
        let rm = currentPhoneNumber.slice(0, -1);
        this.setState({ currentPhoneNumber: rm });
      }
    }
  };

  render() {
    const { navigate, goBack } = this.props.navigation;
    let { glimpsUri, glimpsId } = this.props.navigation.state.params;

    const { currentPhoneNumber } = this.state;

    return (
      <Shell>
        <View style={styles.retrievalNavContainer}>
          <View style={styles.retrievalNav}>
            <TouchableOpacity onPress={() => navigate("Home")}>
              <Button
                borderColor="#FFF"
                borderWidth="2"
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
        <ProcessingCard input={num => this.handleInput(num)}>
          <View style={styles.numberPadContainer}>
            <Text style={styles.phonePadPreText}>
              Type in your phone number and we'll send you a copy in a sec
            </Text>
            {currentPhoneNumber > 0 && (
              <View style={styles.currentPhoneNumberContainer}>
                <Text style={styles.currentPhoneNumber}>
                  {this.formatToPhone(currentPhoneNumber)}
                </Text>
              </View>
            )}
            {currentPhoneNumber <= 0 && (
              <View style={styles.currentPhoneNumberPlaceholderContainer}>
                <Text style={styles.currentPhoneNumberPlaceholder} />
              </View>
            )}
            <NumberPad updateNum={num => this.updatePhoneNumber(num)} />
            <View style={styles.optionButtonContainer}>
              <TouchableOpacity onPress={() => goBack()}>
                <Button
                  style={styles.phonepadOptionButton}
                  borderColor="#424242"
                  textColor="#424242"
                  borderWidth="2.5"
                  backgroundColor="transparent"
                  width="140"
                  height="40"
                  text="Cancel"
                  textSize="15"
                  textWeight="700"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.sendText(currentPhoneNumber, glimpsId)}
              >
                <Button
                  style={styles.phonepadOptionButton}
                  textColor="#fff"
                  borderWidth="2.5"
                  backgroundColor="rgba(74, 66, 238, 1)"
                  width="140"
                  height="40"
                  text="Send"
                  textSize="15"
                  textWeight="700"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ProcessingCard>
      </Shell>
    );
  }
}
