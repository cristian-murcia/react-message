import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/home';
import { RecoverPassword, IRecoverPassword } from '../screens/recoverPassword';
import { Register } from '../screens/register';


export type RootParamsScreen = {
  Home: undefined,
  recoverPassword: IRecoverPassword,
  register: undefined
}

const Stack = createStackNavigator<RootParamsScreen>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent' //ios
          },
          cardStyle: {
            backgroundColor: 'gray'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recoverPassword"
          component={RecoverPassword}
          options={{ title: "Recuperar contraseña" }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ title: "Registro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};