import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width, height: deviceHeight } = Dimensions.get("window");
const helpRowHeight = (((deviceHeight * 80) / 100) * 12) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1,
    position: "relative"
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: (deviceHeight * 10) / 100,
    flexDirection: "column",
    elevation: 10,
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
  flatList: {
    backgroundColor: "$color2",
  },
  swipeListView:{
    paddingTop: 5,
  }
});
