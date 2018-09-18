import React from "react";
import { Text } from "react-native";
import { format, parse } from "date-fns";

import Card from "../../Shared/Card";

import styles from "../../../styles";

export default function EventCard(props) {
  const date = format(parse(props.date), "MMMM Do, YYYY");

  return (
    <Card image={props.image}>
      <Text style={styles.eventName}>{props.name}</Text>
      <Text style={styles.eventDate}>{date}</Text>
    </Card>
  );
}
