import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import HomeHeader from "./components/homeHeader";
import HomeDetailsItem from "./components/homeDetailsItem";
import HomeSideBtn from "./components/homeSideBtn";

const DATA = [
  { id: 0, label: "Order", value: "-----" },
  { id: 1, label: "Fabrics", value: "-----" },
  { id: 2, label: "Speed", value: "0.0" },
  { id: 3, label: "Count", value: "0" },
  { id: 4, label: "Target", value: "1000" },
  { id: 5, label: "Total", value: "0%" },
];

export default function LayoutManager({ navigation }) {
  const navigateLFA = () => {
    navigation.navigate("LfaPage");
  };
  const getListOfDetailsItem = (list) => {
    return list.map((data) => {
      return (
        <HomeDetailsItem
          key={data.id}
          label={data.label}
          value={data.value}
          navigation={navigation}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader navigation={navigation} />

      <View style={styles.mainView}>
        <View style={[styles.column, styles.labelView]}>
          {getListOfDetailsItem(DATA)}
        </View>
        <View style={[styles.column, styles.sideBtnsView]}>
          <HomeSideBtn lfaPress={navigateLFA}/>
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
