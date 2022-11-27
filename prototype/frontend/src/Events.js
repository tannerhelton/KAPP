import React, {useCallback} from 'react';
import {ScrollView, Button, Linking} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import ItemDisplay from './ItemDisplay';

const supportedURL = 'https://rockchalkcentral.ku.edu/events';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

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
        <OpenURLButton url={supportedURL}>
          Visit Rock Chalk Central
        </OpenURLButton>
        {this.state.events.map(event => (
          <ItemDisplay key={event.id} eventData={event} />
        ))}
      </ScrollView>
    );
  }
}
