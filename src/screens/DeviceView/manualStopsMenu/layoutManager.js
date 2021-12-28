import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import LfaDetailsItem from "./components/lfaDetailsItem";
import LfaSideBtn from "./components/lfaSideBtn";

const DATA = [
  { id: 0, label: "LFA6", value: "0" },
  { id: 1, label: "LFA5", value: "0" },
  { id: 2, label: "LFA4", value: "0" },
  { id: 3, label: "LFA3", value: "0" },
  { id: 4, label: "LFA2", value: "0" },
  { id: 5, label: "LFA1", value: "0" },
];

function generateLayout(props) {
  var rows = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
      row.push(<View style={[styles.btn, styles.spaceBetween]}></View>);
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  }

  return rows;
}

export default function LayoutManager({ navigation }) {
  const getListOfDetailsItem = (list) => {
    return list.map((data) => {
      return (
        <LfaDetailsItem
          key={data.id}
          label={data.label}
          value={data.value}
          navigation={navigation}
        />
      );
    });
  };
  /***
   * we use header view here to make responsive margin top
   */
  return (
    <SafeAreaView style={styles.container}>{generateLayout([])}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "#D8E3F8",
  },

  mainView: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: 20,
    backgroundColor: "green",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "red",
    marginVertical: 5,
    height: 80,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 6,
  },
  spaceBetween: {
    margin: 2,
  },
});
