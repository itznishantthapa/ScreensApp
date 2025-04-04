import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack =createStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Screen1' component={Screen1} /> 
          <Stack.Screen name='Screen2' component={Screen2} />
          <Stack.Screen name='Screen3' component={Screen3} />
          {/* <Stack.Screen name='Screen3' component={Screen3} /> */}
      </Stack.Navigator>
 </NavigationContainer>
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
