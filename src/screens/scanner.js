import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  ImageBackground,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import styles from "../shared/scanStyle";
import cache from "../shared/cache";

export default class Scanner extends Component {

  onSuccess = (e) => {  
    var wifiConfigration = JSON.parse(e.data)
    cache.set(Object.keys(wifiConfigration)[0], wifiConfigration);
    this.props.navigation.navigate("View3")
  };

  render() {
    return (
      <View style={styles.scrollViewStyle}>
        <Fragment>
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            ref={(node) => {
              this.scanner = node;
            }}
            onRead={this.onSuccess}
            topContent={
              <Text style={styles.centerText}>
                Please move your camera {"\n"} over the QR Code
              </Text>
            }
            bottomContent={
              <View>
                <ImageBackground style={styles.bottomContent}>
                </ImageBackground>
              </View>
            }
          />
        </Fragment>
      </View>
    );
  }
}
