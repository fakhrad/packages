import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

export default EStyleSheet.create({
  scrollKeyboardView: {
    height: deviceHeight
  },
  top: {
    height: (deviceHeight * 45) / 100,
    backgroundColor: "$color1",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "5%"
  },
  bottom: {
    height: (deviceHeight * 55) / 100,
    paddingTop: "5%"
  },
  topIcon: {
    fontWeight: "normal",
    fontSize: "$fontSize1 * 3",
    color: "$color3"
  },
  topImage: {
    marginBottom: "5%"
  },
  topText: {
    fontFamily: "$fontFamily1",
    fontSize: "$fontSize4",
    color: "$color2",
    textAlign: "center"
  },

  bottomBtn: {
    borderRadius: 30,
    width: "50%",
    height: "16%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    alignSelf: "center"
  },
  bottomBtnText: {
    margin: 0,
    fontFamily: "$fontFamily1",
    color: "$color2",
    fontSize: "$fontSize4"
  },

  inputContainer: {
    width: "80%",
    borderBottomColor: "$color4",
    borderBottomWidth: 1,
    marginHorizontal: "10%",
    fontSize: "$fontSize4",
    marginBottom: "5%",
  },
  chooseCity: {
    flexDirection: "row",
    backgroundColor: "$color2",
    height: "20%",
    width: "80%",
    marginHorizontal: "10%",
    borderBottomColor: "$color4",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  chooseCityText: {
    color: "$color5",
    fontSize: "$fontSize4"
  },
  btnCityIcon: {
    fontSize: "$fontSize3",
    color: "$color5"
  }
});
