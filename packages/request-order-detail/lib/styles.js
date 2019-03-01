import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const headerHeight = (deviceHeight * 8) / 100;
export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1
  },
  header: {
    backgroundColor: "transparent",
    height: headerHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  headerContent: {
    backgroundColor: "$color1",
    paddingVertical: 3,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: (deviceWidth * 45) / 100
  },
  headerText: {
    color: "$color2"
  },
  headerIcon: {
    color: "$color2",
    position: "absolute",
    left: 10
  },
  recomm: {
    paddingVertical: 8,
    backgroundColor: "transparent",
    height: (deviceHeight * 33) / 100
  },
  mainContent: {
    backgroundColor: "transparent",
    height: deviceHeight,
    padding: (deviceHeight * 5) / 100,
    marginBottom: (deviceHeight * 4) / 100,
    paddingTop: 0
  },
  title: {
    fontWeight: "bold",
    fontSize: "$fontSize2"
  },
  helpText: {
    marginTop: 10,
    fontSize: "$fontSize6"
  },
  slider: {
    flex: 1,
  },
  sliderContainer: {
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  payTypeTitle: {
    marginTop: 10,
    fontSize: "$fontSize5"
  },
  paytypeContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginVertical: 10
  },
  payTypeWrapper: {
    backgroundColor: "transparent",
    margin: 6,
    flex: 1
  },
  paytypeBtn: {
    flex: 1,
    marginLeft: 0,
    elevation: 4,
    padding: 5,
    backgroundColor: "$color2",
    borderColor: "$color1",
    height: (deviceHeight * 9) / 100,
    borderRadius: 7,
  },
  paytypeBtnIcon: {
    fontSize: "$fontSize1"
  },
  payTypeText: {
    fontSize: "$fontSize5",
    textAlign: "center",
    marginTop: 10
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    height: "10%"
  },
  btnAction: {
    flex: 1
  },
  btnActionText: {
    color: "$color2",
    fontSize: "$fontSize4"
  },
  inputContainer: {
    height: (deviceHeight * 17) / 100,
    backgroundColor: "transparent",
    marginBottom: (deviceHeight * 10) / 100
  },
  btn: {
    height: (deviceHeight * 11) / 100
  },
  inputTitle: {
    fontSize: "$fontSize5",
    fontFamily: "$fontFamily1",
    textAlign: "left"
  },
  elementContainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 10
  },
  inputIcon: {
    fontSize: "$fontSize2",
    alignSelf: "center",
    margin: "5%"
  },
  inputElement: {
    backgroundColor: "transparent",
    borderWidth: 0,
    flex: 1,
    fontSize: "$fontSize5",
    fontFamily: "$fontFamily1"
  },
  radiosGroup: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    marginVertical: 20
  },
  radioBtn: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginRight: 20
  },
  radioBtnCircle: {
    width: (deviceHeight * 3) / 100,
    height: (deviceHeight * 3) / 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "$color1",
    marginRight: 7
  },
  radioBtnCircleContent: {
    width: (deviceHeight * 2) / 100,
    height: (deviceHeight * 2) / 100,
    borderRadius: 100,
    backgroundColor: "$color1"
  },
  radioBtnText: {
    fontSize: "$fontSize5"
  }
});
