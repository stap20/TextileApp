import React from "react";
import { StackActions } from "@react-navigation/native";
import { QRscanner } from "react-native-qr-scanner";
import cache from "../../shared/cache";

export default function Scanner({ navigation }) {
  const onRead = (res) => {
    const popAction = StackActions.pop(1);
    cache.set("qrtest", JSON.parse(res.data));
    navigation.dispatch(popAction);
  };

  return (
    <QRscanner
      onRead={onRead}
      cornerBorderColor="green"
      // isRepeatScan={true}
      cornerColor="black"
      scanBarColor="green"
      hintText="Please Align QRCode"
      flashMode={false}
      rectHeight={280}
      rectWidth={280}
    />
  );
}
