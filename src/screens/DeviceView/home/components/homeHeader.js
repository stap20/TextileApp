import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function HomeHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/networkSignal.png")}
        resizeMode="contain"
        style={styles.signalImage}
      />
      <View style={{ flex: 6 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "stretch",
  },
  signalImage: {
    flex: 1,
    alignSelf: "stretch",
    marginRight: 5,
  },
});
