import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const Button = (props) => (
      <TouchableOpacity onPress={props.onPress}
        style = {{
          backgroundColor: "#ff637c",
          alignSelf:"center",
          padding: 10,
          margin: 10,
          ...props.buttonstyle,
        }}
        >
        <Text style={{color: '#fff'}}>{props.text}</Text>
      </TouchableOpacity>
  ) 
  return (
    <View style={styles.container}>
        <Button text="Say hello" onPress={() => Alert.alert("Hello")} />
        <Button text="Say goodbye" onPress={() => Alert.alert("goodbye!")}
        buttonstyle={{backgroundColor: "#4dc2c2"}} />
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
});
