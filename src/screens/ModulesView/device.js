import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
export default function Device(props) {
  return (
    <TouchableOpacity
      style={[styles.card, styles.spaceBetween, styles.cardShadow]}
      onPress={() => {
        props.navigation.navigate("DeviceView", {
          machineName: props.machineName,
        });
      }}
    >
      <View style={styles.row}>
        {/* <Avatar
          style={[styles.avatar, styles.spaceBetween]}
          bg="amber.500"
          alignSelf="center"
          size="xl"
        >
          {props.machineName}
        </Avatar> */}
        <View style={[styles.details, styles.spaceBetween]}>
          <Text style={styles.spaceBetween}>Name: {props.machineName}</Text>
          <Text style={styles.spaceBetween}>Area: Factory 1</Text>
          <Text style={styles.spaceBetween}>Type: textile</Text>
        </View>
        <View style={[styles.status, styles.spaceBetween]}>
          <Text
            style={[
              styles.chip,
              styles.spaceBetween,
              { borderColor: "green", color: "green" },
            ]}
          >
            Working
          </Text>
          <Text
            style={[
              styles.chip,
              styles.spaceBetween,
              { borderColor: "red", color: "red" },
            ]}
          >
            Area 1
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    marginVertical: 18,
    marginHorizontal: 20,
    opacity: 0.8,
  },

  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },

  avatar: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },

  status: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },

  chip: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 11,
  },

  details: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignSelf: "stretch",
    paddingLeft: 20,
  },

  spaceBetween: {
    margin: 2,
    color: "black",
  },
  r2: {
    flex: 2,
    backgroundColor: "blue",
    alignSelf: "stretch",
  },
});
