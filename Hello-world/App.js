import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 const App = ()=>{
  return (
    <View style={MyStyle.ViewStyle}>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default App;

const MyStyle = StyleSheet.create({
  ViewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle:{
    color: 'black',
  }
});
