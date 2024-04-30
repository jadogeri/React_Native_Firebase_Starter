import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Border, Padding } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SubmitFormButton = memo(
  ({ propFontFamily, propFontFamily1, propFontWeight, propFontFamily2 }) => {
    const getStartedStyle = useMemo(() => {
      return {
        ...getStyleValue("fontFamily", propFontFamily),
      };
    }, [propFontFamily]);

    const didntReceiveTheStyle = useMemo(() => {
      return {
        ...getStyleValue("fontFamily", propFontFamily1),
      };
    }, [propFontFamily1]);

    const resendStyle = useMemo(() => {
      return {
        ...getStyleValue("fontWeight", propFontWeight),
        ...getStyleValue("fontFamily", propFontFamily2),
      };
    }, [propFontWeight, propFontFamily2]);

    return (
      <View style={styles.submitButton}>
        <LinearGradient
          style={styles.getStartedButton}
          locations={[0, 0.27, 0.56, 0.83]}
          colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
        >
          <Text style={[styles.getStarted, getStartedStyle]}>Submit</Text>
        </LinearGradient>
        <View style={styles.resend}>
          <Text
            style={[
              styles.didntReceiveThe,
              styles.resend1Typo,
              didntReceiveTheStyle,
            ]}
          >
            Didn’t receive the code?
          </Text>
          <Text style={[styles.resend1, styles.resend1Typo, resendStyle]}>
            Resend
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  resend1Typo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  getStarted: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
  },
  getStartedButton: {
    borderRadius: Border.br_3xs,
    width: 300,
    height: 50,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  didntReceiveThe: {
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorGainsboro,
  },
  resend1: {
    color: Color.colorDeepskyblue_100,
    marginLeft: 4,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
  },
  resend: {
    marginTop: 8,
    flexDirection: "row",
  },
  submitButton: {
    marginTop: 48,
    alignItems: "center",
  },
});

export default SubmitFormButton;
