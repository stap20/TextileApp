import React, { useState } from "react";
import {
  StyleSheet,
  VirtualizedList,
  ScrollView,
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import DeviceStackNavigator from "./routes/DeviceStackNavigator";

export default function LayoutManager({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("./assets/header.jpg")}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.mainView}>
        <DeviceStackNavigator />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerBtnText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerBtnText}>Setup</Text>
        </TouchableOpacity>
        {/* 
        <Button style={styles.btn2} title="Setup" /> */}
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    //backgroundColor: "blue",
  },
  mainView: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: 10,
    //backgroundColor: "red",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },

  footerBtn: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "white",
    borderWidth: 2,
    margin: 2,
  },

  footerBtnText: {
    fontSize: 18,
    color: "black",
  },

  column: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
  },

  spaceBetween: {
    margin: 2,
  },

  image: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
