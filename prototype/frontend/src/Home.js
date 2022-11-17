import {View, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Button title="Map" onPress={() => navigation.navigate('Map')} />
      <Button
        title="GPA Calculator"
        onPress={() => navigation.navigate('GPA')}
      />
      <Button title="Events" onPress={() => navigation.navigate('Events')} />
    </View>
  );
}
