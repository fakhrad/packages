import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const headerHeight = (deviceHeight * 30) / 100;
const imageCircle = (headerHeight * 50) / 100;

export default EStyleSheet.create({
  sideMenu: {
    flex: 1,
    backgroundColor: "$color3"
  },
  header: {
    height: "30%",
    backgroundColor: "transparent",
    alignItems: "center",
    paddingHorizontal: "7%",
    flexDirection: "row"
  },
  imageContainer: {
    width: imageCircle,
    height: imageCircle,
    borderWidth: 1,
    borderColor: "$color5",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  userImage: {
    width: (imageCircle * 90) / 100,
    height: (imageCircle * 90) / 100,
    borderRadius: 100
  },
  userInfo: {
    backgroundColor: "transparent",
    paddingLeft: 20
  },
  userName: {
    fontSize: "$fontSize4",
    fontWeight: "bold",
    textAlign: "left"
  },
  phoneNumber: {
    paddingTop: 10,
    fontSize: "$fontSize6",
    textAlign: "left",
    marginLeft: 5
  },
  body: {
    backgroundColor: "transparent",
    padding: "5%",
    paddingHorizontal: "12%"
  },
  navItem: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    height: (deviceHeight * 10) / 100
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 0.3
  },
  navItemIcon: {
    fontSize: "$fontSize2",
    color: "$color1"
  },
  navItemText: {
    marginLeft: "10%",
    fontSize: "$fontSize4",
    flex: 1,
    fontFamily: "$fontFamily1"
  },
  selectedNav: {
    color: "$color1"
  }
});
