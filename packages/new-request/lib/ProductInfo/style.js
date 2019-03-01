import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const modalHeight = (deviceHeight * 70) / 100;
const topHeight = (modalHeight * 85) / 100;
const bottomHeight = (modalHeight * 15) / 100;
const imageContainerHeight = (topHeight * 50) / 100;
const infoContainerHeight = (topHeight * 60) / 100;

export default EStyleSheet.create({
  modalContainer: {
    backgroundColor: "transparent",
    height: modalHeight,
    // marginBottom: "2%",
    // marginHorizontal: "2%",
    position: "absolute",
    bottom: 0,
    left: 0,
    elevation: 10,
    right: 0,
    paddingHorizontal: "2%"
  },
  modalTopContainer: {
    height: topHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 5
  },
  modalBottomContainer: {
    height: bottomHeight,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  modalBtnClose: {
    flex: 1,
    backgroundColor: "$color2",
    width: "100%",
    borderRadius: 10,
    justifyContent: "center"
  },
  modalBtnCloseText: {
    fontSize: "$fontSize2",
    fontFamily: "$fontFamily1",
    color: "$color1"
  },
  scrollView: {
    flex: 1
  },
  imageContainer: {
    height: imageContainerHeight,
    margin: "3%",
    borderRadius: 6,
    elevation: 4
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6
  },
  infos: {
    height: infoContainerHeight,
    padding: "3%",
    paddingTop: 0
  },
  name: {
    fontSize: "$fontSize2",
    fontWeight: "bold",
    marginVertical: "3%"
  },
  desc: {
    fontSize: "$fontSize5"
  },
  longDesc: {
    fontSize: "$fontSize4",
    fontWeight: "bold",
    marginVertical: "3%"
  },
  longDescValue: {
    fontSize: "$fontSize5",
    color: "$color5"
  }
});
