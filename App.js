import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Labels from './screens/Labels';
import Home from "./screens/Home.js";
import NewNote from "./screens/NewNote.js";
import EditNote from './screens/EditNote.js';
import ManageLabels from './screens/ManageLabels';
import LabelManager from './components/LabelManager';
import Trash from './screens/Trash.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LabelManager>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="New note" component={NewNote} />
          <Stack.Screen name="Edit note" component={EditNote} /> 
          <Stack.Screen name="Manage labels" component={ManageLabels} />
          <Stack.Screen name="Labels" component={Labels} />
          <Stack.Screen name="Trash" component={Trash} />
        </Stack.Navigator>
      </LabelManager>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
