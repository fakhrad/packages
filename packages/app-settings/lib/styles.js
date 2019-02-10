import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const bodyHeight = (deviceHeight * 90) / 100;
const profileTopHeight = (bodyHeight * 18) / 100;
const imageCircle = (profileTopHeight * 45) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: (deviceHeight * 10) / 100,
    flexDirection: "column",
    elevation: 10,
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    flex: 1
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
  headerImageContainer: {
    position: "absolute",
    right: 0,
    width: imageCircle,
    height: imageCircle,
    borderRadius: imageCircle / 2,
    borderColor: "$color2",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: (imageCircle * 85) / 100,
    height: (imageCircle * 85) / 100,
    borderRadius: imageCircle / 2
  },
  keyView: {
    height: deviceHeight,
    backgroundColor: "$color2"
  },
  container: {
    backgroundColor: "transparent",
    borderBottomColor: "$color3",
    borderBottomWidth: 2,
    height: (deviceHeight * 11.5) / 100,
    flexDirection: "row",
    paddingHorizontal: "3%"
  },
  left: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: "$fontSize5"
  },
  description: {
    marginTop: 5,
    color: "$color5",
    fontSize: "$fontSize6"
  },
  right: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  rightText: {
    fontSize: "$fontSize5"
  },
  btnTheme: {
    width: (deviceWidth * 6) / 100,
    height: (deviceWidth * 6) / 100,
    marginHorizontal: 5
  },
  modalContainer: {
    backgroundColor: "transparent",
    justifyContent: "center",
    borderRadius: 5,
    zIndex: 100
  }
});
