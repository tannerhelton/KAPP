import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="21017419-7cb8-4614-8eef-da4d17003023" style={styles.login}>
        <Text data-layer="636ceaaf-978c-44ba-b3b1-155bf42ef755" style={styles.login_continueAsGuest}>Continue as Guest</Text>
        <View data-layer="32e1fabf-9f47-4bcc-a1d0-011e82c78a00" style={styles.login_group9}>
            <View data-layer="16cc51dc-baca-4598-a1a7-7bc3949c7fae" style={styles.login_group9_rectangle11}></View>
            <View data-layer="5e8f3fb3-964f-4535-867f-6908e5775c7e" style={styles.login_group9_group8}>
                <Text data-layer="06ed2f3d-f941-4fcb-b810-59b7e70c4da8" style={styles.login_group9_group8_continueWithSso}>Continue with SSO</Text>
                <ReactImage data-layer="2a654c84-7c70-4e5f-81f5-fbe1254f6f1c" source={require('./assets/image2.png')} style={styles.login_group9_group8_image2} />
            </View>
        </View>
        <View data-layer="6b606c59-9438-4200-8884-e3aa01608c16" style={styles.login_rectangle11ad6c51ae}></View>
        <Text data-layer="1d1e2647-0bc0-4c02-8581-8451c737f9e8" style={styles.login_continueAsGuest3a455ede}>Continue as Guest</Text>
        <Svg data-layer="2b4f6f31-77b3-46d5-b98a-78b43080f99f" style={styles.login_line1} preserveAspectRatio="none" viewBox="0 -0.5 76 1" fill="transparent"><SvgPath d="M 0 0 L 76 0"  /></Svg>
        <Svg data-layer="b73aa9c1-b377-4823-a532-b126eaf228fd" style={styles.login_line2} preserveAspectRatio="none" viewBox="0 -0.5 76 1" fill="transparent"><SvgPath d="M 0 0 L 76 0"  /></Svg>
        <Text data-layer="08dec317-f794-4a01-9adb-7f30e685f6b8" style={styles.login_or}>or</Text>
        <ReactImage data-layer="bfd214db-a179-4ba9-a462-a42623b935f8" source={require('./assets/kapplogo.png')} style={styles.login_kapplogo} />
        <ReactImage data-layer="6d720739-20da-4e40-bea1-ad245f1b6387" source={require('./assets/image3.png')} style={styles.login_image3} />
        <Svg data-layer="ac858bf9-f38b-4b8b-aed1-5680b7726d29" style={styles.login_line3} preserveAspectRatio="none" viewBox="-0.00408935546875 -0.5 123.00814819335938 2" fill="transparent"><SvgPath d="M 123 1 L 0 0"  /></Svg>
        <Svg data-layer="58ac87ca-59b6-4163-bb26-ec05c2ddce0c" style={styles.login_line4} preserveAspectRatio="none" viewBox="-0.004058837890625 -0.5 123.00811767578125 2" fill="transparent"><SvgPath d="M 123 1 L 0 0"  /></Svg>
        <View data-layer="ea8d7620-2a33-4110-bdfa-8c10ab233bf6" style={styles.login_group11}>
            <View data-layer="b85f84d8-0555-4108-935f-c9627297da12" style={styles.login_group11_iconIonicIosCheckboxOutline}>
                <Svg data-layer="6c1334c0-c0e6-4332-8022-927ca9529f03" style={styles.login_group11_iconIonicIosCheckboxOutline_path1} preserveAspectRatio="none" viewBox="4.5 4.5 15.00885009765625 15.00885009765625" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 18.25811386108398 4.5 L 5.75073766708374 4.5 C 5.058923244476318 4.5 4.5 5.058923244476318 4.5 5.75073766708374 L 4.5 18.25811386108398 C 4.5 18.94992828369141 5.058923244476318 19.50885200500488 5.75073766708374 19.50885200500488 L 18.25811386108398 19.50885200500488 C 18.94992828369141 19.50885200500488 19.50885200500488 18.94992828369141 19.50885200500488 18.25811386108398 L 19.50885200500488 5.75073766708374 C 19.50885200500488 5.058923244476318 18.94992828369141 4.5 18.25811386108398 4.5 Z M 18.41445541381836 18.10177230834961 C 18.41445541381836 18.27374839782715 18.27374839782715 18.41445541381836 18.10177230834961 18.41445541381836 L 5.907079696655273 18.41445541381836 C 5.735103607177734 18.41445541381836 5.594395637512207 18.27374839782715 5.594395637512207 18.10177230834961 L 5.594395637512207 5.907079696655273 C 5.594395637512207 5.735103607177734 5.735103607177734 5.594395637512207 5.907079696655273 5.594395637512207 L 18.10177230834961 5.594395637512207 C 18.27374839782715 5.594395637512207 18.41445541381836 5.735103607177734 18.41445541381836 5.907079696655273 L 18.41445541381836 18.10177230834961 Z"  /></Svg>
                <Svg data-layer="6ed1ca53-13ba-4232-9df6-4ca7ae5dc457" style={styles.login_group11_iconIonicIosCheckboxOutline_path2} preserveAspectRatio="none" viewBox="10.504688262939453 12.206249237060547 8.416595458984375 6.445220947265625" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 18.87681198120117 12.96060085296631 L 18.18890762329102 12.25315284729004 C 18.16154670715332 12.22188377380371 18.11855316162109 12.20624923706055 18.0794677734375 12.20624923706055 C 18.0794677734375 12.20624923706055 18.0794677734375 12.20624923706055 18.0794677734375 12.20624923706055 C 18.03647232055664 12.20624923706055 17.99738693237305 12.22188377380371 17.97002792358398 12.25315284729004 L 13.20159149169922 17.05676651000977 L 11.4661922454834 15.32136726379395 C 11.43492412567139 15.29009914398193 11.39583873748779 15.27446460723877 11.35675239562988 15.27446460723877 C 11.31766700744629 15.27446460723877 11.2785816192627 15.29009914398193 11.24731349945068 15.32136726379395 L 10.55159187316895 16.01708984375 C 10.48905372619629 16.07962799072266 10.48905372619629 16.17734146118164 10.55159187316895 16.23987770080566 L 12.74038219451904 18.42866897583008 C 12.88109016418457 18.56937599182129 13.05306625366211 18.65145683288574 13.19768333435059 18.65145683288574 C 13.40483665466309 18.65145683288574 13.58463001251221 18.4990234375 13.65107536315918 18.43648529052734 C 13.65107536315918 18.43648529052734 13.65107536315918 18.43648529052734 13.65498352050781 18.43648529052734 L 18.88072204589844 13.18338871002197 C 18.93544006347656 13.116943359375 18.93544006347656 13.0192289352417 18.87681198120117 12.96060085296631 Z"  /></Svg>
            </View>
            <Text data-layer="285e3686-9568-45be-a08d-267cd1f78b7e" style={styles.login_group11_rememberMe}>Remember Me</Text>
        </View>
    </ScrollView>
    );
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}


