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
  }

  render() {
    var markers = [
      {
        latlng: {latitude: 38.958548396598786, longitude: -95.24757287968642},
        title: 'Strong Hall',
        decription: 'Strong Hall, 1450 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.957607041937344, longitude: -95.24782846064242},
        title: 'Wescoe Hall',
        decription: 'Wescoe Hall, 1450 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95817055941095, longitude: -95.2490472412361},
        title: 'Budig Hall',
        decription: 'Budig Hall, 1455 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95774365357185, longitude: -95.24631175587075},
        title: 'Bailey Hall',
        decription: 'Bailey Hall, 1440 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95671808162972, longitude: -95.24477674271023},
        title: 'Watson Library',
        decription: 'Watson Library, 1425 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95724540706193, longitude: -95.2436142360113},
        title: 'Fraser Hall',
        decription: 'Fraser Hall, 1415 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.959248544986366, longitude: -95.2434584197944},
        title: 'KU Memorial Union',
        decription: 'KU Memorial Union, 1301 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95963671172647, longitude: -95.24455544480813},
        title: 'Spencer Museum of Art',
        decription:
          'Spencer Museum of Art, 1301 Mississippi St, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95682348489689, longitude: -95.24654701886332},
        title:
          'William Allen White School of Journalism and Mass Communications',
        decription:
          'William Allen White School of Journalism and Mass Communications, 1435 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95668634292394, longitude: -95.24841226040947},
        title: 'Malott Hall',
        decription: 'Malott Hall, 1251 Wescoe Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95577980467837, longitude: -95.2485886213976},
        title: 'Haworth Hall',
        decription: 'Haworth Hall, 1200 Sunnyside Ave, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.955644985178665, longitude: 95.24980521327267},
        title: 'Summerfield Hall',
        decription: 'Summerfield Hall, 1300 Sunnyside Ave, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.954997957889084, longitude: -95.24915108009573},
        title: 'Robinson Center',
        decription: 'Robinson Center, 1701 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95564416526363, longitude: -95.25124349850284},
        title: 'Murphy Hall',
        decription: 'Murphy Hall, 1530 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95526419024495, longitude: -95.2524004678938},
        title: 'Debruce Center',
        decription: 'Debruce Center, 1647 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95374641777313, longitude: -95.24997612046836},
        title: 'Capitol Federal Hall',
        decription:
          'Capitol Federal Hall, 1654 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.953830365548704, longitude: -95.24853775231692},
        title: 'Watkins Health Center',
        decription:
          'Watkins Health Center, 1200 Schwegler Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.9524801419821, longitude: -95.24789159832389},
        title: 'Ambler Student Recreation Center',
        decription:
          'Ambler Student Recreation Center, 1740 Watkins Center Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95418424400007, longitude: -95.25276505376304},
        title: 'Allen Fieldhouse',
        decription: 'Allen Fieldhouse, 1651 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95520256209458, longitude: -95.25480531742453},
        title: 'Burge Union',
        decription: 'Burge Union, 1654 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.955663618617194, longitude: -95.25498138944836},
        title: 'Gray-Little Hall',
        decription: 'Gray-Little Hall, 1567 Irving Hill Rd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95779561677676, longitude: -95.2538171580765},
        title: 'Learned Engineering Expansion Phase 2',
        decription:
          'Learned Engineering Expansion Phase 2, 1567 Irving Hill Rd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.958130918644244, longitude: -95.25456456585073},
        title: 'Learned Hall',
        decription: 'Learned Hall, 1530 W 15th St, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.957636513059335, longitude: -95.25276852898956},
        title: 'Eaton Hall',
        decription: 'Eaton Hall, 1520 W 15th St, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.957390398222294, longitude: -95.25196923063442},
        title: 'Slawson Hall',
        decription: 'Slawson Hall, 1420 Naismith Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.958506251043154, longitude: -95.2500729089219},
        title: 'Marvin Hall',
        decription: 'Marvin Hall, 1465 Jayhawk Blvd, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95738622678649, longitude: -95.24966789536603},
        title: 'Anshutz Library',
        decription:
          'Anshutz Library, 1301 Hoch Auditoria Dr, Lawrence, KS 66045',
      },
      {
        latlng: {latitude: 38.95505705655732, longitude: -95.26278517240785},
        title: 'Lied Center',
        decription: 'Lied Center, 1600 Stewart Dr, Lawrence, KS 66045',
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
