import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const[pressCount, setPressCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>You're pressed the button: {pressCount}time(s)</Text>
      <Button  title={`Pressed ${pressCount} time(s)`} onPress={() =>setPressCount(pressCount + 1)}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});
