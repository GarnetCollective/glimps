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

class Card extends React.Component {
  render() {
    const { image, name, date } = this.props;

    return (
      <View style={styles.eventCard}>
        <Image
          source={{
            uri: image
              ? image
              : "http://bit.camp/img/facebook-share-link-2018.jpg"
          }}
          style={styles.eventImage}
        />
        <View style={styles.eventCardInfo}>
          <Text style={styles.eventName}>{name}</Text>
          <Text style={styles.eventDate}>{date}</Text>
        </View>
      </View>
    );
  }
}

export class Events extends Component {
  state = { events: [] };
  componentDidMount = async () => {
    await this.getEvents();
  };

  getEvents = async () => {
    try {
      const events = await getEvents();
      this.setState({ events: events });
    } catch (e) {
      AlertIOS.alert(e);
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
    try {
      const verifiedEvent = await verifyEvent(event, key);
    } catch (e) {
      AlertIOS.alert(e);
    }
  };

  header = () => (
    <Camera
      ref={ref => (this.camera = ref)}
      style={styles.eventsHeaderCamera}
      type="front"
    >
      <View style={styles.eventsHeader}>
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
