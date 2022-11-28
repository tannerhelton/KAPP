import {View, Text, StyleSheet} from 'react-native';

export default function ItemDisplay({eventData}) {
  const timeData = eventData.description;
  const locData = eventData.description;
  return (
    <View style={styles.container}>
      <Text>{eventData.title}</Text>
      <Text>
        {timeData.substring(
          timeData.indexOf('From') + 123,
          timeData.indexOf('to <time') - 15,
        )}
      </Text>
      <Text>
        {locData
          .substring(
            locData.indexOf('<span class="p-location location">') + 34,
            locData.indexOf('</span>.'),
          )
          .indexOf('<a') > -1
          ? locData.substring(
              locData.indexOf('class="url">') + 12,
              locData.indexOf('</a></span>.'),
            )
          : locData.substring(
              locData.indexOf('<span class="p-location location">') + 34,
              locData.indexOf('</span>.'),
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
