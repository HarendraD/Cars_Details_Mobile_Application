import React from 'react'
import Login from './screens/Login'
import Register from './screens/Register'
import Vehicle from './screens/Vehicle'
import AddVehicle from './screens/AddVehicle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    
      <Stack.Screen name="Login" component={Login} options={{headerTitleAlign:'center'}}/>
      <Stack.Screen name="Register" component={Register} options={{headerTitleAlign:'center'}} />
      <Stack.Screen name="Vehicle" component={Vehicle} options={{headerTitleAlign:'center'}}/>
      <Stack.Screen name="AddVehicle" component={AddVehicle} options={{headerTitleAlign:'center'}}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  )

}
