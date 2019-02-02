import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: "50%",
    flexDirection: "column",
    elevation: 10
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    height: "20%"
  },
  headerText: {
    color: "$color2",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    flex: 1,
    textAlign: "center"
  },
  headerActionsBtn: {
    backgroundColor: "$color2",
    height: 35,
    width: 35,
    borderRadius: 50
  },
  headerActionsIcon: {
    fontSize: "$fontSize4",
    color: "rgba(0,0,0,.3)"
  },
  headerBody: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: "$fontSize1",
    color: "$color2"
  },
  desc: {
    fontSize: "$fontSize6 * 1.2",
    color: "$color4"
  },
  image: {
    marginTop: 20
  },
  content: {
    backgroundColor: "$color2",
    paddingHorizontal: "6%",
    paddingVertical: "2%"
  },
  container: {
    backgroundColor: "transparent",
    height: (height * 12) / 100,
    borderBottomColor: "$color3",
    borderBottomWidth: 2,
    justifyContent: "center"
  },
  containerTitle: {
    color: "$color1",
    marginBottom: 5,
    fontSize: "$fontSize4"
  },
  containerValue: {
    color: "$color5",
    fontSize: "$fontSize6 * 1.2",
    textAlign: "left"
  },
  containerLinkable: {
    backgroundColor: "transparent",
    alignItems: "flex-start"
  }
});
