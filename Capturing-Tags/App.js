import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
 
  return (
    <View style={styles.container}>
        <Button title="Button 1" onPress={() => Alert.alert("Hello")} />
        <TouchableOpacity
          onPress={() => Alert.alert("Hello 2")}
          style={styles.button}        
          >
          <Text  style={{color: "white",fontSize: 18}} >Button 2</Text>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'blue',
    padding: 10,
    alignItems:'center',
    marginTop: 10,
  }
});
