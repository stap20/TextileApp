import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../home/homePage";
import LfaPage from "../lfa/lfaPage";
import ManualStopsView from "../manualStopsMenu/manualStopsMenuPage";

const Stack = createStackNavigator();

const DeviceStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="LfaPage"
        component={LfaPage}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="ManualStopsView"
        component={ManualStopsView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default DeviceStackNavigator;
