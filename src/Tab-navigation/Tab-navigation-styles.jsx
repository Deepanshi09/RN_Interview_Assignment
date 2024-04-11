import { StyleSheet, Platform } from "react-native";



export default styles = StyleSheet.create({
  blueDotImageStyle: { height: 3, width: 38, marginTop: 5 },
  tabIconStyle: { height: 32, width: 26 },
  tabBarStyle: {
    height: 80,
    width: 375,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignSelf: "center",
    marginBottom: 0,
  },

  eachTabMainView: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 55,
  },
  chatBadge: {
    backgroundColor:"yellow",
    borderRadius: 20,
    height: 8,
    width: 8,
    position: "absolute",
    top: 10,
    right: 0,
  },
});
