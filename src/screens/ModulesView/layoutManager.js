import React, { useState } from "react";
import {
  StyleSheet,
  VirtualizedList,
  ScrollView,
  SafeAreaView,
  View,
  ImageBackground,
  Button,
} from "react-native";
import Device from "./device";
import cache from "../../shared/cache";

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: `M${index + 1}`,
});

const getItemCount = (data) => 10;

const Item = ({ data, navigation }) => {
  return <Device machineName={data.name} navigation={navigation} />;
};

export default function LayoutManager({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  const scanAccessPoint = () => {
    navigation.navigate("ScanScreen");
  };
  const connectWifi = () => {
    navigation.navigate("testWifi");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <VirtualizedList
          data={DATA}
          initialNumToRender={1}
          renderItem={({ item }) => (
            <Item data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          style={styles.column}
        />
        <Button
          variant="outline"
          style={styles.btn}
          title={"Add New Device"}
          onPress={() => {
            scanAccessPoint();
          }}
        />
        <Button
          variant="outline"
          style={styles.btn}
          title={"connect wifi"}
          onPress={() => {
            connectWifi();
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  column: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  btn: {
    alignItems: "flex-start",
    borderRadius: 20,
  },
  status: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },
  modalBtn: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 20,
  },
  spaceBetween: {
    margin: 2,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
