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
        "paddingStart": 80,
        "paddingTop": 205,
        "flex": 1
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 119,
        "paddingTop": 14,
        "width": 270,
        "height": 50,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Helvetica Neue",
        "fontSize": 20,
        "color": "rgba(112, 112, 112, 255)"
      }
    } > Back </Text>
    </View>
    </View>
    </View>

  );
};