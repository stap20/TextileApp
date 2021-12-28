import React from "react";
import {
  Text,
  View,
  Button
} from "react-native";

export default function View3({ navigation }){
  return (
    <View>
        <Text>View 3</Text>
        <Button title = "Back" onPress={()=>{navigation.navigate("View2")}}/>
    </View>
  );
};