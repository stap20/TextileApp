import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../shared/scanStyle";

export default function View1({ navigation }) {
  const activeScanner = () => {
    navigation.navigate("Scanner");
  };

  return (
    <View>
      <View style={styles.cardView}>
          <Text numberOfLines={8} style={styles.descText}>
            Please move your camera {"\n"} over the QR Code
          </Text>
          <Image
            source={require("../../assets/qr-code.png")}
            style={{ margin: 10, height: 350, width: 300 }}
          ></Image>
          <TouchableOpacity onPress={()=>{activeScanner()}} style={styles.buttonScan}>
            <View style={styles.buttonWrapper}>
              <Text style={{ ...styles.buttonTextStyle, color: "white" }}>
                Scan QR Code
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
}