const styles = StyleSheet.create({
  "login": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 852,
    "left": 0,
    "top": 0
  },
  "login_continueAsGuest": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "STIXNonUnicode",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 164,
    "height": 40,
    "left": 115,
    "top": 458
  },
  "login_group9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 192,
    "height": 40,
    "left": 101,
    "top": 354
  },
  "login_group9_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "login_group9_group8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 155,
    "height": 22,
    "left": 19,
    "top": 9
  },
  "login_group9_group8_continueWithSso": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(172, 158, 158, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Symbol",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 118,
    "height": 15,
    "top": 4,
    "right": 0
  },
  "login_group9_group8_image2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 33,
    "height": "auto",
    "left": 0,
    "top": 0,
    "bottom": 0
  },
  "login_rectangle11ad6c51ae": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(221, 116, 116, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 192,
    "height": 40,
    "left": 101,
    "top": 433
  },
  "login_continueAsGuest3a455ede": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Symbol",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 116,
    "height": 15,
    "left": 139,
    "top": 446
  },
  "login_line1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 76,
    "height": 1,
    "left": 101.5,
    "top": 416
  },
  "login_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 76,
    "height": 1,
    "left": 217,
    "top": 416
  },
  "login_or": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(172, 158, 158, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Symbol",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 115,
    "height": 14,
    "left": 139,
    "top": 410
  },
  "login_kapplogo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 232,
    "height": 138,
    "left": 81,
    "top": 162
  },
  "login_image3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 79,
    "height": 70,
    "left": 157,
    "top": 762
  },
  "login_line3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 123.01,
    "height": 2,
    "left": 21.5,
    "top": 796
  },
  "login_line4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 123.01,
    "height": 2,
    "left": 248.5,
    "top": 796
  },
  "login_group11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 118,
    "height": 16,
    "left": 138,
    "top": 490
  },
  "login_group11_iconIonicIosCheckboxOutline": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15.01,
    "height": 15.01,
    "left": 0,
    "top": 0
  },
  "login_group11_iconIonicIosCheckboxOutline_path1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "login_group11_iconIonicIosCheckboxOutline_path2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 8.42,
    "height": 6.45,
    "left": 3.34,
    "top": 4.28
  },
  "login_group11_rememberMe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Symbol",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 93,
    "height": 15,
    "right": 0,
    "bottom": 0
  }
});