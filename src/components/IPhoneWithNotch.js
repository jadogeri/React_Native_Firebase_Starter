import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../../GlobalStyles";

const IPhoneWithNotch = memo(() => {
  return (
    <View style={[styles.iphoneWithNotch, styles.timeFlexBox]}>
      <View style={[styles.leftArea, styles.areaFlexBox]}>
        <View style={[styles.time, styles.timeFlexBox]}>
          <Text style={styles.text}>9:41</Text>
          <Image
            style={styles.locationServicesActiveWit}
            contentFit="cover"
            source={require("../../assets/location-services--active-with-condition.png")}
          />
        </View>
      </View>
      <View style={styles.notchArea} />
      <View style={[styles.rightArea, styles.areaFlexBox]}>
        <View style={[styles.statusArea, styles.statusAreaPosition]}>
          <View style={[styles.autoLayout, styles.statusAreaPosition]}>
            <View style={[styles.sim1SingleSim, styles.sim1SingleSimLayout]}>
              <View style={[styles.bar4, styles.barPosition]} />
              <View style={[styles.bar3, styles.barPosition]} />
              <View style={[styles.bar2, styles.barPosition]} />
              <View style={[styles.bar1, styles.barPosition]} />
            </View>
            <Image
              style={[styles.networkWifiFull, styles.sim1SingleSimLayout]}
              contentFit="cover"
              source={require("../../assets/network--wifi-full.png")}
            />
            <Image
              style={styles.batteryFullUncharged}
              contentFit="cover"
              source={require("../../assets/battery--full-uncharged.png")}
            />
          </View>
        </View>
        <Image
          style={styles.privacyIndicatorNone}
          contentFit="cover"
          source={require("../../assets/privacy-indicator--none.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  areaFlexBox: {
    flex: 1,
    height: 44,
  },
  statusAreaPosition: {
    top: "50%",
    position: "absolute",
  },
  sim1SingleSimLayout: {
    width: 20,
    overflow: "hidden",
  },
  barPosition: {
    width: 3,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_12xs,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  locationServicesActiveWit: {
    width: 16,
    height: 16,
    display: "none",
    marginLeft: 2,
    overflow: "hidden",
  },
  time: {
    top: 16,
    left: 0,
  },
  leftArea: {
    overflow: "hidden",
    height: 44,
  },
  notchArea: {
    width: 210,
    height: 44,
  },
  bar4: {
    marginTop: -6,
    marginLeft: 6.4,
    height: 12,
  },
  bar3: {
    marginTop: -3.6,
    marginLeft: 1.1,
    height: 10,
  },
  bar2: {
    marginTop: -1,
    marginLeft: -4.2,
    height: 7,
  },
  bar1: {
    marginTop: 1.4,
    marginLeft: -9.6,
    height: 5,
  },
  sim1SingleSim: {
    height: 14,
  },
  networkWifiFull: {
    marginLeft: 3,
    height: 12,
  },
  batteryFullUncharged: {
    width: 28,
    marginLeft: 3,
    height: 14,
  },
  autoLayout: {
    marginTop: -7,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 74,
    height: 14,
    left: "50%",
  },
  privacyIndicatorNone: {
    top: 6,
    left: 6,
    width: 6,
    height: 6,
    position: "absolute",
  },
  rightArea: {
    height: 44,
  },
  iphoneWithNotch: {
    marginLeft: -180,
    top: 0,
    width: 360,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    left: "50%",
  },
});

export default IPhoneWithNotch;
