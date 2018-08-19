import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  AlertIOS
} from "react-native";
import { Camera } from "expo";

import { getEvents, verifyEvent } from "../controllers/";

import styles from "../styles";

function Card(props) {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventCardImageContainer}>
        <Image
          source={{
            uri: props.image
              ? props.image
              : "https://pasteboard.co/images/HyhnMiE.jpg/load",
            cache: "force-cache"
          }}
          style={styles.eventImage}
        />
      </View>

      <View style={styles.eventCardInfo}>
        <Text style={styles.eventName}>{props.name}</Text>
        <Text style={styles.eventDate}>{props.date}</Text>
      </View>
    </View>
  );
}

export class Events extends Component {
  state = { events: [] };

  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    try {
      const events = await getEvents();
      this.setState({ events: events });
    } catch (e) {
      AlertIOS.alert("Glimps", `${e}`);
    }
  };

  verifyEvent = event => {
    AlertIOS.prompt(
      "Event key",
      null,
      key => this.verifyEventKey(event, key),
      "secure-text"
    );
  };

  verifyEventKey = async (event, key) => {
    const { navigate } = this.props.navigation;

    try {
      const verifiedEvent = await verifyEvent(event, key);
      navigate("CameraPreview", { event: event });
    } catch (e) {
      AlertIOS.alert("Glimps", `${e}`);
    }
  };

  header = () => (
    <Camera
      ref={ref => (this.camera = ref)}
      style={styles.headerCamera}
      type="front"
    >
      <View style={styles.header}>
        <Text style={styles.eventsHeaderTitle}>Let's get started!</Text>
      </View>
    </Camera>
  );

  events = events => (
    <View style={styles.eventsContainer}>
      <View style={styles.eventsListContainer}>
        <View style={styles.eventsInfo}>
          <Text style={styles.eventsListSelect}>Select your event</Text>
          <Text style={styles.eventsListAvailable}>
            {events.length} events available
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.eventList}>
            {events.map(event => {
              return (
                <TouchableOpacity
                  key={event.id}
                  onPress={this.verifyEvent.bind(this, event)}
                >
                  <Card
                    image={event.mainImageUrl}
                    name={event.name}
                    date={event.date}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );

  render() {
    const { events } = this.state;

    return (
      <View style={styles.events}>
        {this.header()}
        {events && this.events(events)}
      </View>
    );
  }
}
