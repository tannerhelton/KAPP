import * as React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default function Map() {
  var markers = [
    {
      latitude: 38.95863382686692,
      longitude: -95.24767470289626,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive',
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.95863382686692,
          longitude: -95.24767470289626,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        annotations={markers}
      />
    </View>
  );
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
