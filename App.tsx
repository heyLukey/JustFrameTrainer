import * as React from "react"

import * as NavigationBar from 'expo-navigation-bar';
import HitBox from './components/HitBox';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from 'react-native';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  NavigationBar.setVisibilityAsync("hidden");
  return (
    <GestureHandlerRootView style={{ flex: 1 }} id='app'>
      <StatusBar hidden />
      <HitBox/>
    </GestureHandlerRootView>
  );
}
