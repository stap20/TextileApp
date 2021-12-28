import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomeDetailsItem(props) {
  return (
    <View style={[styles.item, styles.spaceBetweenItems]}>
      <Text style={styles.labelPart}>{props.label}</Text>
      <Text style={styles.textPart}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },
  labelPart: {
    flex: 1,
    alignSelf: "stretch",
    textAlignVertical: "center",
    textAlign: "right",
    fontSize: 20,
    color: "black",
    paddingRight: 15,
  },

  textPart: {
    flex: 3,
    alignSelf: "stretch",
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "#6FD0F6",
    fontSize: 30,
    color: "black",
  },

  spaceBetweenItems: {
    margin: 3,
    marginVertical: 15,
  },
});
