import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 117,
        "paddingTop": 32,
        "flex": 1
      }
    } >
    <Text style = {
      {
        "fontFamily": "STIXSizeOneSym",
        "fontSize": 40,
        "textAlign": "center",
        "color": "rgba(222, 51, 51, 255)"
      }
    } > EVENTS </Text>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "marginStart": 29,
        "marginTop": 733
      }
    } >
    <Text style = {
      {
        "fontFamily": "STIXNonUnicode",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)",
        "marginTop": 4
      }
    } > BACK </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": -94,
        "width": 87,
        "height": 24,
        "borderRadius": 12,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)",
        "backgroundColor": "rgba(185, 30, 30, 255)"
      }
    }
    />
    </View>
    </View>

  );
};