import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  Picker,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search('::') > -1) {
        const varCount = target.split('::').length;
        if (varCount === 2) {
          name = target.split('::')[0];
          id = target.split('::')[1];
        } else if (varCount === 3) {
          name = target.split('::')[0];
          index = parseInt(target.split('::')[1]);
          id = target.split('::')[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: 'button',
        name: name,
        index: index,
        id: id,
        owner: owner,
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search('::') > -1) {
      const varCount = name.split('::').length;
      if (varCount === 2) {
        name = name.split('::')[0];
        id = name.split('::')[1];
      } else if (varCount === 3) {
        name = name.split('::')[0];
        index = name.split('::')[1];
        id = name.split('::')[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split('::').join('')] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: 'textinput',
          name: name,
          value: value,
          index: index,
          id: id,
        });
      }
    });
  }

  render() {
    return (
      <ScrollView
        data-layer="7c5fc279-e6b3-4d7e-aeba-bdeb9e7e2dec"
        style={styles.homepage}>
        <ReactImage
          data-layer="025d79e7-f961-4e35-8e98-bbe4840e8f33"
          source={require('./assets/image1.png')}
          style={styles.homepage_image1}
        />
        <View
          data-layer="7b94561d-b6bc-42d8-8bc2-4447ce7ef690"
          style={styles.homepage_group16}>
          <View
            data-layer="8dc8f126-26f0-41ff-825e-30d3672e3bda"
            style={styles.homepage_group16_rectangle2}></View>
          <Text
            data-layer="66ace984-544b-42e3-ab29-9f9c87cd3a3a"
            style={styles.homepage_group16_canvas}>
            Canvas
          </Text>
          <Svg
            data-layer="41759f4c-8de5-4592-838f-89b1c90d01a4"
            style={styles.homepage_group16_iconMetroPencil}
            preserveAspectRatio="none"
            viewBox="2.570702314376831 1.928033471107483 50 50"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 44.75820541381836 1.928033471107483 C 49.07285690307617 1.928033471107483 52.57070541381836 5.425786972045898 52.57070541381836 9.740531921386719 C 52.57070541381836 11.49932098388672 51.98916244506836 13.12227058410645 51.00820541381836 14.42803192138672 L 47.88320159912109 17.55303192138672 L 36.94570159912109 6.615533351898193 L 40.07070159912109 3.490534067153931 C 41.37646484375 2.50957727432251 42.99931716918945 1.928034424781799 44.75820159912109 1.928034424781799 Z M 5.69570255279541 37.86552810668945 L 2.570702314376831 51.92803192138672 L 16.63320350646973 48.80303192138672 L 45.53945922851562 19.89678001403809 L 34.60195922851562 8.959280967712402 L 5.69570255279541 37.86552810668945 Z M 37.51103591918945 19.68086433410645 L 15.63603496551514 41.55586242675781 L 12.94287014007568 38.86269760131836 L 34.81787109375 16.98769760131836 L 37.51103591918945 19.68086242675781 Z" />
          </Svg>
        </View>
        <View
          data-layer="0e6406df-58f1-4709-b046-fdfb5eb1d101"
          style={styles.homepage_group15}>
          <View
            data-layer="795cf597-f6a2-4e86-8414-277667cf4fe7"
            style={styles.homepage_group15_rectangle1}></View>
          <Text
            data-layer="c37b3cdc-cee6-45a7-9c1b-6cb73264f4b9"
            style={styles.homepage_group15_blackboard}>
            Blackboard
          </Text>
          <Svg
            data-layer="999ae133-1a51-4368-9a4d-20890a36a38b"
            style={styles.homepage_group15_iconMetroPencil22e6dc44}
            preserveAspectRatio="none"
            viewBox="2.570702314376831 1.928033471107483 50.00000762939453 50"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 44.75820541381836 1.928033471107483 C 49.07285690307617 1.928033471107483 52.57070541381836 5.425786972045898 52.57070541381836 9.740531921386719 C 52.57070541381836 11.49932098388672 51.98916244506836 13.12227058410645 51.00820541381836 14.42803192138672 L 47.88320159912109 17.55303192138672 L 36.94570159912109 6.615533351898193 L 40.07070159912109 3.490534067153931 C 41.37646484375 2.50957727432251 42.99931716918945 1.928034424781799 44.75820159912109 1.928034424781799 Z M 5.69570255279541 37.86552810668945 L 2.570702314376831 51.92803192138672 L 16.63320350646973 48.80303192138672 L 45.53945922851562 19.89678001403809 L 34.60195922851562 8.959280967712402 L 5.69570255279541 37.86552810668945 Z M 37.51103591918945 19.68086433410645 L 15.63603496551514 41.55586242675781 L 12.94287014007568 38.86269760131836 L 34.81787109375 16.98769760131836 L 37.51103591918945 19.68086242675781 Z" />
          </Svg>
        </View>
        <View
          data-layer="448f0b26-15a6-4866-8c85-fb26b8fcc962"
          style={styles.homepage_group14}>
          <View
            data-layer="3c765647-c486-4b31-9c3d-e23dbd035351"
            style={styles.homepage_group14_rectangle3}></View>
          <Text
            data-layer="4ece363d-c32c-46c8-95c9-e11fd4f7f64e"
            style={styles.homepage_group14_enrollPay}>
            Enroll & Pay
          </Text>
          <Svg
            data-layer="82edc44a-b619-41ec-a769-319043d4fd01"
            style={styles.homepage_group14_iconIonicMdSchool}
            preserveAspectRatio="none"
            viewBox="2.25 4.5 50 42.857147216796875"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 11.34598255157471 28.74107360839844 L 11.34598255157471 38.26116180419922 L 27.25 47.35714340209961 L 43.15401840209961 38.26116180419922 L 43.15401840209961 28.74107360839844 L 27.25 37.83705520629883 L 11.34598255157471 28.74107360839844 Z M 27.25 4.5 L 2.25 18.78571510314941 L 27.25 33.07143020629883 L 47.70758819580078 21.38616180419922 L 47.70758819580078 37.83705139160156 L 52.25 37.83705139160156 L 52.25 18.78571510314941 L 27.25 4.5 Z" />
          </Svg>
        </View>
        <View
          data-layer="a69faa5c-9913-4f22-87dc-0a50c93b88bd"
          style={styles.homepage_group19}>
          <View
            data-layer="0c7583b1-a649-4548-b277-faf4d154bd4e"
            style={styles.homepage_group19_rectangle4}></View>
          <Text
            data-layer="5324c489-5438-44ff-bbf3-ca4e32b7c16d"
            style={styles.homepage_group19_map}>
            Map
          </Text>
          <Svg
            data-layer="c913db8a-112f-4dc9-806d-1210854cc0d1"
            style={styles.homepage_group19_iconAwesomeMapMarkerAlt}
            preserveAspectRatio="none"
            viewBox="0 0 37.4999885559082 50"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 16.82304191589355 48.99119186401367 C 2.633788108825684 28.42098617553711 0 26.30985641479492 0 18.7499942779541 C 0 8.394625663757324 8.394625663757324 0 18.7499942779541 0 C 29.1053638458252 0 37.4999885559082 8.394625663757324 37.4999885559082 18.7499942779541 C 37.4999885559082 26.30985641479492 34.8661994934082 28.42098617553711 20.67694664001465 48.99119567871094 C 19.74579429626465 50.33631134033203 17.75409507751465 50.33621597290039 16.82304191589355 48.99119567871094 Z M 18.7499942779541 26.56249237060547 C 23.06473922729492 26.56249237060547 26.56249237060547 23.06473922729492 26.56249237060547 18.7499942779541 C 26.56249237060547 14.43524932861328 23.06473922729492 10.93749618530273 18.7499942779541 10.93749618530273 C 14.43524932861328 10.93749618530273 10.93749618530273 14.43524932861328 10.93749618530273 18.7499942779541 C 10.93749618530273 23.06473922729492 14.43524932861328 26.56249237060547 18.7499942779541 26.56249237060547 Z" />
          </Svg>
        </View>
        <View
          data-layer="0f4b0413-b71b-4f8b-a471-ad2697dcc23d"
          style={styles.homepage_group18}>
          <View
            data-layer="8d0ca773-4601-4dad-87ca-2e17a713a0ec"
            style={styles.homepage_group18_rectangle5}></View>
          <Text
            data-layer="4be64f21-025a-4eb0-8e3b-ad9d9cbf84eb"
            style={styles.homepage_group18_events}>
            Events
          </Text>
          <Svg
            data-layer="117a5ea9-6808-4206-b9d3-09cc6ae89def"
            style={styles.homepage_group18_iconMaterialEventNote}
            preserveAspectRatio="none"
            viewBox="4.5 1.5 45 50"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 39.5 24 L 14.5 24 L 14.5 29 L 39.5 29 L 39.5 24 Z M 44.5 6.5 L 42 6.5 L 42 1.5 L 37 1.5 L 37 6.5 L 17 6.5 L 17 1.5 L 12 1.5 L 12 6.5 L 9.5 6.5 C 6.72499942779541 6.5 4.52500057220459 8.75 4.52500057220459 11.5 L 4.5 46.5 C 4.5 49.25 6.72499942779541 51.5 9.5 51.5 L 44.5 51.5 C 47.25 51.5 49.5 49.25 49.5 46.5 L 49.5 11.5 C 49.5 8.75 47.25 6.5 44.5 6.5 Z M 44.5 46.5 L 9.5 46.5 L 9.5 19 L 44.5 19 L 44.5 46.5 Z M 32 34 L 14.5 34 L 14.5 39 L 32 39 L 32 34 Z" />
          </Svg>
        </View>
        <View
          data-layer="b346a298-f407-4434-a7a5-47db4191b801"
          style={styles.homepage_group17}>
          <View
            data-layer="c83924ff-61d5-4a6b-b0b5-420e07789fa6"
            style={styles.homepage_group17_rectangle7}></View>
          <Text
            data-layer="87ebbe17-1ad9-472a-a419-8dae295288fa"
            style={styles.homepage_group17_degreeProgress}>
            Degree Progress
          </Text>
          <Svg
            data-layer="17e261e1-e38f-4f3f-9861-12f979e50a85"
            style={styles.homepage_group17_iconAwesomeChartLine}
            preserveAspectRatio="none"
            viewBox="0 4.5 50 37.5"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 48.4375 35.75 L 6.25 35.75 L 6.25 6.062499523162842 C 6.25 5.199218273162842 5.55078125 4.5 4.6875 4.5 L 1.5625 4.5 C 0.69921875 4.5 0 5.199218273162842 0 6.062499523162842 L 0 38.875 C 0 40.6005859375 1.3994140625 42 3.125 42 L 48.4375 42 C 49.30078125 42 50 41.30078125 50 40.4375 L 50 37.3125 C 50 36.44921493530273 49.30078125 35.75 48.4375 35.75 Z M 45.3125 7.625 L 33.783203125 7.625 C 31.6953125 7.625 30.64941215515137 10.1494140625 32.1259765625 11.62597560882568 L 35.2900390625 14.79003715515137 L 28.12499809265137 21.9560546875 L 20.95995903015137 14.79101371765137 C 19.73925590515137 13.57031059265137 17.76074028015137 13.57031059265137 16.54101371765137 14.79101371765137 L 9.833005905151367 21.49902153015137 C 9.222654342651367 22.10937309265137 9.222654342651367 23.09862899780273 9.833005905151367 23.70898056030273 L 12.04199123382568 25.91796684265137 C 12.65234279632568 26.52831840515137 13.64160060882568 26.52831840515137 14.25195217132568 25.91796684265137 L 18.75 21.4189453125 L 25.9150390625 28.583984375 C 27.1357421875 29.8046875 29.1142578125 29.8046875 30.333984375 28.583984375 L 39.708984375 19.208984375 L 42.873046875 22.37304878234863 C 44.349609375 23.84961128234863 46.8740234375 22.8037109375 46.8740234375 20.71582221984863 L 46.8740234375 9.1875 C 46.875 8.32421875 46.17578125 7.625 45.3125 7.625 Z" />
          </Svg>
        </View>
        <View
          data-layer="18be71c6-67fb-4d65-bc9c-496054d9bf75"
          style={styles.homepage_group20}>
          <View
            data-layer="ff0560eb-06b8-44c8-8807-beaedfb406ed"
            style={styles.homepage_group20_rectangle9}></View>
          <Text
            data-layer="b7edff0c-0363-4297-943d-a0a3fff26c85"
            style={styles.homepage_group20_calendar}>
            Calendar
          </Text>
          <Svg
            data-layer="0b7c5b9f-2987-4faa-93b1-dfe90d36b986"
            style={styles.homepage_group20_iconMetroCalendar}
            preserveAspectRatio="none"
            viewBox="2.570700168609619 1.9280333518981934 50.00001525878906 53.33331298828125"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 19.23736763000488 21.92803192138672 L 25.9040355682373 21.92803192138672 L 25.9040355682373 28.59469795227051 L 19.23736953735352 28.59469795227051 L 19.23736763000488 21.92803192138672 Z M 29.23736572265625 21.92803192138672 L 35.90403366088867 21.92803192138672 L 35.90403366088867 28.59469795227051 L 29.23736572265625 28.59469795227051 L 29.23736572265625 21.92803192138672 Z M 39.23736572265625 21.92803192138672 L 45.90403366088867 21.92803192138672 L 45.90403366088867 28.59469795227051 L 39.23736572265625 28.59469795227051 L 39.23736572265625 21.92803192138672 Z M 9.237367630004883 41.92803192138672 L 15.90403270721436 41.92803192138672 L 15.90403270721436 48.59469985961914 L 9.237367630004883 48.59469985961914 L 9.237367630004883 41.92803192138672 Z M 19.23736572265625 41.92803192138672 L 25.90403175354004 41.92803192138672 L 25.90403175354004 48.59469985961914 L 19.23736572265625 48.59469985961914 L 19.23736572265625 41.92803192138672 Z M 29.23736572265625 41.92803192138672 L 35.90403366088867 41.92803192138672 L 35.90403366088867 48.59469985961914 L 29.23736572265625 48.59469985961914 L 29.23736572265625 41.92803192138672 Z M 19.23736572265625 31.92803192138672 L 25.90403175354004 31.92803192138672 L 25.90403175354004 38.59469985961914 L 19.23736572265625 38.59469985961914 L 19.23736572265625 31.92803192138672 Z M 29.23736572265625 31.92803192138672 L 35.90403366088867 31.92803192138672 L 35.90403366088867 38.59469985961914 L 29.23736572265625 38.59469985961914 L 29.23736572265625 31.92803192138672 Z M 39.23736572265625 31.92803192138672 L 45.90403366088867 31.92803192138672 L 45.90403366088867 38.59469985961914 L 39.23736572265625 38.59469985961914 L 39.23736572265625 31.92803192138672 Z M 9.237367630004883 31.92803192138672 L 15.90403270721436 31.92803192138672 L 15.90403270721436 38.59469985961914 L 9.237367630004883 38.59469985961914 L 9.237367630004883 31.92803192138672 Z M 45.90403366088867 1.928034067153931 L 45.90403366088867 5.261366844177246 L 39.23736572265625 5.261366844177246 L 39.23736572265625 1.928033351898193 L 15.90403270721436 1.928033351898193 L 15.90403270721436 5.261366844177246 L 9.237367630004883 5.261366844177246 L 9.237367630004883 1.928033351898193 L 2.570700168609619 1.928033351898193 L 2.570700168609619 55.26136779785156 L 52.57069778442383 55.26136779785156 L 52.57069778442383 1.928033351898193 L 45.90402984619141 1.928033351898193 Z M 49.23736572265625 51.92803192138672 L 5.904032707214355 51.92803192138672 L 5.904032707214355 15.26136589050293 L 49.23736572265625 15.26136589050293 L 49.23736572265625 51.92803192138672 Z" />
          </Svg>
        </View>
        <View
          data-layer="d4ba6670-1b05-481c-b03d-6f941b8b7bef"
          style={styles.homepage_group21}>
          <View
            data-layer="99d25531-7882-43e6-8aba-ce66b998d78a"
            style={styles.homepage_group21_rectangle8}></View>
          <Text
            data-layer="d94df230-a915-4464-9883-438e8401d393"
            style={styles.homepage_group21_gpaCalculator}>
            GPA Calculator
          </Text>
          <Svg
            data-layer="f65e8077-4c4b-47c3-8378-9269c393feb2"
            style={styles.homepage_group21_iconAwesomeCalculator}
            preserveAspectRatio="none"
            viewBox="0 0 43.75 50"
            fill="rgba(64, 61, 61, 1)">
            <SvgPath d="M 39.0625 0 L 4.6875 0 C 2.1875 0 0 2.1875 0 4.6875 L 0 45.3125 C 0 47.81249618530273 2.1875 50 4.6875 50 L 39.0625 50 C 41.56249618530273 50 43.75 47.81249618530273 43.75 45.3125 L 43.75 4.6875 C 43.75 2.1875 41.56249618530273 0 39.0625 0 Z M 12.5 42.5 C 12.5 43.125 11.875 43.75 11.25 43.75 L 7.5 43.75 C 6.875 43.75 6.25 43.12499618530273 6.25 42.5 L 6.25 38.74999618530273 C 6.25 38.12499618530273 6.874999523162842 37.5 7.5 37.5 L 11.25 37.5 C 11.875 37.5 12.5 38.125 12.5 38.74999618530273 L 12.5 42.5 Z M 12.5 30 C 12.5 30.625 11.875 31.24999809265137 11.25 31.24999809265137 L 7.5 31.24999809265137 C 6.875 31.24999809265137 6.25 30.62499809265137 6.25 30 L 6.25 26.24999809265137 C 6.25 25.62499809265137 6.874999523162842 25 7.5 25 L 11.25 25 C 11.875 25 12.5 25.625 12.5 26.24999809265137 L 12.5 30 Z M 25 42.5 C 25 43.125 24.37499809265137 43.75 23.75 43.75 L 20 43.75 C 19.375 43.75 18.75 43.12499618530273 18.75 42.5 L 18.75 38.74999618530273 C 18.75 38.12499618530273 19.375 37.5 20 37.5 L 23.75 37.5 C 24.375 37.5 25 38.125 25 38.74999618530273 L 25 42.5 Z M 25 30 C 25 30.625 24.37499809265137 31.24999809265137 23.75 31.24999809265137 L 20 31.24999809265137 C 19.375 31.24999809265137 18.75 30.62499809265137 18.75 30 L 18.75 26.24999809265137 C 18.75 25.62499809265137 19.375 25 20 25 L 23.75 25 C 24.375 25 25 25.625 25 26.24999809265137 L 25 30 Z M 37.5 42.5 C 37.5 43.125 36.87499618530273 43.75 36.25 43.75 L 32.5 43.75 C 31.87499809265137 43.75 31.24999809265137 43.12499618530273 31.24999809265137 42.5 L 31.24999809265137 26.24999809265137 C 31.24999809265137 25.62499809265137 31.875 25 32.5 25 L 36.25 25 C 36.875 25 37.5 25.625 37.5 26.24999809265137 L 37.5 42.49999618530273 Z M 37.5 17.5 C 37.5 18.125 36.87499618530273 18.75 36.25 18.75 L 7.5 18.75 C 6.875 18.75 6.25 18.125 6.25 17.5 L 6.25 7.5 C 6.25 6.874999523162842 6.874999523162842 6.25 7.5 6.25 L 36.25 6.25 C 36.875 6.25 37.5 6.874999523162842 37.5 7.5 L 37.5 17.5 Z" />
          </Svg>
        </View>
        <View
          data-layer="4b05d9f5-a294-42a1-8a59-9ef7b4f1e23b"
          style={styles.homepage_group23}>
          <ReactImage
            data-layer="cd6ae5ff-d32f-4a91-9adf-07017c579159"
            source={require('./assets/image3.png')}
            style={styles.homepage_group23_image3}
          />
          <Svg
            data-layer="b5c4a252-eee1-47b0-ad88-a97729c25321"
            style={styles.homepage_group23_line3}
            preserveAspectRatio="none"
            viewBox="-0.00406646728515625 -0.5 123.00813293457031 2"
            fill="transparent">
            <SvgPath d="M 123 1 L 0 0" />
          </Svg>
          <Svg
            data-layer="c0126423-fa08-4391-8690-f83cf0e48a3f"
            style={styles.homepage_group23_line4}
            preserveAspectRatio="none"
            viewBox="-0.004058837890625 -0.5 123.00811767578125 2"
            fill="transparent">
            <SvgPath d="M 123 1 L 0 0" />
          </Svg>
        </View>
      </ScrollView>
    );
  }
}

