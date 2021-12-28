import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function HomeSideBtn(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputBtn}>
        <TouchableOpacity>
          <Image
            resizeMode="stretch"
            style={styles.inputIcon}
            source={require("../../assets/switchInput.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lfaBtn}>
        <TouchableOpacity onPress={props.lfaPress}>
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
