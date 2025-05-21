import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import IdeiaScreen from './screens/IdeiaScreen';
import EditandoScreen from './screens/EditandoScreen';
import AgendamentosScreen from './screens/AgendamentosScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import SignInScreen from './screens/SignInScreen';

type RootStackParamList = {
  Login: undefined;
  Singin: undefined;
  Home: undefined;
  Ideia: undefined;
  Editando: undefined;
  Agendamentos: undefined;
  Historico: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Singin" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ideia" component={IdeiaScreen} />
        <Stack.Screen name="Editando" component={EditandoScreen} />
        <Stack.Screen name="Agendamentos" component={AgendamentosScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
