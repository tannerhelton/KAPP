import React from 'react';
import {ScrollView, Text} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch('https://rockchalkcentral.ku.edu/events.rss')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        this.setState({
          events: rss.items,
        });
      });
  }

  render() {
    return (
      <ScrollView>
        {this.state.events.map(event => (
          <Text key={event.id}>
            {event.title} ::
            {event.description.substring(
              event.description.indexOf('From') + 123,
              event.description.indexOf('to <time') - 15,
            )}
          </Text>
        ))}
      </ScrollView>
    );
  }
}
