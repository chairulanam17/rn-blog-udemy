import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'lightseagreen' },
      }}
    >
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: 'Main' }}
      />

      <Stack.Screen name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
