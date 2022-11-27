import * as React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRegion: {
        latitude: 38.958548396598786,
        longitude: -95.24757287968642,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      },
    };
  }

  getInitialState() {
    return {
      region: {
        latitude: 38.958548396598786,
        longitude: -95.24757287968642,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      },
    };
  }

  onRegionChange(region) {
    this.setState({region});
    console.log(region);
  }

  render() {
    var markers = [
      {
        latlng: {latitude: 38.958548396598786, longitude: -95.24757287968642},
        title: 'Strong Hall',
        description: 'Strong Hall, 1450 Jayhawk Blvd, Lawrence, KS 66045',
      },
    ];
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 38.958548396598786,
            longitude: -95.24757287968642,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          style={styles.map}
          region={this.state.region}
          onRegionChange={() => this.onRegionChange.bind(this)}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
