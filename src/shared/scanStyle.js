import React, { Component } from "react";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
const styles = {
  scrollViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#2196f3",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    paddingLeft: 15,
    paddingTop: 10,
    width: deviceWidth,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 16,
    color: "white",
  },
  textTitle1: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 16,
    color: "white",
  },
  cardView: {
    width: deviceWidth - 32,
    height: deviceHeight - 300,
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: "10%",
    backgroundColor: "#0a84ff",
    color: "black",
  },
  scanCardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: "white",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonScan: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "white",
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 5,
    paddingLeft: 25,
    marginTop: 10,
    alignItems: "center",
  },
  buttonScan2: {
    marginLeft: deviceWidth / 2 - 50,
    width: 100,
    height: 100,
  },
  descText: {
    padding: 16,
    textAlign: "center",
    fontSize: 20,
    color:"white"
  },
  highlight: {
    fontWeight: "700",
  },
  centerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    padding: 32,
    color: "white",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  bottomContent: {
    width: deviceWidth,
    height: 120,
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: "white",
    marginTop: 32,
    width: deviceWidth - 62,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
  },
  buttonTextStyle: {
    color: "black",
    fontWeight: "bold",
  },
  rowStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
export default styles;
