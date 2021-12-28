import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function LfaSideBtn(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputBtn}>
        <Text style={styles.unit}>Cm/Rev.</Text>
        <TouchableOpacity>
          <Image
            resizeMode="stretch"
            style={styles.inputIcon}
            source={require("../../assets/switchInput.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lfaBtn}>
        <TouchableOpacity onPress={props.manualStopsMenuPress}>
          <Image
            resizeMode="stretch"
            style={styles.lfaIcon}
            source={require("../../assets/switchLfa.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBtn: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  lfaBtn: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    marginBottom: 30,
  },
  unit: {
    flex: 1,
    paddingVertical: 20,
    fontSize: 18,
    color: "black",
  },
  inputIcon: {
    width: 50,
    height: 69,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  lfaIcon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
