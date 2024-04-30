import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";

const Password = memo(({ passwordInput }) => {
  return (
    <View style={styles.password}>
      <Text style={[styles.password1, styles.textTypo]}>{passwordInput}</Text>
      <View style={[styles.mail, styles.mailFlexBox]}>
        <View style={styles.mailFlexBox}>
          <Image
            style={styles.icbaselineEmailIcon}
            contentFit="cover"
            source={require("../../assets/icbaselineemail8.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>*************</Text>
        </View>
        <Image
          style={styles.icbaselineEmailIcon1}
          contentFit="cover"
          source={require("../../assets/icbaselineemail2.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  mailFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  password1: {
    fontFamily: FontFamily.urbanistRegular,
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    letterSpacing: -0.6,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 12,
  },
  icbaselineEmailIcon1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 300,
    height: 50,
    justifyContent: "space-between",
    padding: Padding.p_smi,
    marginTop: 4,
  },
  password: {
    justifyContent: "center",
    marginTop: 24,
  },
});

export default Password;
