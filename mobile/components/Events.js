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

const data = [
  {
    name: "Speak Aug 18'",
    date: "August 31st, 2018",
    logoUrl:
      "http://speaktelevision.com/wp-content/uploads/2016/06/speak-fridays-June-24th-e1465606480780-497x264.jpg"
  },
  {
    name: "MangoHacks 17'",
    date: "February 2nd, 2018",
    logoUrl:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/358/084/datas/original.png"
  },
  {
    name: "Bitcamp 2018",
    date: "April 4th, 2018",
    logoUrl: "http://bit.camp/img/facebook-share-link-2018.jpg"
  },
  {
    name: "Shellhacks 18'",
    date: "September 14th, 2018",
    logoUrl: "https://shellhacks.net/imgs/opengraph.png"
  }
];

class Card extends React.Component {
  render() {
    const { image, name, date } = this.props;
    return (
      <View style={styles.eventCard}>
        <Image source={{ uri: image }} style={styles.eventImage} />
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
  componentDidMount() {
    this.getEvents();
  }

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
      "Enter event key",
      null,
      key => this.verifyEventKey(event, key),
      "secure-text"
    );
  };

  verifyEventKey = async (event, key) => {
    try {
      const event = await verifyEvent(event, key);
    } catch (e) {
      AlertIOS.alert(e);
    }
  };

  header() {
    return (
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
  }

  events() {
    return (
      <View style={styles.eventsContainer}>
        <View style={styles.eventsListContainer}>
          <View style={styles.eventsInfo}>
            <Text style={styles.eventsListSelect}>Select your event</Text>
            <Text style={styles.eventsListAvailable}>4 events available</Text>
          </View>

          <ScrollView>
            <View style={styles.eventList}>
              {data.map(event => {
                return (
                  <TouchableOpacity
                    key={event.date}
                    onPress={this.verifyEvent.bind(this, event)}
                  >
                    <Card
                      image={event.logoUrl}
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
  }

  render() {
    return (
      <View style={styles.events}>
        {this.header()}
        {this.events()}
      </View>
    );
  }
}
