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

export default function LayoutManager({ navigation }) {
  const navigateManualStopsMenu = () => {
    navigation.navigate("ManualStopsView");
  };

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header} />
      <View style={styles.mainView}>
        <View style={[styles.column, styles.labelView]}>
          {getListOfDetailsItem(DATA)}
        </View>
        <View style={[styles.column, styles.sideBtnsView]}>
          <LfaSideBtn
            manualStopsMenuPress={navigateManualStopsMenu}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "#D8E3F8",
  },

  header: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "stretch",
  },

  mainView: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: 20,
  },

  column: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 1,
  },

  labelView: {
    flex: 4,
    alignSelf: "stretch",
  },

  sideBtnsView: {
    flex: 1,
    alignSelf: "stretch",
  },
});