Homepage.propTypes = {};

Homepage.defaultProps = {};

const styles = StyleSheet.create({
  homepage: {
    opacity: 1,
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 393,
    height: 852,
    left: 0,
    top: 0,
  },
  homepage_image1: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 'auto',
    height: 261,
    left: 0,
    top: 0,
    right: 0,
  },
  homepage_group16: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 110,
    left: 289,
    top: 357,
  },
  homepage_group16_rectangle2: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(127, 147, 180, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 0,
    top: 0,
  },
  homepage_group16_canvas: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 18,
    left: 0,
    top: 92,
  },
  homepage_group16_iconMetroPencil: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 50,
    height: 50,
    left: 18,
    top: 18,
  },
  homepage_group15: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 110,
    left: 154,
    top: 357,
  },
  homepage_group15_rectangle1: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(165, 139, 167, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 0,
    top: 0,
  },
  homepage_group15_blackboard: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 18,
    left: 0,
    top: 92,
  },
  homepage_group15_iconMetroPencil22e6dc44: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 50,
    height: 50,
    left: 18,
    top: 18,
  },
  homepage_group14: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 110,
    left: 19,
    top: 357,
  },
  homepage_group14_rectangle3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(169, 190, 152, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 0,
    top: 0,
  },
  homepage_group14_enrollPay: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 18,
    left: 0,
    top: 92,
  },
  homepage_group14_iconIonicMdSchool: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 50,
    height: 42.86,
    left: 18,
    top: 21.07,
  },
  homepage_group19: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 110,
    left: 19,
    top: 492,
  },
  homepage_group19_rectangle4: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(195, 192, 137, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 0,
    top: 0,
  },
  homepage_group19_map: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 18,
    left: 0,
    top: 92,
  },
  homepage_group19_iconAwesomeMapMarkerAlt: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 37.5,
    height: 50,
    left: 24,
    top: 18,
  },
  homepage_group18: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 110,
    left: 154,
    top: 492,
  },
  homepage_group18_rectangle5: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(160, 109, 100, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 0,
    top: 0,
  },
  homepage_group18_events: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 18,
    left: 0,
    top: 92,
  },
  homepage_group18_iconMaterialEventNote: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 45,
    height: 50,
    left: 20,
    top: 18,
  },
  homepage_group17: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 128,
    left: 19,
    top: 627,
  },
  homepage_group17_rectangle7: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(208, 178, 121, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 1,
    top: 0,
  },
  homepage_group17_degreeProgress: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 36,
    left: 0,
    top: 92,
  },
  homepage_group17_iconAwesomeChartLine: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 50,
    height: 37.5,
    left: 19,
    top: 24,
  },
  homepage_group20: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 110,
    left: 289,
    top: 492,
  },
  homepage_group20_rectangle9: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(201, 157, 194, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 1,
    top: 0,
  },
  homepage_group20_calendar: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 18,
    left: 0,
    top: 92,
  },
  homepage_group20_iconMetroCalendar: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 50,
    height: 53.33,
    left: 19,
    top: 16,
  },
  homepage_group21: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 128,
    left: 288,
    top: 627,
  },
  homepage_group21_rectangle8: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(102, 175, 169, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 85,
    height: 85,
    left: 1,
    top: 0,
  },
  homepage_group21_gpaCalculator: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(64, 61, 61, 1)',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 86,
    height: 36,
    left: 0,
    top: 92,
  },
  homepage_group21_iconAwesomeCalculator: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 43.75,
    height: 50,
    left: 22,
    top: 18,
  },
  homepage_group23: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 350,
    height: 70,
    left: 22,
    top: 762,
  },
  homepage_group23_image3: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 79,
    height: 'auto',
    left: 135.5,
    top: 0,
    bottom: 0,
  },
  homepage_group23_line3: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 123.01,
    height: 2,
    left: 0,
    top: 34,
  },
  homepage_group23_line4: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 123.01,
    height: 2,
    left: 227,
    top: 34,
  },
});
