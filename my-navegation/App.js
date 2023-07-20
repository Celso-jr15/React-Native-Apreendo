import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/global/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My Navegation</Text>
      <StatusBar style="auto" />
    </View>
  );
}


