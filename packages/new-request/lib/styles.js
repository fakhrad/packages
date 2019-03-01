import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const sectionItemWidth = (deviceWidth * 50) / 100 - 25;
export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: (deviceHeight * 11) / 100,
    flexDirection: "column",
    elevation: 1,
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10
  },
  headerText: {
    color: "$color2",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    flex: 1,
    textAlign: "center"
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  headerSegment: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    borderColor: "$color2",
    borderWidth: 1,
    alignSelf: "center"
  },
  segmentItem: {
    backgroundColor: "transparent"
  },
  segmentItemBtn: {
    padding: 5,
    paddingHorizontal: 10
  },
  segmentItemBtn_active: {
    backgroundColor: "$color2"
  },
  segmentItemBtnText: {
    color: "$color2",
    fontSize: "$fontSize5"
  },
  segmentItemBtnText_active: {
    color: "$color5"
  },
  sectionList: {
    padding: 10,
    paddingVertical: 10,
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "$color3"
  },

});
