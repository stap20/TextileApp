import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
} from "react-native";
import WifiManager from "react-native-wifi-reborn";
import cache from "../shared/cache";

export default function App({ navigation }) {
  const [ssid, setSSID] = React.useState("");
  const [pw, setPW] = React.useState("");

  const handleSSIDChange = (event) => setSSID(event.target.value);
  const handlePWChange = (event) => setPW(event.target.value);

  var connectToWifi = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location permission is required for WiFi connections",
        message:
          "This app needs location permission as this is required  " +
          "to scan for wifi networks.",
        buttonNegative: "DENY",
        buttonPositive: "ALLOW",
      }
    ).then((res) => {
      if (res === PermissionsAndroid.RESULTS.GRANTED) {
        WifiManager.connectToProtectedSSID(
          "ESP8266",
          "123456789",
          false
        ).then(
          () => {
            alert("Connected successfully!");
            console.log("Connected successfully!");
          },
          () => {
            alert("Connection failed!");
            console.log("Connection failed!");
          }
        );
      } else {
        alert("denied");
        console.log("denied");
      }
    });
  };
  var checkNetwork = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location permission is required for WiFi connections",
        message:
          "This app needs location permission as this is required  " +
          "to scan for wifi networks.",
        buttonNegative: "DENY",
        buttonPositive: "ALLOW",
      }
    ).then((res) => {
      if (res === PermissionsAndroid.RESULTS.GRANTED) {
        WifiManager.getCurrentWifiSSID().then(
          (ssid) => {
            alert("Your current connected wifi SSID is " + ssid);
          },
          () => {
            alert("Cannot get current SSID!");
          }
        );
      } else {
        alert("denied");
      }
    });
  };

  console.log("------------------------------------------");
  connectToWifi();

  return (
    <View>
      <Button
      title={"connect"}
        onPress={() => {
          connectToWifi();
        }}
      />
    </View>
  );
}
