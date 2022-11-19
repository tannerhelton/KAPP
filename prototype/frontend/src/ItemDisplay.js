import {View, Text, StyleSheet} from 'react-native';

export default function ItemDisplay({eventData}) {
  return (
    <View style={styles.container}>
      <Text>{eventData.title}</Text>
      <Text>
        {eventData.description.substring(
          eventData.description.indexOf('From') + 123,
          eventData.description.indexOf('to <time') - 15,
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
});
