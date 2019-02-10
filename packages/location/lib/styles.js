import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const bodyHeight = (deviceHeight * 90) / 100;
const profileTopHeight = (bodyHeight * 18) / 100;
const imageCircle = (profileTopHeight * 45) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: "10%",
    flexDirection: "column",
    elevation: 10
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

  action: {
    position: "absolute",
    bottom: 10,
    height: (deviceHeight * 25) / 100,
    right: 0,
    left: 0,
    margin: "5%",
    elevation: 5,
    borderRadius: 10,
    padding: 0
  },
  actionAddress: {
    padding: "3%"
  },
  actionAddressTitle: {
    color: "$color5",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    textAlign: "left"
  },
  actionAddressBottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10
  },
  actionAddressBottomIcon: {
    marginRight: 10,
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1"
  },
  actionAddressBottomText: {
    fontSize: "$fontSize5",
    color: "$color5",
    fontFamily: "$fontFamily1"
  },
  actionBtn: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    backgroundColor: "$color1",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    height: "25%"
  },
  actionBtnText: {
    color: "$color2",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    paddingRight: 10
  },
  searchBtn: {
    position: "absolute",
    right: 0,
    width: imageCircle,
    height: imageCircle,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtnIcon: {
    color: "$color2",
    fontSize: "$fontSize2"
  }
});
