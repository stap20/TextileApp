import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import LayoutManager from "./layoutManager";

export default function DeviceView({ route, navigation }) {
  const { machineName } = route.params;
  return <LayoutManager navigation={navigation} />;
}