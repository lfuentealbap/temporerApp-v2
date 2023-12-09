import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
