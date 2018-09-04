import React, { Component } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AlertIOS
} from "react-native";

import pluralize from "pluralize";

import Shell from "../../Shared/Shell";
import Sheet from "../../Shared/Sheet";
import EventCard from "./EventCard";

import { getEvents, verifyEvent } from "../../../controllers/events";

import styles from "../../../styles";

export default class Events extends Component {
  state = { events: [] };

  componentDidMount = () => this.getEvents();

  getEvents = async () => {
    try {
      const events = await getEvents();
      this.setState({ events });
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
      navigate("EventHome", { event });
    } catch (e) {
      AlertIOS.alert("Glimps", `Unable to verify secret for ${event.name}`);
    }
  };

  events = events => {
    const pluralizedEvents = pluralize("event", events.length, true);

    const Dimensions = require("Dimensions");
    const { width, height } = Dimensions.get("window");

    return (
      <Sheet width={width / 1.15} height={height / 1.25}>
        <View style={styles.eventsInfo}>
          <Text style={styles.eventsListSelect}>Select your event</Text>
          <Text style={styles.eventsListAvailable}>
            {pluralizedEvents} available
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
                  <EventCard
                    image={event.mainImageUrl}
                    name={event.name}
                    date={event.date}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </Sheet>
    );
  };

  render() {
    const { events } = this.state;

    return (
      <Shell headerTitle="Let's get started!">
        {events && this.events(events)}
      </Shell>
    );
  }
}
