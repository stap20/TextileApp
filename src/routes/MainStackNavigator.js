import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ModulesView from "../screens/ModulesView/modulesView";
import DeviceView from "../screens/DeviceView/deviceView";
import ScanScreen from "../screens/QrcodeScanner/scanner";
import testWifi from "../middleware/wifiConnector";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ModulesView"
        component={ModulesView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="DeviceView"
        component={DeviceView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />

      {/* <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="testWifi"
        component={testWifi}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
