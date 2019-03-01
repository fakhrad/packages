import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const circleImage = (deviceWidth * 30) / 100;
export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    flex: 1,
    paddingHorizontal: "5%"
  },
  mainContent: {
    backgroundColor: "transparent",
    marginVertical: (deviceHeight * 8) / 100,
    height: (deviceHeight * 84) / 100
  },
  title: {
    fontSize: "$fontSize1 * 1.2",
    textAlign: "center",
    color: "$color2"
  },
  desc: {
    fontSize: "$fontSize5",
    textAlign: "center",
    color: "$color3",
    marginTop: 10
  },
  images: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    marginTop: 20
  },
  image: {
    width: circleImage,
    height: circleImage,
    borderRadius: 100,
    marginHorizontal: 5,
    borderColor: "$color2",
    borderWidth: 3
  },
  values: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  weight: {
    fontSize: "$fontSize4",
    textAlign: "center",
    color: "$color2",
    marginVertical: 10
  },
  fee: {
    fontSize: "$fontSize4",
    textAlign: "center",
    color: "$color2"
  },
  actions: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    paddingHorizontal: "5%"
  },
  actionBtn: {
    backgroundColor: "$color2",
    flexDirection: "row",
    marginBottom: 10,
    height: (deviceHeight * 8) / 100,
    borderRadius: 6
  },
  actionBtnIcon: {
    fontSize: "$fontSize3",
    marginRight: 10
  },
  actionBtnText: {
    fontSize: "$fontSize4"
  }
});
